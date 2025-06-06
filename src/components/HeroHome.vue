<template>
  <div
    class="flex-grow p-6 transition-colors duration-300">
    <!-- <el-carousel indicator-position="outside" class="my-carousel">
      <el-carousel-item v-for="item in carouselItems"
        :key="item"
        interval="800"
        motion-blur="true"
        type="card"
        cardScale="0.5">
        <div class="carousel-text-overlay">
          <h1 class="primary">{{ item.title }}</h1>
          <h2>{{ item.subtitle }}</h2>
        </div>
        <img :src="item.image" alt="Carousel Image" class="carousel-image" height="300px" />
      </el-carousel-item>
    </el-carousel> -->

    <div class="hero-container">
      <el-row :gutter="20">
        <el-col>
          <div class="hero-title">{{ msg }}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <div class="hero-subtitle">Developer: { Front-End, Python, Cloud }</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <div class="hero-description">
            <p>
              Welcome to my portfolio! I am a passionate developer with expertise in Front-End technologies, Python
              programming, and Cloud solutions. Explore my work and let's connect!
            </p>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- <ElRow :gutter="20">
      <ElCol :span="6">
        <el-card style="max-width: 480px" class="my-styled-card spaced-top">
          <template #header>
            <div class="card-header">
              <span>Card name</span>
            </div>
          </template>
<p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
<template #footer>
            <div class="card-footer-custom">
              <span>Footer content</span>
            </div>
          </template>
</el-card>
</ElCol>
<ElCol :span="6">
  <el-card style="max-width: 480px" class="my-styled-card spaced-top">
    <template #header>
            <div class="card-header">
              <span>Card name</span>
            </div>
          </template>
    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
    <template #footer>
            <div class="card-footer-custom">
              <span>Footer content</span>
            </div>
          </template>
  </el-card>
</ElCol>
<ElCol :span="6">
  <el-card style="max-width: 480px" class="my-styled-card spaced-top">
    <template #header>
            <div class="card-header">
              <span>Card name</span>
            </div>
          </template>
    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
    <template #footer>
            <div class="card-footer-custom">
              <span>Footer content</span>
            </div>
          </template>
  </el-card>
</ElCol>
<ElCol :span="6">
  <el-card style="max-width: 480px" class="my-styled-card spaced-top">
    <template #header>
            <div class="card-header">
              <span>Card name</span>
            </div>
          </template>
    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
    <template #footer>
            <div class="card-footer-custom">
              <span>Footer content</span>
            </div>
          </template>
  </el-card>
</ElCol>
</ElRow> -->

    <template>

    </template>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import {
  ElRow,
  ElCol,
  //         ElCard, 
  // ElCarousel, 
  // ElCarouselItem 
} from 'element-plus';

export default defineComponent({
  components: {
    ElRow,
    ElCol,
    // ElCard,
    // ElCarousel,
    // ElCarouselItem,
  },
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      message: "Hello Element Plus",
      // carouselItems: [
      //   {title: "title 1", subtitle: "subtitle 1", image: "images/pexels-pixabay-270404.jpg"},
      //   {title: "title 2", subtitle: "subtitle 2", image: "images/pexels-fauxels-3182781.jpg"},
      //   {title: "title 3", subtitle: "subtitle 3", image: "images/pexels-olly-3760069.jpg"},
      //   {title: "title 4", subtitle: "subtitle 4", image: "images/pexels-asphotograpy-230544.jpg"},],
      carouselItems: [
        { id: 1, title: 'Python Developer', subtitle: 'Explore the beauty of nature', image: 'images/pexels-pixabay-270404.jpg' },
        { id: 2, title: 'Urban Wonders', subtitle: 'Cityscapes and modern architecture', image: 'images/pexels-fauxels-3182781.jpg' },
        { id: 3, title: 'Peaceful Retreats', subtitle: 'Find your calm in serene places', image: 'images/pexels-olly-3760069.jpg' },
        { id: 4, title: 'Adventure Awaits', subtitle: 'Journey into the unknown', image: 'images/pexels-asphotograpy-230544.jpg' },
      ],
      cards: [
        { title: "Card 1", items: ["Item 1", "Item 2", "Item 3", "Item 4"] },
        { title: "Card 2", items: ["Item 1", "Item 2", "Item 3", "Item 4"] },
        { title: "Card 3", items: ["Item 1", "Item 2", "Item 3", "Item 4"] },
        { title: "Card 4", items: ["Item 1", "Item 2", "Item 3", "Item 4"] },
      ],
    }
  },
})
</script>

<style scoped>
.hero-container {
  max-width: 800px;
  margin: 0px auto;
   background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: left; /* Align text naturally */
  line-height: 1.6;
  color: #333;
  animation: bounce 2s;
}

html.dark .hero-container {
  background-color: #000000; /* Dark mode background */
  color: #ffffff; /* Lighter text color for dark mode */
} 

.hero-title {
  font-size: 3em;
color: #333;
  /* Light mode color */
  margin: 10px auto;
  text-align: center;

  display: inline-block;
}

.hero-subtitle {
color: #333;
  /* Light mode color */
  margin: 10px auto;
  text-align: center;
  display: inline-block;
}

html.dark .hero-title,
html.dark .hero-subtitle {
color: #ffffff;
  /* Lighter color for dark mode */
  
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