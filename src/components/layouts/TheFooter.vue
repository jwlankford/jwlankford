<template>
  <el-footer class="app-footer">
    <el-row :gutter="20" justify="center">
      <el-col :xs="24" :sm="8" :md="6" class="footer-section brand-info">
        <h3>Jeremy Lankford</h3>
        <p>&copy; {{ currentYear }} All Rights reserved.</p>
        <p>Built with Vue 3 and Element Plus</p>
      </el-col>

      <el-col :xs="24" :sm="8" :md="6" class="footer-section quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Me</router-link></li>
          <li><router-link to="/services/web-dev">Services</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><a href="/privacy-policy" target="_blank">Privacy Policy</a></li>
        </ul>
      </el-col>

      <el-col :xs="24" :sm="8" :md="6" class="footer-section contact-social">
        <h3>Get in Touch</h3>
        <p>Email: <a href="mailto:jwlnkford@gmail.com">jwlankford@gmail.com</a></p>
        <p>Phone: <a href="tel:+15134093803">+1 (513) 409-3803</a></p>
        <div class="social-icons">
          <a href="https://facebook.com/jwlankford" target="_blank" aria-label="Facebook">
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
          </a>
          <a href="https://twitter.com/jwlankford" target="_blank" aria-label="Twitter">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
          <a href="https://linkedin.com/in/jwlankford" target="_blank" aria-label="LinkedIn">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
          </a>
          <a href="https://www.github.com/jwlankford" target="_blank" aria-label="LinkedIn">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </div>
      </el-col>
    </el-row>
  </el-footer>
</template>

<script setup>
import { computed } from 'vue';
import { ElFooter, ElRow, ElCol } from 'element-plus'; // Removed ElIcon as it's no longer used for social icons

// Removed Element Plus social icon imports as they don't exist
// import { Facebook as IEpFacebook, Twitter as IEpTwitter, Link as IEpLinkedin } from '@element-plus/icons-vue';

// No direct imports for Font Awesome icons needed here IF registered globally in main.js
// If you preferred to import them per component, you would add:
// import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.app-footer {
  background-color: #063f77; /* Dark background */
  color: #f4f4f4; /* Light text color */
  padding: 40px 20px;
  text-align: left; /* Default text alignment */
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.5);
}

.el-footer {
  --el-footer-height: auto; /* Allow footer to grow based on content */
}

.footer-section {
  margin-bottom: 20px;
}

.footer-section h3 {
  color: #fff;
  font-size: 1.2em;
  margin-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 8px;
}

.footer-section p {
  font-size: 0.95em;
  line-height: 1.5;
  margin-bottom: 10px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 8px;
}

.footer-section ul li a,
.footer-section p a {
  color: #f4f4f4;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover,
.footer-section p a:hover {
  color: #409eff; /* Element Plus primary blue */
  text-decoration: underline;
}

/* Social Icons */
.social-icons {
  display: flex;
  gap: 15px;
  margin-top: 20px;
  justify-content: flex-start; /* Align social icons to the left */
}

.social-icons a {
  color: #f4f4f4;
  transition: color 0.3s ease, transform 0.3s ease;
  font-size: 24px; /* Set the size for Font Awesome icons here */
}

.social-icons a:hover {
  color: #409eff; /* Element Plus primary blue */
  transform: translateY(-3px);
}

/* Responsive adjustments for smaller screens */
@media (max-width: 767px) {
  .app-footer {
    padding: 30px 15px;
    text-align: center; /* Center text on small screens */
  }

  .footer-section {
    text-align: center; /* Center text on small screens */
  }

  .footer-section h3 {
    border-bottom: none; /* Remove border on small screens for cleaner look */
    padding-bottom: 0;
  }

  .social-icons {
    justify-content: center; /* Center social icons on small screens */
  }
}
</style>