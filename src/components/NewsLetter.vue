<script setup lang="ts">
        
</script>
<template>
    
    <div class="newsletter">
        <h2>
            Abonnez-vous à notre newsletter !
        </h2>
        <p>
            Restez informé des dernières nouvelles et offres exclusives en vous inscrivant à notre newsletter.
        </p>
    </div>
    <div class="form">
        <form action="">
            <input type="email" placeholder="Entrez votre email" required>
            <button type="submit">S'abonner</button>
        </form>
    </div>

</template>

<style scoped>
    .newsletter {
        width: 100%;
        padding: 20px;
        text-align: center;
        font-size: 24px;
        color: #000000;
        margin-top: 80px;
        background-color: #f9f9f9;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        }

    .newsletter h2 {
        font-size: 28px;
        color: #000000;
        margin-bottom: 10px;
    }
    .newsletter p {
        font-size: 18px;
        color: #555555;
    }
    .form {
        width: 100%;
        padding: 20px;
        text-align: center;
        background-color: #f9f9f9;
        box-sizing: border-box;
    }
    .form form {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    .form input[type="email"] {
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ddd;
        border-radius: 5px;
        width: 300px;
        outline: none ;
    }
    .form button {
        padding: 10px 20px;
        font-size: 16px;
        color: #fff;
         background: linear-gradient(90deg, #913BC4, #FF6B00);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    
.form button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

</style>