<script setup lang="ts">
</script>

<template>
  <section
    v-motion
    :initial="{opacity: 0, y: 150}"
    :visible-once="{opacity: 1, y:0}"    
    class="rates"
  >
    <div class="bloc-img">
      <img src="https://asset-prod.france.fr/Place_de_la_Come_die_Ret_OT_Montpellier_da18f11144.jpg" alt="Montpellier">
      <div class="trajectory">
        <div class="stop start">
          <i class="mdi mdi-map-marker"></i>
          <span>Place de la Comédie</span>
        </div>
        <div class="line"></div>
        <div class="stop middle">
          <i class="mdi mdi-scooter-electric"></i>
          <span>
            5 min, pour 1,75€
          </span>
        </div>
        <div class="line"></div>
        <div class="stop end">
          <i class="mdi mdi-map-marker"></i>
          <span>Jardin des Plantes</span>
        </div>
      </div>
    </div>

    <div class="text-rates">
      <h2>Dès janvier 2026, plus de 1000 trottinettes électriques Zypp envahiront Montpellier !</h2>
      <ul>
        <li><span>-</span> Roulez librement, vite et écologique dans toute la ville.</li>
        <li><span>-</span> Tarification simple et transparente : 1€ la prise en main + 0,15¢/min.</li>
        <li><span>-</span> Abonnements mensuels et annuels pour les utilisateurs fréquents.</li>
      </ul>
      <router-link class="decoration-none" to="/tarif">
          <button class="btn-explore">
            Découvrir nos tarifs
            <i class="mdi mdi-arrow-right"></i>
          </button>

      </router-link>
    </div>
  </section>
</template>

<style scoped>
.rates {
  width: 100%;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.bloc-img {
  width: 50%;
  position: relative;
}

.bloc-img img {
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.trajectory {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255,255,255,0.9);
  padding: 15px;
  border-radius: 10px;
  max-width: 260px;
}

.stop {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 10px;
  background-color: #f7f7f7;
  width: 100%;
  justify-content: start;
  font-weight: 600;
}

.line {
  width: 2px;
  height: 20px;
  background-color: #FF7900;
}

.middle {
    display: flex;
    justify-content: center;
    align-items: center;
}
.start i { color: #12be09; font-size: 20px; }
.middle i { color: #FF7900; font-size: 20px; }
.end i { color: #f00606; font-size: 20px; }

.text-rates {
  width: 45%;
}

.rates h2 {
  font-size: 28px;
  color: #333;
  text-align: center;
}

.rates ul {
  list-style-type: disc;
  padding-left: 20px;
  font-size: 18px;
  color: #000;
}

.rates ul li { margin-bottom: 10px; list-style: none; }

.btn-explore {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background: linear-gradient(90deg, #913BC4, #31263E);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-explore i { font-size: 20px; }
.btn-explore:hover {
  background: linear-gradient(90deg, #31263E, #3C096C);
  box-shadow: 0 4px 15px rgba(60,9,108,0.4);
}

/* Responsive */
@media (max-width: 1024px) {
  .rates { flex-direction: column; padding: 20px; align-items: center; }
  .bloc-img, .text-rates { width: 100%; }
  .trajectory { position: relative; left: 0; transform: none; max-width: 90%; }
  .rates h2 { font-size: 24px; }
  .rates ul { font-size: 16px; }
}

@media (max-width: 480px) {
  .rates { padding: 10px; }
  .rates h2 { font-size: 20px; }
  .rates ul { font-size: 14px; }
  .btn-explore { font-size: 14px; padding: 8px 16px; }
}
</style>
