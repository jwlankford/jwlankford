<template>
  <section id="about" class="py-16 bg-white rounded-xl shadow-lg px-6 md:px-12 transition-all duration-500 ease-in-out transform hover:scale-105">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center border-b-2 border-blue-600 pb-2 inline-block">
      About Me
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div class="text-gray-700 leading-relaxed text-lg">
        <p class="mb-4">
          Hello! I'm a dedicated software developer with a strong focus on creating user-friendly and efficient web solutions. My journey in tech started with a fascination for how things work under the hood, which quickly led me to explore various programming languages and frameworks.
        </p>
        <p class="mb-4">
          I have experience working with front-end technologies like Vue.js and building robust back-end systems using Node.js and various databases. I thrive in collaborative environments and am always eager to learn new technologies and improve my skills.
        </p>
        <p>
          Outside of coding, I enjoy hiking, playing chess, and exploring new coffee shops.
        </p>
      </div>
      <div class="flex justify-center md:justify-end">
        <!-- Placeholder for an image or avatar -->
        <div class="w-64 h-64 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-sm overflow-hidden border-4 border-blue-200 shadow-xl">
          <!-- You can replace this with an actual image -->
          <img src="https://placehold.co/256x256/ADADAD/FFFFFF?text=Your+Photo" alt="Your Photo" class="w-full h-full object-cover"/>
        </div>
      </div>
    </div>

    <div class="mt-12">
      <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Skills</h3>
      <div class="flex flex-wrap justify-center gap-4">
        <span v-for="(skill, index) in skills" :key="index" class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-md font-medium shadow-md hover:scale-105 transition-transform duration-200">
          {{ skill }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const skills = ref(['Vue.js', 'React', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Git', 'Docker']);
</script>

<style scoped>
/* Any AboutPage specific styles can go here */
/* Animations are inherited from the global style in App.vue */
</style>
