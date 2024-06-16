<script setup>
import { provide } from 'vue';
import { useI18n } from 'vue-i18n';
import pkg from '../package.json';
import ClockView from './views/ClockView.vue';

const { t } = useI18n();

provide('t', t);

const version = pkg.version;
</script>

<style src="./assets/index.css"></style>
<template>
  <ClockView />
</template>
