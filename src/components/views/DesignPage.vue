<template>
  <div class="about-page-container">
    <h1>About Our Company</h1>
    <p>
      Welcome to our About Page! We are a dedicated team passionate about providing
      high-quality solutions and services to our customers. Our mission is to
      innovate and deliver exceptional value, ensuring client satisfaction
      through cutting-edge technology and a commitment to excellence.
    </p>
    <p>
      Founded in [Year, e.g., 20XX], our company has grown from a small startup
      into a thriving enterprise, thanks to our unwavering focus on customer needs
      and our talented team. We believe in fostering a collaborative environment
      where creativity thrives and challenges are met with innovative solutions.
    </p>
    <p>
      Explore our site to learn more about what we do and how we can help you
      achieve your goals. We're excited to connect with you!
    </p>

    <h2>Our Values</h2>
    <ul>
      <li><strong>Integrity:</strong> Upholding the highest ethical standards.</li>
      <li><strong>Innovation:</strong> Continuously seeking new and better ways.</li>
      <li><strong>Customer Focus:</strong> Centering our efforts on client success.</li>
      <li><strong>Teamwork:</strong> Collaborating for collective achievement.</li>
      <li><strong>Excellence:</strong> Striving for superior quality in all we do.</li>
    </ul>

    <h2>Meet Our Team</h2>
    <div class="team-members">
      <div class="team-member-card">
        <img src="https://via.placeholder.com/100" alt="Team Member 1" class="member-photo">
        <h3>Jane Doe</h3>
        <p>CEO & Founder</p>
        <p class="member-bio">Jane is the visionary behind our company, leading with passion and a strategic mind.</p>
      </div>
      <div class="team-member-card">
        <img src="https://via.placeholder.com/100" alt="Team Member 2" class="member-photo">
        <h3>John Smith</h3>
        <p>Lead Developer</p>
        <p class="member-bio">John is a coding maestro, turning complex ideas into robust applications.</p>
      </div>
      </div>
  </div>
</template>

<script setup>
// No script logic needed for a static about page, but setup block is required.
// You could import reactive variables, props, or lifecycle hooks if needed.
</script>

<style scoped>
.about-page-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: left; /* Align text naturally */
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

.team-members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.team-member-card {
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  width: 220px; /* Fixed width for cards */
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.member-photo {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 15px;
  border: 3px solid #42b983; /* Accent color */
}

.team-member-card h3 {
  font-size: 1.4em;
  color: #2c3e50;
  margin-bottom: 5px;
}

.team-member-card p {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 10px;
}

.member-bio {
  font-style: italic;
  font-size: 0.85em;
  color: #777;
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

  .team-member-card {
    width: 100%; /* Full width on small screens */
    max-width: 300px; /* Prevent cards from becoming too wide on tiny screens */
  }
}
</style>