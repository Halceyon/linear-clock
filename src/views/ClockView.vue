<script lang="ts" setup>
import { Clock } from '@/Clock';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import ClockFacePart from '@/components/ClockFacePart.vue';
import ProgressBar from '@/components/ProgressBar.vue';
const { t } = useI18n();


const clock = new Clock();
clock.onTick = (time) => {
  currentTime.value = time;
  currentHour.value = clock.getHour();
  currentPercentage.value = clock.getPercentageOfDay();
};
const currentTime = ref(clock.time);
const currentHour = ref(clock.getHour());
const currentPercentage = ref(clock.getPercentageOfDay());

</script>

<template>
  <div class="flex flex-col h-full w-full py-5">
    <div class="flex justify-center h-full w-full">
      <ClockFacePart :current="currentHour" :start="0" :end="5" title="Early" />
      <ClockFacePart :current="currentHour" :start="6" :end="11" title="Morning" />
      <ClockFacePart :current="currentHour" :start="12" :end="17" title="Afternoon" />
      <ClockFacePart :current="currentHour" :start="18" :end="23" title="Evening" />
    </div>
    <ProgressBar :current="currentPercentage" />
  </div>
</template>
