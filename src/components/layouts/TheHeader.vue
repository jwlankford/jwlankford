<template>
    <header class="navbar">
        <nav>
            <ul v-for="item in navMenuItems" :key="item.path">
                <li>
                    <router-link :to="item.path">{{ item.label }}</router-link>
                </li>
            </ul>
            <ModeToggle />
        </nav>
    </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
// import { useRoute } from "vue-router";
import {
//   ElHeader,
//   ElRow,
//   ElCol,
//   ElMenu,
//   ElMenuItem,
//   ElButton,
//   ElIcon,
//   ElCollapseTransition,
} from "element-plus";
// import { Fold, Expand } from "@element-plus/icons-vue"; // Directly import icons

// Import the ModeToggle component
import ModeToggle from '../ModeToogle.vue'; // Adjust path if ModeToggle.vue is in a different directory

// --- Reactive State & Data ---

// Determines if the mobile menu is open
const mobileMenuOpen = ref(false);
// Stores the current window width
const screenWidth = ref(window.innerWidth);

// Computed property to check if the view is mobile based on screen width
const isMobile = computed(() => screenWidth.value < 768); // Common breakpoint for mobile

// Get current route to highlight active menu item
// const route = useRoute();
// const activePath = computed(() => route.path);

// Define navigation menu items as an array of objects
// This makes the navigation dynamic and easy to manage
const navMenuItems = ref([
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/experience", label: "Experience" }
]);

console.log

// --- Functions ---

// Updates the screenWidth ref on window resize
const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

// --- Lifecycle Hooks & Watchers ---

onMounted(() => {
  // Add event listener for window resize
  window.addEventListener("resize", updateScreenWidth);

  // Watch for changes in isMobile to close menu if switching to desktop
  watch(isMobile, (newVal) => {
    if (!newVal) {
      mobileMenuOpen.value = false;
    }
  });
});

onUnmounted(() => {
  // Clean up the event listener when the component is unmounted
  window.removeEventListener("resize", updateScreenWidth);
});
</script>

<style scoped>
body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.navbar {
    background-color: #fdfcfc; /* Dark background for the navbar */
    padding: 15px 0; /* Add some vertical padding */
    text-align: center; /* Center the navigation links */
}

.navbar nav ul {
    list-style: none; /* Remove bullet points from the list */
    padding: 0;
    margin: 0;
    display: inline-block; /* Allows the ul to be centered with text-align on parent */
}

.navbar nav ul li {
    display: inline-block; /* Display list items side-by-side */
    margin: 0 20px; /* Space between navigation items */
}

.navbar nav ul li a {
    color: rgb(0, 0, 0); /* White text color for links */
    text-decoration: none; /* Remove underline from links */
    font-size: 1.5em; /* Large text for the links (adjust as needed) */
    font-weight: bold; /* Make the text bold */
    transition: color 0.3s ease; /* Smooth color transition on hover */
}

.navbar nav ul li a:hover {
    color: #ffd700; /* Gold color on hover */
}
</style>