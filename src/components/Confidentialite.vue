<script setup>
import Nav from './Nav.vue'
import Footer from './Footer.vue';
</script>

<template>
 <Nav />
    <div class="confidentialite-page">
      <div class="content">
        <h1>Mentions légales & Confidentialité</h1>

        <!-- Éditeur du site -->
        <section class="section">
          <h2>Éditeur du site et de l’application</h2>
          <p>Zypp Mobility – SAS</p>
          <p>Siège social : 123 rue de l’Innovation, 34000 Montpellier – France</p>
          <p>Immatriculée au RCS de Montpellier sous le n° 999 999 999</p>
          <p>N° TVA intracommunautaire : FRXX999999999</p>
          <p>Directeur de publication : M. [Nom Prénom], Président de Zypp Mobility</p>
          <p>Contact : <a href="mailto:contact@zypp.fr">contact@zypp.fr</a> – Tél. : +33 4 99 99 99 99</p>
        </section>

        <!-- Hébergement -->
        <section class="section">
          <h2>Hébergement</h2>
          <p>OVH – 2 rue Kellermann, 59100 Roubaix – France</p>
          <p>Téléphone : +33 9 72 10 10 07</p>
        </section>

        <!-- Propriété intellectuelle -->
        <section class="section">
          <h2>Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus présents sur le site et l’application (textes, images, logos, vidéos, design, charte graphique) est la propriété exclusive de Zypp Mobility, sauf mention contraire. Toute reproduction, représentation, modification ou diffusion, totale ou partielle, est strictement interdite sans autorisation préalable.
          </p>
        </section>

        <!-- Protection des données personnelles -->
        <section class="section">
          <h2>Protection des données personnelles (RGPD)</h2>
          <ul>
            <li>Les données collectées (nom, prénom, e-mail, téléphone, données de géolocalisation, moyens de paiement) sont utilisées uniquement pour la gestion des services de mobilité.</li>
            <li>Les utilisateurs disposent d’un droit d’accès, de rectification, de portabilité et de suppression de leurs données.</li>
            <li>Ces demandes peuvent être adressées par e-mail à <a href="mailto:dpo@zypp.fr">dpo@zypp.fr</a>.</li>
          </ul>
        </section>

        <!-- Cookies -->
        <section class="section">
          <h2>Cookies</h2>
          <p>
            Le site peut être amené à utiliser des cookies afin d’améliorer l’expérience utilisateur et de réaliser des statistiques de fréquentation. L’utilisateur peut gérer ses préférences via son navigateur.
          </p>
        </section>
      </div>
    </div>
    <Footer />
</template>

<style scoped>
.confidentialite-page {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.content {
  max-width: 900px;
  width: 100%;
  line-height: 1.6;
  color: #333;
}

.section {
  margin-bottom: 30px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #3C096C;
}

h2 {
  color: #7B2CBF;
  margin-top: 20px;
  margin-bottom: 10px;
}

ul {
  margin-left: 20px;
  margin-bottom: 10px;
}

p {
  margin-bottom: 10px;
}

a {
  color: #7B2CBF;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
