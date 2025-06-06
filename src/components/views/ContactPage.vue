<template>
  <div class="contact-page-container">
    <div class="bg-white p-8 rounded-2xl shadow-xl max-w-2xl w-full">
        <!-- Heading for the contact section -->
        <h1 class="text-4xl font-extrabold text-center text-gray-900 mb-8">Contact Me</h1>

        <!-- Contact Form Section -->
        <form action="#" method="POST" class="space-y-6">
            <!-- Name Input Field -->
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                    required
                >
            </div>

            <!-- Email Input Field -->
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                    required
                >
            </div>

            <!-- Subject Input Field -->
            <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Regarding your services..."
                    class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                    required
                >
            </div>

            <!-- Message Textarea -->
            <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Write your message here..."
                    class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm resize-y transition duration-150 ease-in-out"
                    required
                ></textarea>
            </div>

            <!-- Submit Button -->
            <div>
                <button
                    type="submit"
                    class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                >
                    Send Message
                </button>
            </div>
        </form>

        <!-- Separator -->
        <div class="my-8 border-t border-gray-200"></div>

        <!-- Social Media Icons Section -->
        <div class="text-center">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Connect With Me</h2>
            <div class="flex justify-center space-x-6">
                <!-- LinkedIn Icon -->
                <a href="https://facebook.com/jwlankford" target="_blank" aria-label="LinkedIn"
                   class="text-blue-700 hover:text-blue-900 transition-colors duration-200">
                    <i class="fab fa-facebook text-4xl"></i>
                </a>
                <!-- LinkedIn Icon -->
                <a href="https://linkedin.com/in/jwlankford" target="_blank" aria-label="LinkedIn"
                   class="text-blue-700 hover:text-blue-900 transition-colors duration-200">
                    <i class="fab fa-linkedin text-4xl"></i>
                </a>
                <!-- GitHub Icon -->
                <a href="https://github.com/jwlankford" target="_blank" aria-label="GitHub"
                   class="text-gray-800 hover:text-gray-900 transition-colors duration-200">
                    <i class="fab fa-github text-4xl"></i>
                </a>
                <!-- Twitter/X Icon -->
                <a href="https://twitter.com/jwlankford" target="_blank" aria-label="Twitter"
                   class="text-blue-400 hover:text-blue-600 transition-colors duration-200">
                    <i class="fab fa-twitter text-4xl"></i>
                </a>
                <!-- Email Icon -->
                <a href="mailto:you@example.com" aria-label="Email"
                   class="text-red-500 hover:text-red-700 transition-colors duration-200">
                    <i class="fas fa-envelope text-4xl"></i>
                </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
// No script logic needed for a static about page, but setup block is required.
// You could import reactive variables, props, or lifecycle hooks if needed.
</script>

<style scoped>
.contact-page-container {
  max-width: 800px;
  margin: 0px auto;
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