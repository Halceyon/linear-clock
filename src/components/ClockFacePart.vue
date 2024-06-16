<script setup lang="ts">
import { Clock } from '@/clock';
import { ref, onUnmounted } from 'vue';

const clock = new Clock();

const currentTime = ref(clock.time);

let stopWatchEffect = clock.onTick((time) => {
    console.log('tick', time);
    currentTime.value = time;
});

// Remember to stop the watch effect when the component is unmounted
onUnmounted(() => {
    stopWatchEffect = null;
});
</script>

<template>
    <div class="clock-face-part">
        <div class="clock-face-part__label">{{ currentTime }}</div>
    </div>
</template>
