<template>
  <div class="web-dev-container">
    <h1>Web Development</h1>
    <h2>Bringing Your Ideas to Life</h2>
    <p>
      Hey there! I'm a passionate web developer dedicated to building elegant,efficient, and engaging digital experiences. Whether you're a small business owner, a startup, or an individual with a great idea, I'm here to help transform your vision into a robust and user-friendly website.
    </p>
    <p>
      My approach is all about understanding your unique needs and crafting
      custom solutions that not only look good but also perform exceptionally.
      I thrive on tackling challenges and continuously learning new technologies
      to ensure your project is built with the best tools available.
    </p>
    <p>
      Let's collaborate and create something truly impactful for your online presence.
      I'm excited to hear about your project!
    </p>

    <h2>What I Can Build For You</h2>
    <ul>
      <li><strong>Custom Websites:</strong> Need something unique? I build bespoke websites tailored exactly to your specifications.</li>
      <li><strong>Responsive Design:</strong> Your site will look and work perfectly on any device – desktops, tablets, and phones.</li>
      <li><strong>Interactive Web Applications:</strong> From dynamic forms to complex data visualizations, I create engaging web apps.</li>
      <li><strong>E-commerce Integrations:</strong> Selling online? I can set up secure and efficient e-commerce functionalities.</li>
      <li><strong>Performance Optimization:</strong> I focus on fast loading times and smooth interactions to keep your users happy.</li>
      <li><strong>API Development & Integration:</strong> Connecting your site to other services or building custom backends.</li>
      <li><strong>Website Maintenance & Enhancements:</strong> Ongoing support, updates, and new features to keep your site thriving.</li>
    </ul>

    <h2>My Toolkit & Expertise</h2>
    <div class="tech-stack">
      <div class="tech-card">
        <img src="https://raw.githubusercontent.com/vuejs/art/master/logo.svg" alt="Vue.js Logo" class="tech-logo">
        <h3>Vue.js</h3>
        <p>My go-to for building intuitive and reactive user interfaces.</p>
      </div>
      <div class="tech-card">
        <img src="../assets/nodejsStackedDark.svg" alt="Node.js Logo" class="tech-logo">
        <h3>Node.js</h3>
        <p>Building scalable and efficient server-side applications.</p>
      </div>
      <div class="tech-card">
        <img src="../assets/postgresql.png" alt="Database Icon" class="tech-logo">
        <h3>Databases</h3>
        <p>Working with SQL (PostgreSQL, MySQL) and NoSQL (MongoDB) for robust data storage.</p>
      </div>
      <div class="tech-card">
        <img src="../assets/aws.png" alt="Cloud Icon" class="tech-logo">
        <h3>AWS Cloud Deployment</h3>
        <p>Getting your application live and scalable on Amazon Web Services (AWS), ensuring reliable and robust hosting for your projects.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// No specific script logic is needed for this static page content,
// but the <script setup> block is required for a Vue 3 component.
</script>

<style scoped>
.web-dev-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: left;
  line-height: 1.6;
  color: #333;
}

h1 {
  font-size: 2.5em;
  color: #2c3e50;
}

h2 {
  font-size: 1.8em;
  color: #34495e;
  margin-bottom: 15px;
  border-bottom: 2px solid #eee;
  padding-bottom: 5px;
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

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.tech-card {
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  width: 220px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.tech-logo {
  /* Added colorful placeholders for tech logos for better visual representation */
  width: 150px;
  height: 150px;
  object-fit: contain;
  border-radius: 4px; /* Slight round for tech logos */
}

.tech-card h3 {
  font-size: 1.4em;
  color: #2c3e50;
  margin-bottom: 5px;
}

.tech-card p {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 10px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .web-dev-container {
    margin: 20px;
    padding: 15px;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

  .tech-card {
    width: 100%;
    height: 150px;
  }
}
</style>