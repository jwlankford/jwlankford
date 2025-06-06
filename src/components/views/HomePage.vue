<template>
  <div class="home-page-container">
    <HeroHome msg="Hi! I am Jeremy Lankford" />

  </div>
</template>

<script setup>
import HeroHome from '@/components/HeroHome.vue';

</script>

<style scoped>
.home-page-container {
  max-width: 800px;
  margin: 10px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: left;
  /* Align text naturally */
  line-height: 1.6;
  color: #333;
}

h1 {
  font-size: 2.5em;
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
}

h2 {
  font-size: 1.8em;
  color: #34495e;
  margin-top: 30px;
  margin-bottom: 15px;
  border-bottom: 2px solid #eee;
  padding-bottom: 5px;
}

h3 {
  margin: 40px 0 0;
}

p {
  margin-bottom: 15px;
}

ul {
  list-style-type: disc;
  margin-left: 25px;
  margin-bottom: 20px;
}

li {
  margin-bottom: 8px;
}

li strong {
  color: #2c3e50;
}

a {
  color: #42b983;
}

.ELRow {
  margin-bottom: 20px;
}

.ELRow:last-child {
  margin-bottom: 0;
}

.ELCol {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}


/* Responsive adjustments */
@media (max-width: 768px) {
  .about-page-container {
    margin: 20px;
    padding: 15px;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-100px);
  }

  60% {
    transform: translateY(-60px);
  }
}
</style>