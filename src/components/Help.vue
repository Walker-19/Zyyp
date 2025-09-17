<script setup lang="ts">
import { ref } from "vue"
import Nav from "./Nav.vue"
import Footer from "./Footer.vue"

const faqs = ref([
  {
    question: "Comment louer une trottinette Zypp ?",
    answer: "Téléchargez l’application, scannez le QR code de la trottinette la plus proche, et c’est parti !",
    open: false,
  },
  {
    question: "Quel est le tarif d’une location ?",
    answer: "La location coûte 1 € de démarrage, puis 0,15 € par minute. Exemple : un trajet de 15 minutes coûte 3,25 €.",
    open: false,
  },
  {
    question: "Où puis-je déposer la trottinette après usage ?",
    answer: "Vous devez la laisser dans une zone de dépose dédiée visible dans l’application, puis la verrouiller.",
    open: false,
  },
  {
    question: "Comment devenir rechargeur partenaire Zypp ?",
    answer: "Inscrivez-vous via l’application ou contactez notre équipe pour bénéficier d’une rémunération en rechargeant nos trottinettes chez vous.",
    open: false,
  },
])

// Formulaire de contact
const form = ref({
  name: "",
  email: "",
  message: "",
})

const submitForm = () => {
  console.log("Formulaire soumis :", form.value)
  alert("Merci pour votre message ! Notre équipe vous répondra rapidement 🚀")
  form.value = { name: "", email: "", message: "" }
}
</script>

<template>
    <Nav />
  <section class="help">
    <!-- Titre -->
    <div class="help-header">
      <h2>❓ Besoin d’aide</h2>
      <p>Consultez notre FAQ ou contactez notre équipe directement.</p>
    </div>

    <!-- FAQ -->
    <div class="faq">
      <h3 class="faq-title">Questions fréquentes</h3>
      <div v-for="(item, index) in faqs" :key="index" class="faq-item">
        <button class="faq-question" @click="item.open = !item.open">
          {{ item.question }}
          <span class="faq-icon">{{ item.open ? "−" : "+" }}</span>
        </button>
        <p v-if="item.open" class="faq-answer">{{ item.answer }}</p>
      </div>
    </div>

    <!-- Contact -->
    <div class="contact">
      <h3 class="contact-title">📩 Contactez-nous</h3>
      <form class="contact-form" @submit.prevent="submitForm">
        <input v-model="form.name" type="text" placeholder="Votre nom" required />
        <input v-model="form.email" type="email" placeholder="Votre email" required />
        <textarea v-model="form.message" rows="4" placeholder="Votre message..." required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  </section>
  <Footer />
</template>

<style scoped>
.help {
  padding: 80px 20px;
  max-width: 900px;
  margin: 0 auto;
}

.help-header {
  text-align: center;
  margin-bottom: 50px;
}

.help-header h2 {
  font-size: 32px;
  font-weight: bold;
  color: #3C096C;
  margin-bottom: 10px;
}

.help-header p {
  color: #555;
  font-size: 16px;
}

/* FAQ */
.faq {
  margin-bottom: 60px;
}

.faq-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #7B2CBF;
}

.faq-item {
  border-bottom: 1px solid #ddd;
  padding: 15px 0;
}

.faq-question {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-icon {
  font-size: 20px;
  color: #7B2CBF;
}

.faq-answer {
  margin-top: 10px;
  color: #555;
  font-size: 15px;
  line-height: 1.5;
}

/* Contact */
.contact-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #7B2CBF;
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
}

.contact-form button {
  background: linear-gradient(90deg, #FF6F00, #7B2CBF);
  color: #fff;
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.contact-form button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

/* Responsive */
@media (max-width: 600px) {
  .faq-question {
    font-size: 16px;
  }
  .contact-form button {
    font-size: 14px;
  }
}
</style>
