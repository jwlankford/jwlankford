<template>
  <el-button
    type="primary"
    @click="toggleTheme"
    class="w-12 h-12 rounded-full flex items-center justify-center
           transition-all duration-300 ease-in-out transform hover:scale-105
           shadow-md hover:shadow-lg
           border border-gray-300 dark:border-gray-600 hamburger-button"
    :class="{
      'bg-white hover:bg-gray-100 focus:ring-gray-300 text-gray-700': !isDark, /* White background, gray text for light mode */
      'bg-gray-700 hover:bg-gray-600 focus:ring-gray-500 text-white': isDark /* Darker background, white text for dark mode */
    }"
  >
    <el-icon :size="24"> <!-- Icon size set to 32px -->
      <Moon v-if="isDark" />
      <Sunny v-else />
    </el-icon>
  </el-button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { ElButton, ElIcon } from 'element-plus';
import { Sunny, Moon } from '@element-plus/icons-vue';

// Reactive state to track if dark mode is currently active
const isDark = ref(false);

// Media query object to listen for system theme preference changes
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

/**
 * Applies the given theme (dark/light) to the DOM and saves the preference to local storage.
 * It also manages loading/unloading the Element Plus dark mode CSS.
 * @param {boolean} newIsDark - True if dark mode, false if light mode.
 * @param {boolean} saveToLocalStorage - Whether to save this preference to local storage.
 */
const applyTheme = (newIsDark, saveToLocalStorage = true) => {
  // Apply/remove 'dark' class on the root HTML element
  document.documentElement.classList.toggle('dark', newIsDark);

  // Save the preference to local storage if requested
  if (saveToLocalStorage) {
    localStorage.setItem('theme', newIsDark.toString());
  }

  // Manage Element Plus dark theme CSS link
  let darkThemeLink = document.getElementById('element-plus-dark-theme');
  if (newIsDark) { // If dark mode is active
    if (!darkThemeLink) { // And the dark theme stylesheet isn't already loaded
      const link = document.createElement('link');
      link.id = 'element-plus-dark-theme';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/element-plus/theme-chalk/dark/css-vars.css';
      document.head.appendChild(link);
    }
  } else { // If light mode is active
    if (darkThemeLink) { // And the dark theme stylesheet is present
      darkThemeLink.remove(); // Remove it
    }
  }
};

/**
 * Handles the theme toggle initiated by user click.
 * This always overrides system preference and saves to local storage.
 */
const toggleTheme = () => {
  isDark.value = !isDark.value; // Toggle the dark mode state
  applyTheme(isDark.value, true); // Apply the new theme and save to local storage
};

// Lifecycle hook: runs after the component is mounted to the DOM
onMounted(() => {
  // 1. Check local storage for a user-saved theme preference
  const savedTheme = localStorage.getItem('theme');
  let initialIsDark;

  if (savedTheme !== null) {
    // If a preference is saved, use it (convert string 'true'/'false' to boolean)
    initialIsDark = savedTheme === 'true';
    console.log('Initial theme from local storage:', savedTheme);
  } else {
    // If no preference is saved, use the system's preference
    initialIsDark = mediaQuery.matches;
    console.log('Initial theme from system preference:', initialIsDark ? 'dark' : 'light');
    // Save this system preference to local storage so it becomes the default
    applyTheme(initialIsDark, true); // Apply and save system preference
  }

  // Set the reactive state
  isDark.value = initialIsDark;
  // Apply the determined initial theme (will re-apply if already done by initial save)
  applyTheme(initialIsDark, false); // Don't save again, it was just determined/saved

  // 2. Listen for changes in the system's color scheme preference
  // This listener only updates the theme if there's NO explicit user preference in local storage.
  const systemPreferenceListener = (event) => {
    // If local storage currently reflects system preference (or is empty), update
    // This check is important: only update if user hasn't manually set a theme
    if (localStorage.getItem('theme') === event.matches.toString() || localStorage.getItem('theme') === null) {
      isDark.value = event.matches;
      applyTheme(event.matches, true); // Apply and save the new system preference
      console.log('Theme updated by system preference change:', isDark.value ? 'dark' : 'light');
    }
  };

  // Add the event listener
  mediaQuery.addEventListener('change', systemPreferenceListener);

  // Clean up the listener when the component is unmounted
  onUnmounted(() => {
    mediaQuery.removeEventListener('change', systemPreferenceListener);
  });
});
</script>

<style>
/* These imports should ideally be in your main.js/ts file or a global CSS file,
  not duplicated in every component. Keeping them here for a self-contained example
  that can be previewed directly. In a real application, you would import:
  import 'element-plus/dist/index.css'; // Base Element Plus styles
  // The dark mode styles are dynamically added/removed by the JS logic.
  body {
    font-family: "Inter", sans-serif;
  }
*/
</style>
