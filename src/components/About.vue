<script setup lang="ts">
import Nav from './Nav.vue';
import Footer from './Footer.vue';
</script>

<template>
    <Nav />
  <section class="about">
    <!-- Intro -->
    <div class="about-header">
      <h2>À propos de <span class="brand">Zypp</span></h2>
      <p>
        Zypp est une startup de mobilité urbaine qui propose la <strong>location de trottinettes électriques</strong> 
        en libre-service <strong>24h/24</strong>.  
        Notre mission est simple : <span class="highlight">offrir à Montpellier une alternative écologique, pratique et économique</span> 
        pour se déplacer au quotidien.
      </p>
    </div>

    <!-- Bloc infos -->
    <div class="about-grid">
      <div class="about-card">
        <i class="mdi mdi-scooter-electric icon"></i>
        <h3>Mobilité durable</h3>
        <p>
          Avec un parc de <strong>1000 trottinettes sans borne</strong>, Zypp contribue à réduire les embouteillages et la pollution en ville.
        </p>
      </div>

      <div class="about-card">
        <i class="mdi mdi-cellphone icon"></i>
        <h3>Simple et accessible</h3>
        <p>
          Déverrouillez, roulez, déposez : tout se fait en quelques clics via l’application, sans contraintes.
        </p>
      </div>

      <div class="about-card">
        <i class="mdi mdi-cash-multiple icon"></i>
        <h3>Un prix juste</h3>
        <p>
          La liberté à petit prix : <strong>1 €</strong> pour démarrer puis seulement <strong>0,15 €/min</strong>. 
        </p>
      </div>

      <div class="about-card">
        <i class="mdi mdi-battery-charging icon"></i>
        <h3>Communauté engagée</h3>
        <p>
          Zypp recrute des particuliers pour la recharge des trottinettes, en échange d’une rémunération ou de réductions.
        </p>
      </div>
    </div>

    <!-- Vision -->
    <div class="about-vision">
      <h3>🌍 Notre vision</h3>
      <p>
        Chez Zypp, nous croyons en une <span class="highlight">ville plus verte et plus fluide</span>.  
        Nous voulons transformer la mobilité urbaine en rendant chaque trajet plus agréable, plus rapide et respectueux de l’environnement.
      </p>
    </div>
  </section>
  <Footer />
</template>

<style scoped>
.about {
  padding: 80px 20px;
  background: #f9f9f9;
  text-align: center;
}

/* Header */
.about-header {
  max-width: 800px;
  margin: 0 auto 50px;
}

.about-header h2 {
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #3C096C;
}

.about-header .brand {
  color: #FF6F00;
}

.about-header p {
  font-size: 16px;
  line-height: 1.6;
  color: #444;
}

.highlight {
  color: #7B2CBF;
  font-weight: 600;
}

/* Grid */
.about-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-bottom: 60px;
}

.about-card {
  background: #fff;
  padding: 25px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.about-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}

.about-card .icon {
  font-size: 40px;
  color: #7B2CBF;
  margin-bottom: 15px;
}

.about-card h3 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #333;
}

.about-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}

/* Vision */
.about-vision {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.about-vision h3 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #3C096C;
}

.about-vision p {
  font-size: 16px;
  color: #444;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 992px) {
  .about-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
