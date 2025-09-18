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
  <sideBar >
  <div class="dashboard">
      <div class="main">
        <header class="topbar">
          <h1>Bonjour {{ userStore.user.name }}</h1>
        </header>
        <main class="content">
          <p>Seting</p>
        </main>
      </div>
    </div>
  </sideBar>
</template>

<style>
.dashboard {
  display: flex;
  width: 100%;
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
