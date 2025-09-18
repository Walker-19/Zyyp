<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';
import SideBarUser from './SideBarUser.vue';
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router';
import { rechargeur_verification } from '@/utils/supabase_function';
import { NDialog, NButton } from 'naive-ui'

const userStore = useUserStore()
const router = useRouter();
const modalVisible = ref(false)
const modalMessage = ref('')

onMounted(() => {
  console.log("user local: ", userStore.user.name)
    if(!userStore.user.name) {
        router.push('/account')
    }
})


const changeRole = async () => {
  const userId = userStore.user.id
  if (!userId) return

  try {
    const { data, error } = await rechargeur_verification
      .insert([{ iduser: userId }])
      .select()

    if (error) {
      console.error(error)
      modalMessage.value = "Impossible de demander le rôle rechargeur. Réessayez plus tard."
    } else {
      modalMessage.value = "Votre demande pour devenir rechargeur a été envoyée !"
    }
  } catch (err) {
    console.error(err)
    modalMessage.value = "Une erreur est survenue. Réessayez plus tard."
  } finally {
    modalVisible.value = true
  }
}
</script>

<template>
  <SideBarUser>
    <div class="dashboard">
      <div class="main">
        <header class="topbar">
          <h1>Bonjour {{ userStore.user.name }}</h1>
          <button @click="changeRole">
            <i class="mdi mdi-battery-charging-20"></i>
            Devenir rechargeur
          </button>
        </header>
        <main class="content">
        </main>
      </div>
    </div>

    <!-- Modal Naive UI -->
    <n-dialog v-model:show="modalVisible" v-if="modalVisible" title="Notification" :mask-closable="true">
      <p>{{ modalMessage }}</p>
        <n-button @click="modalVisible = false" type="primary">OK</n-button>
    </n-dialog>
  </SideBarUser>
</template>

<style scoped>
.dashboard {
  display: flex;
  width: 100%;
}
.content {
    margin-top: 10px;
    width: 100%;
    background-color: red;
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
