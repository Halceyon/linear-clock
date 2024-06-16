<script setup lang="ts">
import { Clock } from '@/clock';
import { ref } from 'vue-demi';

const clock = new Clock();
clock.onTick = (time) => {
    currentTime.value = time;
    timeOfDay.value = clock.getTimeOfDay();
};

const currentTime = ref(clock.time);
const timeOfDay = ref(clock.getTimeOfDay());

</script>

<template>
    <div class="h-[400px] w-full">
        <h1 class="text-xl2 text-center">{{ timeOfDay }}</h1>
        <div class="h-full flex flex-row justify-evenly align-middle">
            <div v-for="index in 6" :key="index" class="flex flex-col h-[400px] align-center">
                <div class="ml-1 w-1 h-full bg-white"></div>
                <span>{{ index }}</span>
            </div>
        </div>
        <div class="clock-face-part__label">{{ currentTime }}</div>
        <div class="d-flex w-full">
        </div>
    </div>
</template>
