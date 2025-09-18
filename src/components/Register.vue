<script setup lang="ts">
import supabase from "../api/index"
import { ref } from "vue"
import { hasPassword } from "@/utils/utils"
import Nav from "./Nav.vue";
import Footer from "./Footer.vue";

const name = ref("")
const email = ref("")
const password = ref("")
const avatar = ref<File | null>(null)
const preview = ref<string | null>(null)

const handleAvatarUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    avatar.value = target.files[0]
    preview.value = URL.createObjectURL(target.files[0])
  }
}

const handleRegister = async () => {
  console.log("Inscription :", {
    name: name.value,
    email: email.value,
    password: password.value,
  })

  try {
    const {data, error} = await supabase.from('user').select('*').eq('email', email.value);
    if(error) {
      console.error("Erreur lors de la vérification de l'email :", error);
      throw error
    }
    if (data && data.length > 0) {
      alert("Un utilisateur avec cet email existe déjà.")
      return
    }else {
        const passwordHash = await hasPassword(password.value);
        console.log("passwordHash :", passwordHash);
        const req = await supabase.from('user').insert([{
            name: name.value,
            email: email.value,
            password: passwordHash
        }])
        console.log("Utilisateur inscrit avec succès :", req);
        alert("Inscription réussie ! Vous pouvez maintenant vous connecter.")    
    }
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error)
    throw error
  }
  // 👉 appel API ou store (Pinia/Firebase/etc.)
}
</script>

<template>
    <Nav />
  <div class="register-container">
    <form class="register-form" @submit.prevent="handleRegister">
      <h2 class="title">Créer un compte</h2>

      <!-- Nom -->
      <div class="form-group">
        <label for="name">Nom</label>
        <input v-model="name" type="text" id="name" placeholder="Entrez votre nom" required />
      </div>

      <!-- Email -->
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" type="email" id="email" placeholder="Entrez votre email" required />
      </div>

      <!-- Mot de passe -->
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input v-model="password" type="password" id="password" placeholder="Entrez votre mot de passe" required />
      </div>

      <!-- Bouton -->
      <button type="submit" class="btn-register">S'inscrire</button>

      <!-- Lien connexion -->
      <p class="login-link">
        Déjà un compte ?
        <router-link to="/account">Connectez-vous</router-link>
      </p>
    </form>
  </div>
  <Footer />
</template>

<style scoped>
/* 👉 Même background que le login */
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #fff;
  padding: 20px;
}

/* Carte formulaire */
.register-form {
  background: white;
  padding: 30px 25px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  width: 100%;
  max-width: 420px;
}

/* Titre */
.title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 22px;
  color: #3C096C;
}

/* Avatar upload */
.avatar-upload {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.avatar-label {
  cursor: pointer;
  display: inline-block;
}

.avatar-placeholder {
  width: 100px;
  height: 100px;
  background: #f5f5f5;
  border: 2px dashed #bbb;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #777;
  font-size: 12px;
  transition: background 0.3s;
}

.avatar-placeholder:hover {
  background: #eee;
}

.avatar-preview img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

/* Champs */
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

label {
  font-weight: 600;
  margin-bottom: 5px;
  color: #333;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #7B2CBF;
}

/* Bouton */
.btn-register {
  width: 100%;
  background: linear-gradient(90deg, #7B2CBF, #3C096C);
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.3s;
}

.btn-register:hover {
  transform: scale(1.03);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

/* Lien connexion */
.login-link {
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  color: #444;
}

.login-link a {
  color: #7B2CBF;
  font-weight: bold;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 480px) {
  .register-form {
    padding: 20px 15px;
  }

  .title {
    font-size: 20px;
  }

  .btn-register {
    font-size: 14px;
    padding: 10px;
  }
}
</style>
