<script setup lang="ts">
import sideBar from './sideBar.vue';

const rides = [
  {
    id: 1,
    from: "Place de la Comédie",
    to: "Jardin des Plantes",
    duration: "12 min",
    date: "15/09/2025 - 14:32",
    price: "2,80 €"
  },
  {
    id: 2,
    from: "Gare Saint-Roch",
    to: "Université Paul-Valéry",
    duration: "18 min",
    date: "14/09/2025 - 09:15",
    price: "3,70 €"
  },
  {
    id: 3,
    from: "Antigone",
    to: "Polygone",
    duration: "8 min",
    date: "13/09/2025 - 19:45",
    price: "2,20 €"
  },
  {
    id: 4,
    from: "Parc Montcalm",
    to: "Odysseum",
    duration: "22 min",
    date: "12/09/2025 - 16:10",
    price: "4,30 €"
  }
]
</script>

<template>
      <sideBar />
  <section class="ride-history">
    <h2>Historique de vos trajets</h2>

    <table>
      <thead>
        <tr>
          <th>Départ</th>
          <th>Arrivée</th>
          <th>Durée</th>
          <th>Date</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ride in rides" :key="ride.id">
          <td>{{ ride.from }}</td>
          <td>{{ ride.to }}</td>
          <td>{{ ride.duration }}</td>
          <td>{{ ride.date }}</td>
          <td class="price">{{ ride.price }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.ride-history {
  padding: 30px;
  background: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  max-width: 900px;
  margin: 30px auto;
}

.ride-history h2 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
}

thead {
  background: linear-gradient(90deg, #FF7900, #F6A609);
  color: #fff;
}

th, td {
  padding: 12px 15px;
  text-align: center;
  font-size: 16px;
}

tbody tr {
  border-bottom: 1px solid #eee;
  transition: background 0.2s ease;
}

tbody tr:hover {
  background: #fdf2e9;
}

.price {
  font-weight: bold;
  color: #FF7900;
}
</style>
