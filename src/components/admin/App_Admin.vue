<script setup>
import { onMounted } from 'vue';
import sideBar from './sideBar.vue';
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router';




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
  <div class="dashboard">
    <sideBar />
    <div class="main">
      <header class="topbar">
        <h1>Bienvenue {{ userStore.user.name }}</h1>
        <button>
            <i class="mdi mdi-battery-charging-20"></i>
            Devenir rechargeur
        </button>
      </header>
      <main class="content">
        <p>Contenu du tableau de bord</p>
      </main>
    </div>
  </div>
</template>

<style>
.dashboard {
  display: flex;
  width: 100%;
}
.main {
  margin-left: 250px;
  flex: 1;
  padding: 20px;
}
.topbar {
    width: 100%;
    display: flex;
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
