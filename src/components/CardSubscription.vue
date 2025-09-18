<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  benefit: {
    type: Array as () => string[],
    default: () => []
  },
  delay: {
    type: Number,
    default: 0
  },
  height: {
    type: Number,
    default: 0 // 0 = auto
  }
});
</script>

<template>
  <div
    :style="height > 0 ? { height: height + 'px' } : {}"
    v-motion
    :initial="{ opacity: 0, x: 100,}"
    :visible-once="{ opacity: 1, x: 0 , }"
    :delay="delay"
    class="card-abonnement"
  >
    <h3>{{ title }}</h3>
    <p class="price">{{ price }}</p>

    <ul>
      <li class="text-urban" v-for="(el, index) in benefit" :key="index">
        <i class="mdi mdi-check-circle"></i> {{ el }}
      </li>
    </ul>

    <button><slot>Souscrire</slot></button>
  </div>
</template>

<style scoped>
.card-abonnement {
  background: linear-gradient(135deg, #FF6B00, #ff6a0099);
  color: #fff;
  padding: 20px;
  border-radius: 15px;
  width: 260px;
  text-align: center;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-abonnement:hover {
  transform: translateY(-5px);
}

.card-abonnement h3 {
  font-size: 20px;
  margin-bottom: 8px;
}

.card-abonnement .price {
  font-size: 22px;
  font-weight: bold;
  margin: 10px 0;
}

.card-abonnement ul {
  list-style: none;
  padding: 0;
  margin: 10px 0;
  text-align: left;
}

.card-abonnement ul li {
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
}

.card-abonnement ul li i {
  font-size: 18px;
  color: #fff;
}

.card-abonnement button {
  background: #fff;
  color: #FF7900;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bold;
  margin-top: auto;
  transition: all 0.3s ease;
}

.card-abonnement button:hover {
  background: #ffe5b4;
}
</style>
