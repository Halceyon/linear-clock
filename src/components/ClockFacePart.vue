<script setup lang="ts">
import { Clock } from '@/clock';
import { watch, ref } from 'vue';

const clock = new Clock();

const currentTime = ref(clock.time);


watch(clock.time, () => {
    console.log('clock time updated');
    currentTime.value = clock.time;
}

</script>
<template>
    <div class="clock-face-part">
        <div class="clock-face-part__label">{{ currentTime }}</div>
    </div>
</template>
