<script setup lang="ts">
import Nav from './components/Nav.vue';
import { NConfigProvider, NMessageProvider } from 'naive-ui';
</script>

<template>
  <v-app>
  <n-config-provider>
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
  </v-app>
</template>