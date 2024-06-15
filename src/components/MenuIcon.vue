<script setup>
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';
import { EllipsisVertical } from 'lucide-vue-next';

defineProps({
  items: {
    type: Array,
    default: () => []
  }
});
defineEmits(['edit', 'delete']);
</script>
<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button variant="icon">
        <EllipsisVertical />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem v-for="item in items" :key="item.id" @click="item.action">
        {{ item.label }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
