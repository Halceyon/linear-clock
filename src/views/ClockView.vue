<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import ClockFacePart from '@/components/ClockFacePart.vue';
const { t } = useI18n();
</script>

<template>
  <div class="flex items-center justify-center h-full">
    <ClockFacePart />
  </div>
</template>
