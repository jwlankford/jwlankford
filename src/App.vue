<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <el-container class="app-container">
      <TheHeader />

      <el-main>
        <router-view></router-view>
                <section id="main-content">
            <h1>Jeremy Lankford</h1>
            <p>
                As a passionate Front-End Developer, I specialize in crafting intuitive and dynamic user interfaces. 
                With a keen eye for design and a strong command of modern web technologies like HTML, CSS, and JavaScript, 
                I transform concepts into engaging and responsive web experiences. My goal is to build accessible, 
                high-performance, and visually appealing applications that users love to interact with.
            </p>
        </section>
      </el-main>

      <TheFooter />
    </el-container>
    <el-backtop :bottom="100">
      <div><font-awesome-icon :icon="['fas', 'arrow-up']" /></div>
    </el-backtop>
  </el-config-provider>
</template>

<script>
import { defineComponent } from "vue";
import { ElConfigProvider, ElContainer, ElMain } from "element-plus"; // Import layout components

import TheHeader from "./components/layouts/TheHeader.vue"; // Import the new header component
import TheFooter from "./components/layouts/TheFooter.vue"; // <-- Import the new footer component

export default defineComponent({
  name: "App",
  components: {
    ElConfigProvider,
    ElContainer, // Register ElContainer
    ElMain, // Register ElMain
    TheHeader, // Register TheHeader
    TheFooter, // Register TheFooter
  },
  setup() {
    return {
      zIndex: 3000,
      size: "default", // 'small' is fine, but 'default' is also a common choice
    };
  },
  data() {
    return {
      NavMenu: {
        home: { path: "/", label: "Home" },
        about: { path: "/about", label: "About" },
      },
    };
  },
});
</script>

<style>
/* Global styles for the app */
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  /* Ensure html and body take full height */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* Removed margin-top: 60px; as header now handles top spacing */
  min-height: 100vh;
  /* Ensure the #app element takes full viewport height */
  display: flex;
  /* Use flexbox to make app-container fill the space */
  flex-direction: column;
}

.app-container {
  min-height: 100vh;
  /* Make sure ElContainer also takes full viewport height */
  display: flex;
  /* Override default block display to use flex for column layout */
  flex-direction: column;
  width: 100%;
  /* Ensure it spans full width */
}

.el-main {
  flex-grow: 1;
  /* Allows main content to take up remaining vertical space */
  padding: 20px;
  /* Add some padding to the main content area */
  box-sizing: border-box;
  /* Include padding in element's total width and height */
}
</style>
