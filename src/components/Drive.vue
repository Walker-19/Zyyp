<script setup lang="ts">
import { ref } from "vue"
import Nav from "./Nav.vue";
// Étapes dynamiques
const steps = ref([
  {
    icon: "mdi-cellphone",
    title: "Téléchargez l'application",
    description: "Disponible 24h/24, l’application Zypp vous permet de localiser une trottinette proche de vous en un clin d’œil.",
  },
  {
    icon: "mdi-scooter-electric",
    title: "Déverrouillez et partez",
    description: "Scannez le QR code avec votre smartphone : la trottinette se déverrouille instantanément et vous êtes prêt à rouler.",
  },
  {
    icon: "mdi-cash-multiple",
    title: "Payez à la minute",
    description: "1 € pour démarrer puis seulement 0,15 €/min. Un trajet de 15 minutes revient à 3,25 €.",
  },
  {
    icon: "mdi-map-marker-check",
    title: "Déposez et verrouillez",
    description: "Arrêtez votre trajet dans une zone dédiée, verrouillez via l’app et le tour est joué.",
  },
])
</script>

<template>
    <Nav />
  <section class="how-it-works">
    <!-- Pitch -->
    <div class="intro">
      <h2 class="section-title">🚀 Comment ça marche ?</h2>
      <p class="section-pitch">
        Avec <strong>Zypp</strong>, la mobilité devient <span class="highlight">simple, rapide et économique</span>.  
        Nos <strong>1000 trottinettes électriques</strong> sont disponibles <strong>sans borne</strong>, accessibles en quelques clics, et toujours prêtes à vous emmener où vous voulez dans Montpellier.
      </p>
    </div>

    <!-- Étapes -->
    <div class="steps-grid">
      <div v-for="step in steps" :key="step.title" class="step-card">
        <i :class="['mdi', step.icon, 'step-icon']"></i>
        <h3 class="step-title">{{ step.title }}</h3>
        <p class="step-description">{{ step.description }}</p>
      </div>
    </div>

    <!-- Appel à action -->
    <div class="cta">
      <router-link to="/account" class="cta-btn">
        Commencez dès aujourd’hui 🚲
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.how-it-works {
  padding: 80px 20px;
  background: #f9f9f9;
  text-align: center;
}

/* Intro */
.intro {
  max-width: 700px;
  margin: 0 auto 50px;
}

.section-title {
  font-size: 32px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #3C096C;
}

.section-pitch {
  font-size: 16px;
  color: #444;
  line-height: 1.6;
}

.section-pitch .highlight {
  color: #FF6F00;
  font-weight: 600;
}

/* Grille des étapes */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.step-card {
  background: white;
  padding: 25px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.step-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}

.step-icon {
  font-size: 40px;
  color: #7B2CBF;
  margin-bottom: 15px;
}

.step-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #333;
}

.step-description {
  font-size: 14px;
  color: #666;
  line-height: 1.4;
}

/* CTA */
.cta {
  margin-top: 50px;
}

.cta-btn {
  display: inline-block;
  padding: 14px 28px;
  background: linear-gradient(90deg, #FF6F00, #7B2CBF);
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  transition: transform 0.3s, box-shadow 0.3s;
}

.cta-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(0,0,0,0.3);
}

/* Responsive */
@media (max-width: 992px) {
  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .steps-grid {
    grid-template-columns: 1fr;
  }
}
</style>
