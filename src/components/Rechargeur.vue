<script setup lang="ts">
</script>

<template>
  <section class="rechargeur">
    <!-- Hero -->
    <div class="hero">
      <h2 class="text-pulse"><i class="mdi mdi-battery-charging"></i> Devenez rechargeur Zypp</h2>
      <p>
        Aidez Zypp à rendre la mobilité urbaine plus durable tout en gagnant un revenu
        complémentaire depuis chez vous.
      </p>
    </div>

    <!-- Pourquoi -->
    <div class="why">
      <h3><i class="mdi mdi-lightbulb-on-outline"></i> Pourquoi devenir rechargeur ?</h3>
      <ul class="text-grey">
        <li><i class="mdi mdi-cash-multiple"></i> Gagnez de l’argent en rechargeant nos trottinettes la nuit</li>
        <li><i class="mdi mdi-leaf"></i> Participez à une mobilité plus écologique pour Montpellier</li>
        <li><i class="mdi mdi-clock-outline"></i> Flexibilité : vous choisissez vos disponibilités</li>
        <li><i class="mdi mdi-tools"></i> Matériel fourni par Zypp (chargeurs, support, assistance)</li>
      </ul>
    </div>

    <!-- Étapes -->
    <div class="steps">
      <h3><i class="mdi mdi-rocket-launch"></i> Comment ça marche ?</h3>
      <div class="grid">
        <div class="step">
          <div class="number-step">1</div>
          <h4><i class="mdi mdi-account-plus"></i> Inscription</h4>
          <p>Postulez via notre plateforme partenaire pour rejoindre la communauté de rechargeurs.</p>
        </div>

        <div class="step">
          <div class="number-step">2</div>
          <h4><i class="mdi mdi-check-decagram"></i> Validation</h4>
          <p>Notre équipe vérifie vos informations et confirme votre éligibilité.</p>
        </div>

        <div class="step">
          <div class="number-step">3</div>
          <h4><i class="mdi mdi-school-outline"></i> Formation</h4>
          <p>Vous recevez une formation rapide pour apprendre à manipuler et recharger nos trottinettes
            en toute sécurité.</p>
        </div>

        <div class="step">
          <div class="number-step">4</div>
          <h4><i class="mdi mdi-bike-fast"></i> Mission</h4>
          <p>Zypp vous livre les trottinettes le soir. Vous les rechargez pendant la nuit, puis nous les
            récupérons le matin.</p>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="cta">
      <router-link to="/account" class="decoration-none">
        <button class="btn">
          <i class="mdi mdi-handshake"></i> Je postule pour devenir rechargeur
        </button>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.rechargeur {
  padding: 80px 20px;
  max-width: 1000px;
  margin: 0 auto;
}

/* Hero */
.hero {
  text-align: center;
  margin-bottom: 60px;
}

.hero h2 {
  font-size: 32px;
  font-weight: bold;
  color: #3C096C;
  margin-bottom: 15px;
}

.hero p {
  font-size: 18px;
  color: #555;
  max-width: 700px;
  margin: 0 auto;
}

/* Pourquoi */
.why {
  margin-bottom: 60px;
}

.why h3 {
  font-size: 24px;
  color: #7B2CBF;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.why ul {
  list-style: none;
  padding: 0;
  line-height: 1.8;
  font-size: 16px;
  color: #333;
}

.why li {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Étapes */
.steps h3 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
  color: #7B2CBF;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-bottom: 60px;
}

.step {
  position: relative;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 40px 20px 20px 20px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

/* Numéro en haut à gauche style "mangé" */
.number-step {
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, #FF6F00, #7B2CBF);
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 12px;
}

.step h4 {
  font-size: 18px;
  color: #3C096C;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.step p {
  font-size: 14px;
  color: #555;
}

/* CTA */
.cta {
  text-align: center;
  margin-top: 40px;
}

.btn {
  background: linear-gradient(90deg, #FF6F00, #7B2CBF);
  color: #fff;
  padding: 14px 28px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

/* Responsive */
@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
