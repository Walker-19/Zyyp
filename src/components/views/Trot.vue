<script setup>
import { onMounted, ref, h } from 'vue';
import sideBar from './sideBar.vue';
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router';
import { scooter_supabase } from '@/utils/supabase_function';
import { NDataTable, NTag } from 'naive-ui'


const showModal = ref(false)
const form = ref({
  serial_number: '',
  status: 'disponible',
  battery_level: 100,
  latitude: null,
  longitude: null,
});

const columns = [
  { title: 'N° de série', key: 'serial_number' },
  { title: 'Statut', key: 'status',
    render(row) {
      let type = 'default'
      let text = row.status
      if (row.status === 'disponible') { type = 'success'; text = 'Disponible' }
      if (row.status === 'en_location') { type = 'warning'; text = 'En location' }
      if (row.status === 'en_recharge') { type = 'info'; text = 'En recharge' }
      if (row.status === 'maintenance') { type = 'error'; text = 'Maintenance' }
      return h(NTag, { type }, { default: () => text })
    }
  },
  { title: 'Batterie (%)', key: 'battery_level' },
  { title: 'Latitude', key: 'latitude' },
  { title: 'Longitude', key: 'longitude' }
];

const trottinettes = ref([])

async function submitForm() {
  console.log('Formulaire soumis:', form.value)

  try {
    const {data, error} = await scooter_supabase.insert([{
        serial_number: form.value.serial_number,
        status: form.value.status,
        battery_level: form.value.battery_level,
        latitude: form.value.latitude,
        longitude: form.value.longitude,
    }]).select('*');

    if(error) {
        console.log("erorr: ", error)
    }

   if(data.length > 0 ) {
    const scooter = data[0];
    trottinettes.value.push(scooter);
   }
    
  } catch (error) {
    console.log("error pour l'enregistrement: ", error)
    throw error;
    
  }
  // Ici tu peux envoyer les données à ton backend
  showModal.value = false
}

const userStore = useUserStore()
const router = useRouter();

onMounted(async () => {
  if (!userStore.user.name) {
    router.push('/account')
    return
  }

  const { data, error } = await scooter_supabase.select('*')
  if (error) return console.error(error)

  trottinettes.value = data
})
</script>

<template>
  <sideBar>
    <div class="dashboard">
      <div class="main">
        <div class="header-actions">
          <button class="btn-add" @click="showModal = true">
            <i class="mdi mdi-plus"></i>
            Ajouter une trottinette
          </button>
        </div>

        <div v-if="showModal" class="modal-overlay">
          <div class="modal">
            <h2>Ajouter une trottinette</h2>
            <form @submit.prevent="submitForm">
              <label>
                Numéro de série:
                <input v-model="form.serial_number" placeholder="Ex: ZYPP1234" required />
              </label>

              <label>
                Statut:
                <select v-model="form.status">
                  <option value="disponible">Disponible</option>
                  <option value="en_location">En location</option>
                  <option value="en_recharge">En recharge</option>
                  <option value="maintenance">Maintenance</option>
                </select>
              </label>

              <label>
                Niveau de batterie (%):
                <input type="number" v-model.number="form.battery_level" min="0" max="100" />
              </label>

              <label>
                Latitude:
                <input type="number" v-model.number="form.latitude" step="0.000001" />
              </label>

              <label>
                Longitude:
                <input type="number" v-model.number="form.longitude" step="0.000001" />
              </label>

              <div class="actions">
                <button type="submit" class="btn-submit">Enregistrer</button>
                <button type="button" class="btn-cancel" @click="showModal = false">Annuler</button>
              </div>
            </form>
          </div>
        </div>

        <div class="main">
        <header class="topbar">
          <h2>Liste des trottinettes</h2>
        </header>
        <main class="content">
          <n-data-table
            :columns="columns"
            :data="trottinettes"
            :bordered="true"
            :single-line="false"
            striped
          />
        </main>
      </div>
      </div>
    </div>
  </sideBar>
</template>

<style scoped>
.dashboard {
  display: flex;
  width: 100%;
}
.main {
  width: 100%;
  flex: 1;
  padding: 20px;
}

.header-actions {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.btn-add {
  background: linear-gradient(90deg, #7B2CBF, #3C096C);
  color: #fff;
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.3s;
}

.btn-add:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal {
  background: #fff;
  padding: 2rem 2.5rem;
  width: 420px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
  animation: fadeIn 0.3s ease;
}

.modal h2 {
  margin-bottom: 1.5rem;
  color: #3C096C;
  text-align: center;
}

label {
  display: block;
  margin-bottom: 1rem;
  font-weight: 500;
  color: #333;
}

input, select {
  width: 100%;
  padding: 0.6rem 0.8rem;
  margin-top: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  transition: border-color 0.2s;
}

input:focus, select:focus {
  outline: none;
  border-color: #7B2CBF;
  box-shadow: 0 0 4px rgba(123,44,191,0.4);
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 1.5rem;
}

.btn-submit {
  background: linear-gradient(90deg, #FF6F00, #F48C06);
  color: #fff;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.3s;
}

.btn-submit:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0,0,0,0.25);
}

.btn-cancel {
  background: #ddd;
  color: #333;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px);}
  to { opacity: 1; transform: translateY(0);}
}

@media (max-width: 500px) {
  .modal {
    width: 90%;
    padding: 1.5rem;
  }
}
</style>
