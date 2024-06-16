<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    current: {
        type: Number,
        required: true,
        validator: (value: number) => value >= 0 && value <= 100
    },
});
</script>

<template>
    <div class="h-8 w-full rounded-full overflow-hidden bg-gray-400 flex justify-middle" w-full>
        <div class="h-8 bg-green-500 text-right pr-2" :style="{ width: `${props.current}%` }">
            {{ Math.round(props.current) }}%
        </div>
    </div>
</template>
