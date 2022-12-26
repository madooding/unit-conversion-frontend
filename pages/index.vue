<template>
  <h1 class="line-clamp-2">Test</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ConversionsService from '~/services/ConversionsService'

export default defineComponent({
  mounted() {
    ConversionsService.getConversionsTable().then(console.log)
  },
})
</script>
