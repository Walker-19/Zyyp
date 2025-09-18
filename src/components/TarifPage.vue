<script setup lang="ts">
import Nav from './Nav.vue';
import Footer from './Footer.vue';
import CardSubscription from './CardSubscription.vue';

// Tableau des offres Zypp
const subscriptions = [
  {
    title: "Pass À la Minute",
    subtitle: "Idéal pour les utilisateurs occasionnels",
    price: "1€ + 0,15€/min",
    benefit: [
      "1€ de déverrouillage",
      "0,15€ par minute",
      "Disponible 24h/24",
      "Sans engagement"
    ],
    delay: 0
  },
  {
    title: "Pass Mensuel",
    subtitle: "Idéal pour les utilisateurs réguliers",
    price: "9,99€/mois + 0,12€/min",
    benefit: [
      "Abonnement : 9,99€/mois",
      "0,12€ par minute",
      "Déverrouillage gratuit",
      "Priorité de réservation",
      "Support prioritaire"
    ],
    delay: 100
  },
  {
    title: "Pass Annuel",
    subtitle: "Parfait pour les habitués de la trottinette",
    price: "99€/an + 0,10€/min",
    benefit: [
      "Abonnement : 99€/an (≈ 8,25€/mois)",
      "0,10€ par minute",
      "Déverrouillage gratuit",
      "Accès prioritaire",
      "Économies garanties sur l’année"
    ],
    delay: 200
  },
  {
    title: "Pass Étudiant 🎓",
    subtitle: "Pensé pour les jeunes et budgets serrés",
    price: "5,99€/mois + 0,10€/min",
    benefit: [
      "Abonnement : 5,99€/mois",
      "0,10€ par minute",
      "Déverrouillage gratuit",
      "Offre réservée aux -26 ans avec justificatif de scolarité",
      "Idéal pour les trajets courts quotidiens"
    ],
    delay: 300
  }
]
</script>

<template>

        <Nav />
        <section class="pricing-header">
            <h1>Nos Tarifs & Abonnements</h1>
            <p class="text-grey">
                Avec <strong>Zypp</strong>, profitez d’une mobilité rapide, économique et 100% électrique dans Montpellier.  
                Que vous soyez un utilisateur occasionnel ou un habitué des trajets urbains, nous avons une formule adaptée à vos besoins.  
                Montez, glissez, arrivez à destination sans stress 🚀.
            </p>
        </section>
        
        <div class="cards-container">
            <CardSubscription
            v-for="(sub, index) in subscriptions"
            :key="index"
            :title="sub.title"
            :price="sub.price"
            :benefit="sub.benefit"
            :delay="sub.delay"
            />
        </div>
        <Footer />
</template>

<style scoped>

.pricing-header {
  text-align: center;
  padding: 70px;
  width: 100%;
  text-align: center;
}

.pricing-header h1 {
  font-size: 32px;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
}

.pricing-header p {
  font-size: 18px;
  line-height: 1.6;
  color: #555;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 40px 20px;
}
</style>
