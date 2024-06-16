<script setup lang="ts">
import { Clock } from '@/clock';
import { ref } from 'vue-demi';

const clock = new Clock();
clock.onTick = (time) => {
    currentTime.value = time;
};

const currentTime = ref(clock.time);

</script>

<template>
    <div class="clock-face-part">
        <div class="clock-face-part__label">{{ currentTime }}</div>
    </div>
</template>
