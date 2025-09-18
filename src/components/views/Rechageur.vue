<script setup>
import { onMounted, ref, h } from 'vue'
import sideBar from './sideBar.vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { rechargeur_verification, user_supabase } from '@/utils/supabase_function'
import { NDataTable, NTag, NButton, useMessage, NMessageProvider } from 'naive-ui'

const userStore = useUserStore()
const router = useRouter()

const rechargeurs = ref([])

// On initialise useMessage *après* le provider
let message
onMounted(() => {
  message = useMessage()
})

// Fonctions pour accepter/refuser
const approveUser = async (user) => {
  try {
    await rechargeur_verification.update({ status: 'approved' }).eq('iduser', user.id)
    message.success(`${user.name} est maintenant rechargeur ✅`)
    const u = rechargeurs.value.find(u => u.id === user.id)
    if (u) u.status = 'approved'
  } catch (err) {
    console.error(err)
    message.error("Erreur lors de l'approbation")
  }
}

const rejectUser = async (user) => {
  try {
    await rechargeur_verification.update({ status: 'rejected' }).eq('iduser', user.id)
    message.warning(`La demande de ${user.name} a été refusée ❌`)
    const u = rechargeurs.value.find(u => u.id === user.id)
    if (u) u.status = 'rejected'
  } catch (err) {
    console.error(err)
    message.error("Erreur lors du refus")
  }
}

// Colonnes du tableau
const columns = [
  { title: 'Nom', key: 'name' },
  { title: 'Email', key: 'email' },
  {
    title: 'Statut',
    key: 'status',
    render(row) {
      switch (row.status) {
        case 'approved':
          return h(NTag, { type: 'success' }, { default: () => 'Validé' })
        case 'rejected':
          return h(NTag, { type: 'error' }, { default: () => 'Refusé' })
        default:
          return h(NTag, { type: 'warning' }, { default: () => 'En attente' })
      }
    }
  },
  {
    title: 'Actions',
    key: 'actions',
    render(row) {
      if (row.status !== 'pending') return null
      return [
        h(NButton, { type: 'success', size: 'small', onClick: () => approveUser(row) }, { default: () => 'Accepter' }),
        h(NButton, { type: 'error', size: 'small', style: 'margin-left:8px', onClick: () => rejectUser(row) }, { default: () => 'Refuser' })
      ]
    }
  }
]

onMounted(async () => {
  if (!userStore.user.name) {
    router.push('/account')
    return
  }

  const { data: demandes, error } = await rechargeur_verification.select('*')
  if (error) return console.error(error)

  const { data: users, error: userError } = await user_supabase.select('*')
  if (userError) return console.error(userError)

  rechargeurs.value = users
    .filter(user => demandes.some(r => r.iduser === user.id))
    .map(user => {
      const demande = demandes.find(r => r.iduser === user.id)
      return { ...user, status: demande.status || 'pending' }
    })
})
</script>

<template>
  <sideBar>
      <div class="dashboard">
        <div class="main">
            <h2>
                Liste des chargeurs
            </h2>
          <header class="topbar">
            <h3>Demandes en attente de validation</h3>
          </header>
          <main class="content">
            <n-data-table
              :columns="columns"
              :data="rechargeurs"
              :bordered="true"
              :single-line="false"
            />
          </main>
        </div>
      </div>
  </sideBar>
</template>
