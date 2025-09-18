<script setup>
import Nav from './Nav.vue';
import Footer from './Footer.vue';
</script>

<template>
    <Nav />
    <div class="conditions-page">
      <div class="content">
        <h1>Conditions Générales</h1>

        <!-- CGU -->
        <section class="section">
          <h2>1. Conditions Générales d’Utilisation</h2>
          <h3>Préambule</h3>
          <p>
            Les présentes Conditions Générales d’Utilisation (CGU) régissent l’accès et l’utilisation des services proposés par Zypp Mobility (ci-après « Zypp »), société par actions simplifiée (SAS) au capital de 10 000 €, immatriculée au RCS de Montpellier sous le numéro 435676, dont le siège social est situé au 123 rue de Paris , 34000 Montpellier.
          </p>
          <p>
            En utilisant l’application et les trottinettes ZYPP, l’utilisateur accepte sans réserve les présentes CGU.
          </p>

          <h3>Article 1 – Objet</h3>
          <p>
            Les présentes CGU ont pour objet de définir les conditions d’accès et d’utilisation des trottinettes électriques en libre-service proposées par Zypp.
          </p>

          <h3>Article 2 – Accès au service</h3>
          <ul>
            <li>L’utilisation est réservée aux personnes âgées d’au moins 14 ans.</li>
            <li>L’utilisateur doit créer un compte personnel via l’application ZYPP.</li>
            <li>Un moyen de paiement valide doit être enregistré.</li>
            <li>L’acceptation des présentes CGU est obligatoire lors de l’inscription.</li>
          </ul>

          <h3>Article 3 – Modalités d’utilisation</h3>
          <ul>
            <li>Vitesse maximale : 25 km/h conformément à la réglementation.</li>
            <li>Interdiction de circuler sur les trottoirs sauf arrêté municipal spécifique.</li>
            <li>Stationnement uniquement dans les zones autorisées indiquées par l’application.</li>
            <li>Le port du casque est recommandé.</li>
            <li>Tout manquement entraîne une suspension temporaire ou définitive du compte.</li>
          </ul>

          <h3>Article 4 – Tarification et paiements</h3>
          <ul>
            <li>Déblocage d’une trottinette : 1 €</li>
            <li>Utilisation : 0,15 € par minute</li>
            <li>Les tarifs peuvent évoluer et sont indiqués en temps réel dans l’application.</li>
            <li>Les paiements sont effectués par carte bancaire ou portefeuille électronique via l’application.</li>
          </ul>

          <h3>Article 5 – Abonnements</h3>
          <p>En complément de la tarification à l’usage, ZYPP propose plusieurs formules d’abonnement :</p>
          <ul>
            <li>Étudiant : 9,90 €/mois → 30 minutes gratuites par jour + -20% sur les minutes supplémentaires.</li>
            <li>Urbain : 19,90 €/mois → 1 trajet gratuit par jour (≤ 15 min).</li>
            <li>Premium : 29,90 €/mois → trajets illimités (≤ 60 min/jour).</li>
          </ul>
          <p>Conditions :</p>
          <ul>
            <li>Abonnement personnel, non cessible, reconduit automatiquement chaque mois.</li>
            <li>Résiliation possible à tout moment via l’application.</li>
            <li>Toute fraude (partage de compte, usage abusif) entraîne la suspension immédiate du compte.</li>
          </ul>

          <h3>Article 6 – Responsabilités</h3>
          <ul>
            <li>L’utilisateur est responsable de l’usage de la trottinette et des dommages causés en cas de non-respect du code de la route.</li>
            <li>Zypp assure une couverture en responsabilité civile pour les incidents liés au matériel.</li>
            <li>Zypp ne peut être tenu responsable en cas de mauvaise utilisation, vandalisme ou force majeure.</li>
          </ul>

          <h3>Article 7 – Données personnelles (RGPD)</h3>
          <ul>
            <li>Les données collectées (nom, e-mail, téléphone, géolocalisation, paiement) sont traitées conformément au RGPD.</li>
            <li>Elles sont utilisées uniquement pour la fourniture du service.</li>
            <li>Chaque utilisateur peut exercer ses droits (accès, rectification, suppression) en contactant : dpo@zypp.fr.</li>
          </ul>

          <h3>Article 8 – Propriété intellectuelle</h3>
          <p>Tous les contenus du site et de l’application (logos, textes, images, charte graphique) sont protégés et appartiennent à Zypp Mobility.</p>

          <h3>Article 9 – Résiliation</h3>
          <p>Zypp se réserve le droit de résilier ou suspendre un compte en cas de non-respect des présentes CGU.</p>

          <h3>Article 10 – Loi applicable</h3>
          <p>Les présentes CGU sont régies par le droit français. Tout litige relève de la compétence des tribunaux de Montpellier.</p>
        </section>

        <!-- CGP -->
        <section class="section">
          <h2>2. Conditions Générales des Partenaires Rechargeurs</h2>

          <h3>Article 1 – Objet</h3>
          <p>
            Les présentes Conditions Générales des Partenaires (CGP) encadrent les relations entre Zypp Mobility et les particuliers ou professionnels (“Rechargeurs”) qui collectent, rechargent et redéploient les trottinettes électriques.
          </p>

          <h3>Article 2 – Inscription et conditions d’accès</h3>
          <ul>
            <li>Inscription obligatoire via l’application “Zypp Recharge”.</li>
            <li>Vérification d’identité (pièce d’identité, RIB).</li>
            <li>Acceptation des présentes CGP et de la Politique de Confidentialité.</li>
          </ul>

          <h3>Article 3 – Missions du Rechargeur</h3>
          <ul>
            <li>Collecter les trottinettes signalées dans l’application.</li>
            <li>Recharger les batteries selon les consignes fournies par Zypp.</li>
            <li>Redéposer les trottinettes dans les zones prévues.</li>
            <li>Respecter les règles de sécurité (transport, stockage, manipulation des batteries).</li>
          </ul>

          <h3>Article 4 – Rémunération</h3>
          <ul>
            <li>La rémunération est définie par trottinette rechargée (ex. 3 € par recharge complète).</li>
            <li>Les paiements sont effectués chaque semaine sur le compte bancaire renseigné.</li>
            <li>Toute fraude ou tentative de manipulation entraîne la suspension immédiate du compte rechargeur.</li>
          </ul>

          <h3>Article 5 – Obligations du Rechargeur</h3>
          <ul>
            <li>Disposer d’un espace sécurisé et conforme pour la recharge.</li>
            <li>Utiliser uniquement le matériel fourni ou validé par Zypp.</li>
            <li>Ne pas déléguer ou sous-traiter la mission à un tiers.</li>
            <li>Respecter les règles de sécurité électrique (normes CE).</li>
          </ul>

          <h3>Article 6 – Responsabilités</h3>
          <ul>
            <li>Le Rechargeur est responsable en cas de mauvaise utilisation du matériel ou de non-respect des consignes de sécurité.</li>
            <li>Zypp n’est pas responsable des incidents survenant en cas de manipulation non conforme.</li>
            <li>Zypp couvre les trottinettes contre les défauts techniques liés au matériel.</li>
          </ul>

          <h3>Article 7 – Données personnelles et RGPD</h3>
          <ul>
            <li>Les données collectées (identité, coordonnées bancaires, localisation) sont utilisées uniquement pour la gestion du partenariat et traitées conformément au RGPD.</li>
          </ul>

          <h3>Article 8 – Résiliation</h3>
          <ul>
            <li>Zypp peut résilier le contrat du Rechargeur en cas de non-respect des CGP.</li>
            <li>Le Rechargeur peut résilier son inscription à tout moment via l’application.</li>
          </ul>

          <h3>Article 9 – Loi applicable</h3>
          <p>Les présentes CGP sont régies par le droit français. Tout litige sera porté devant les tribunaux compétents de Montpellier.</p>
        </section>
      </div>
    </div>
  <Footer />
</template>

<style scoped>
.conditions-page {
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
  margin-bottom: 40px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #3C096C;
}

h2 {
  color: #7B2CBF;
  margin-top: 30px;
  margin-bottom: 15px;
}

h3 {
  margin-top: 15px;
  margin-bottom: 10px;
  color: #3C096C;
}

ul {
  margin-left: 20px;
  margin-bottom: 15px;
}

p {
  margin-bottom: 10px;
}
</style>
