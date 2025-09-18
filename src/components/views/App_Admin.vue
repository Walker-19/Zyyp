<script setup>
import { onMounted } from 'vue';
import sideBar from './sideBar.vue';
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router';
import { NLayout, NLayoutSider, NLayoutHeader, NLayoutContent, NMenu, NCard, NButton } from 'naive-ui'





const userStore = useUserStore()
const router = useRouter();

onMounted(() => {
  console.log("user local: ", userStore.user.name)
    if(!userStore.user.name) {
        router.push('/account')
    }
})
</script>

<template>
  <sideBar >
  <div class="dashboard">
     <div class="cards-grid">
          <n-card title="Trottinettes actives">120</n-card>
          <n-card title="Rechargeurs">25</n-card>
          <n-card title="Locations aujourd'hui">340</n-card>
          <n-card title="Revenue">480€</n-card>
        </div>
      <div class="main">
        <header class="topbar">
          <h1>Bonjour {{ userStore.user.name }}</h1>
        </header>
        <main class="content">
          <p>Contenu du tableau de bord</p>
        </main>
      </div>
    </div>
  </sideBar>
</template>

<style>
.cards-grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}
.dashboard {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}
.main {
  width: 100%;
  flex: 1;
  /* background-color: #3C096C; */
  padding: 20px;
}
.topbar {
    width: 100%;
    display: flex;
    /* background-color: red; */
    justify-content: space-between;
}
.topbar button {
 width: max-content;
  background: linear-gradient(90deg, #7B2CBF, #3C096C);
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.3s;
}
.topbar button i {
    font-size: 20px;
    transform: rotateY('180deg')
}
</style>
