<script setup lang="ts">
import { ref } from 'vue'
import { NLayout, NLayoutSider, NLayoutHeader, NLayoutContent, NMenu, NCard, NButton } from 'naive-ui'
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';


const router = useRouter();

const menuItems = [
  { label: 'Accueil', key: 'home', path: '/user_dashboard' },
  { label: 'Historiques', key: 'rechargeurs', path: '/user_dashboard/history' },
  { label: 'Paramètres', key: 'settings', path: '/user_dashboard/settings' }
]


const selectedKey = ref('home')
const mobileSiderVisible = ref(false)
const userStore = useUserStore();

const toggleMobileSider = () => {
  mobileSiderVisible.value = !mobileSiderVisible.value
}

const deconnexion = ()  => {
   userStore.clearUser();
   router.push('/')
   
}

const handleMenuSelect = (key: string) => {
  const item = menuItems.find(i => i.key === key)
  if (item?.path) {
    console.log("path: ", item.path);
        router.push(item.path)
  }
}
</script>

<template>
  <n-layout style="height: 100vh;">
    <!-- Sidebar desktop -->
    <n-layout-sider
      width="220px"
      bordered
      style="height: 100vh; position: fixed; top: 0; left: 0; z-index: 1000;"
      v-show="!mobileSiderVisible"
    >
    <div style="width: 100%; height: 70px;">
        <div class="logo" style="margin-left: 10px;">
            <img width="100%" height="100%" style="object-fit: contain; " src="../../assets/zypp_logo.png" alt="" srcset="">
        </div>
    </div>
      <n-menu style="margin-top: 20px;"
        @update:value="handleMenuSelect"
      :options="menuItems" v-model:value="selectedKey" />
    </n-layout-sider>

    <!-- Sidebar mobile overlay -->
    <div
      v-show="mobileSiderVisible"
      class="mobile-overlay"
      @click="toggleMobileSider"
    >
      <n-layout-sider
        width="220px"
        bordered
        style="position: fixed; top: 0; left: 0; height: 100vh; z-index: 1100; background: white;"
        @click.stop
      >
        <n-menu
            @update:value="handleMenuSelect"
        :options="menuItems" v-model:value="selectedKey" />
      </n-layout-sider>
    </div>

    <!-- Main Layout -->
    <n-layout :style="{ marginLeft: '220px' }">
      <!-- Navbar -->
      <n-layout-header
        style="background: #fff; padding: 0 16px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 6px rgba(0,0,0,0.1); position: sticky; top: 0; z-index: 900;"
      >
        <div style="display: flex; align-items: center; gap: 16px; padding: 20px;">
          <n-button size="small" class="mobile-toggle" @click="toggleMobileSider">☰</n-button>
          <h2 style="margin: 0;">Dashboard</h2>
        </div>
        <n-button
        @click="deconnexion"
        >Se déconnecter</n-button>
      </n-layout-header>

      <!-- Contenu -->
      <n-layout-content style="padding: 16px; background: #f5f5f5; min-height: calc(100vh - 64px);">
        <div style="width: 100%; height: 400px;">
          <slot />
        </div>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped>
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

/* Mobile toggle bouton */
.mobile-toggle {
  display: none;
}

/* Mobile overlay */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  z-index: 1000;
}

/* Responsive */
@media (max-width: 900px) {
  .mobile-toggle {
    display: inline-flex;
  }
  n-layout-sider {
    display: none;
  }
}
</style>
