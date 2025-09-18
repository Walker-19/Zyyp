<script setup lang="ts">
import supabase from '../api/index'
import { comparePassword, hasPassword } from '@/utils/utils'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import Nav from './Nav.vue';

const email = ref('')
const password = ref('')
const router = useRouter();
const userStore = useUserStore();

const   handleLogin =async () => {
  console.log('Tentative de connexion avec :', email.value, password.value)
  try {
    console.log("email: ", email.value)
    const user = await supabase.from('user').select('*').eq('email', email.value).limit(1);
    if(user.error) {
        console.log("error to connection", user.error)
    }
    if(user.data && user.data.length > 0) {
        const userData = user.data[0];
        const passwordIsValid = await comparePassword(password.value, userData.password);
        if(passwordIsValid) {
          if(userData.role == "admin") {
            userStore.setUser(userData);
             router.push('/dashboard')
          }
          else if(userData.role == "user") {
            userStore.setUser(userData);
            router.push('/user_dashboard')
          }
            console.log("password is valid")
        }
        else {
            console.log("password is invalid")
        }
    }

  } catch(errorf) {
    console.log('Erreur lors de la connexion :', errorf)
  }
  // 👉 ici tu feras appel à ton API ou ton store (ex: Pinia / Supabase / Firebase)
}
</script>

<template>
    <Nav />
  <div class="login-container">
    <form class="login-form" @submit.prevent="handleLogin">
      <h2 class="title">Connexion</h2>

      <!-- Champ email -->
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" type="email" id="email" placeholder="Entrez votre email" required />
      </div>

      <!-- Champ mot de passe -->
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input v-model="password" type="password" id="password" placeholder="Entrez votre mot de passe" required />
      </div>

      <!-- Bouton connexion -->
      <button type="submit" class="btn-login">Se connecter</button>

      <!-- Lien inscription -->
      <p class="signup-link">
        Pas encore de compte ?
        <router-link to="/register">Inscrivez-vous</router-link>
      </p>
    </form>
  </div>
</template>

<style scoped>
/* Conteneur centré */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Ajuste en fonction de la hauteur de ta navbar */
  background: #fff;
  padding: 20px;
}

/* Carte formulaire */
.login-form {
  background: white;
  padding: 30px 25px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  width: 100%;
  max-width: 400px;
}

/* Titre */
.title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 22px;
  color: #3C096C;
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
.btn-login {
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

.btn-login:hover {
  transform: scale(1.03);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

/* Lien inscription */
.signup-link {
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  color: #444;
}

.signup-link a {
  color: #7B2CBF;
  font-weight: bold;
  text-decoration: none;
}

.signup-link a:hover {
  text-decoration: underline;
}

/* Responsive mobile */
@media (max-width: 480px) {
  .login-form {
    padding: 20px 15px;
  }

  .title {
    font-size: 20px;
  }

  .btn-login {
    font-size: 14px;
    padding: 10px;
  }
}
</style>
