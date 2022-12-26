<template>
  <section class="py-8">
    <div class="block-content">
      <h1 class="text-center w-full">Unit Conversion</h1>
    </div>
    <div class="block-content justify-center mt-8">
      <div class="tabs">
        <div
          v-for="tab in tabs"
          :key="tab"
          class="tab"
          :class="{ 'is-active': tab === activeTab }"
          @click="setActiveTab(tab)"
        >
          {{ tab }}
        </div>
      </div>
    </div>
    <div class="block-content grid grid-cols-2 gap-8 mt-8">
      <div class="col">
        <div class="input-wrapper">
          <input v-model="source" type="number" />

          <select v-model="sourceUnit" name="unit-selector">
            <template v-if="!loading">
              <option v-for="item in conversionTable![activeTab]" :key="item.unit" :value="item.unit">
                {{ item.name }}
              </option>
            </template>
          </select>
        </div>
      </div>
      <div class="col">
        <div class="input-wrapper">
          <input type="number" :value="result" readonly />
          <select v-model="targetUnit" name="unit-selector">
            <template v-if="!loading">
              <option v-for="item in conversionTable![activeTab]" :key="item.unit" :value="item.unit">
                {{ item.name }}
              </option>
            </template>
          </select>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { ConverstionTableItem } from '@/types/conversion'
import ConversionsService from '~/services/ConversionsService'
import { UnitType, Area, Distance, Speed, Volume } from '~/constants/units'

export default defineComponent({
  setup() {
    const conversionTable = ref<Record<UnitType, Record<Area | Distance | Speed | Volume, ConverstionTableItem>>>()

    const tabs = ref<UnitType[]>([UnitType.Distance, UnitType.Area, UnitType.Volume, UnitType.Speed])
    const activeTab = ref(UnitType.Distance)

    return {
      tabs,
      conversionTable,
      activeTab,
    }
  },

  data() {
    return {
      source: 0,
      loading: true,
      sourceUnit: Distance.Centimeter as Distance | Area | Volume | Speed,
      targetUnit: Distance.Centimeter as Distance | Area | Volume | Speed,
    }
  },

  computed: {
    result() {
      // Target = (source/sourceRatio)*targetRatio
      if (this.loading) return 0

      return (
        (this.source / this.conversionTable![this.activeTab][this.sourceUnit].ratio) *
        this.conversionTable![this.activeTab][this.targetUnit].ratio
      )
    },
  },

  mounted() {
    this.getConversionTable()
  },

  methods: {
    getConversionTable() {
      this.loading = true
      ConversionsService.getConversionsTable().then((res) => {
        this.conversionTable = {
          [UnitType.Area]: res.areas.reduce((previous, item) => ({ ...previous, [item.unit]: item }), {}) as any,
          [UnitType.Distance]: res.distances.reduce(
            (previous, item) => ({ ...previous, [item.unit]: item }),
            {},
          ) as any,
          [UnitType.Speed]: res.speeds.reduce((previous, item) => ({ ...previous, [item.unit]: item }), {}) as any,
          [UnitType.Volume]: res.volumes.reduce((previous, item) => ({ ...previous, [item.unit]: item }), {}) as any,
        }
        this.loading = false
      })
    },

    setActiveTab(tab: UnitType) {
      const mapper = {
        [UnitType.Distance]: Distance.Centimeter,
        [UnitType.Area]: Area.SquareCentimeter,
        [UnitType.Volume]: Volume.CubicCentimeter,
        [UnitType.Speed]: Speed.CMPS,
      }
      this.activeTab = tab
      this.sourceUnit = mapper[tab]
      this.targetUnit = mapper[tab]
    },
  },
})
</script>

<style lang="scss" scoped>
section {
  @apply flex flex-col justify-center items-center w-full h-screen px-8;

  .block-content {
    @apply flex w-full max-w-4xl;
  }
}

.tabs {
  @apply flex h-10 border border-white overflow-hidden;

  border-radius: 2.5rem;

  .tab {
    @apply flex items-center cursor-pointer select-none px-4;

    &:hover {
      @apply bg-white bg-opacity-25;
    }

    &.is-active {
      @apply text-black bg-white;
    }

    &:not(:first-child) {
      @apply border-l border-white;
    }
  }
}

.input-wrapper {
  @apply flex gap-4 h-10;

  input {
    @apply w-full h-10 text-black outline-none rounded-lg px-4;
  }

  select {
    @apply w-2/5 h-10 text-black outline-none rounded-lg px-4;
  }
}
</style>
