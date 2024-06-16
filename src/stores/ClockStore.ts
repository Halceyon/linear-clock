import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { Clock } from '../clock';

export const useClockStore = defineStore('clock', () => {
  const clock = ref(new Clock());
  const time = computed(() => clock.value.time);

  const isMorning = computed(() => clock.value.isMorning());
  const isAfternoon = computed(() => clock.value.isAfternoon());
  const isEvening = computed(() => clock.value.isEvening());

  return { time, clock, isMorning, isAfternoon, isEvening };
});
