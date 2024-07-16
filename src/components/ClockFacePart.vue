<script setup lang="ts">

const props = defineProps<{
    start: number;
    end: number;
    current: number;
    title?: string;
}>();

const timeArray = [] as number[];
for (let i = props.start; i <= props.end; i += 1) {
    timeArray.push(i);
}
</script>

<template>
    <div class="h-full w-full flex flex-col justify-center items-center">
        <span class="text-xl2 text-center w-full">{{ title }}</span>
        <div class="h-full flex flex-row justify-evenly align-middle w-full">
            <div v-for="index in timeArray" :key="index" class="flex flex-col h-full min-h-[10px] w-full">
                <div class="ml-1 w-1 mr-1 h-full bg-green self-center" :class="{ active: index === current }"></div>
                <span class="text-xl2 text-center w-full">{{ index }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-green {
    background-color: #00FF00;
    opacity: 0.5;
}

.bg-green:hover {
    opacity: 0.8;
}

.active {
    background-color: #ff002b;
    opacity: 1;
}
</style>
