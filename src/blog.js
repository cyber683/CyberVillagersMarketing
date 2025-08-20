// Blog page functionality
import { icons } from './main.js'

export function initBlog() {
  document.querySelector('#app').innerHTML = `
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              ${icons.shield.replace('<svg', '<svg class="w-5 h-5 text-white"')}
            </div>
            <a href="/" class="text-xl font-bold text-gray-900">CyberVillagers</a>
          </div>
          
          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="/" class="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="/blog" class="text-blue-600 font-semibold">Blog</a>
            <a href="/#services" class="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Free Assessment
            </button>
          </div>
          
          <!-- Mobile Menu Button -->
          <button class="md:hidden" onclick="toggleMobileMenu()">
            ${icons.menu.replace('<svg', '<svg id="menu-icon" class="w-6 h-6 text-gray-700"')}
            ${icons.x.replace('<svg', '<svg id="close-icon" class="w-6 h-6 text-gray-700 hidden"')}
          </button>
        </div>
        
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden pb-4">
          <div class="flex flex-col space-y-4">
            <a href="/" class="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="/blog" class="text-blue-600 font-semibold">Blog</a>
            <a href="/#services" class="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full">
              Free Assessment
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Blog Header -->
    <section class="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            CyberVillagers Blog
          </h1>
          <p class="text-xl text-gray-700 max-w-3xl mx-auto">
            Insights, tips, and the latest cybersecurity trends to keep your business protected.
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Featured Blog Post -->
          <div class="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-64 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
              <div class="text-white text-center">
                <div class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  ${icons.shield.replace('<svg', '<svg class="w-8 h-8"')}
                </div>
                <h3 class="text-2xl font-bold">Featured Article</h3>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <span>January 15, 2025</span>
                <span>•</span>
                <span>8 min read</span>
                <span class="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">Security Alert</span>
              </div>
              <h2 class="text-2xl font-bold text-gray-900 mb-3">
                <a href="/blog/ransomware-trends-2025" class="hover:text-blue-600 transition-colors">
                  Ransomware Trends 2025: What SMBs Need to Know Right Now
                </a>
              </h2>
              <p class="text-gray-700 mb-4">
                Ransomware attacks have evolved dramatically in 2025. Learn about the latest tactics cybercriminals are using and how to protect your business with practical, actionable strategies.
              </p>
              <a href="/blog/ransomware-trends-2025" class="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                Read Full Article
                ${icons.arrowRight.replace('<svg', '<svg class="w-4 h-4 ml-1"')}
              </a>
            </div>
          </div>

          <!-- Recent Posts Sidebar -->
          <div class="space-y-6">
            <div class="bg-gray-50 p-6 rounded-xl">
              <h3 class="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
              <div class="space-y-4">
                <div class="border-b border-gray-200 pb-4">
                  <h4 class="font-semibold text-gray-900 mb-1">
                    <a href="#" class="hover:text-blue-600 transition-colors">
                      5 Signs Your Team Needs Security Training
                    </a>
                  </h4>
                  <p class="text-sm text-gray-600">January 12, 2025</p>
                </div>
                <div class="border-b border-gray-200 pb-4">
                  <h4 class="font-semibold text-gray-900 mb-1">
                    <a href="#" class="hover:text-blue-600 transition-colors">
                      AI in Cybersecurity: Friend or Foe?
                    </a>
                  </h4>
                  <p class="text-sm text-gray-600">January 10, 2025</p>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">
                    <a href="#" class="hover:text-blue-600 transition-colors">
                      Building a Cyber-Resilient Culture
                    </a>
                  </h4>
                  <p class="text-sm text-gray-600">January 8, 2025</p>
                </div>
              </div>
            </div>

            <!-- Newsletter Signup -->
            <div class="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 class="text-lg font-bold text-gray-900 mb-2">Stay Protected</h3>
              <p class="text-gray-700 mb-4 text-sm">Get weekly cybersecurity tips delivered to your inbox.</p>
              <div class="space-y-3">
                <input type="email" placeholder="Enter your email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- More Blog Posts -->
        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
              <div class="text-white text-center">
                <div class="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                  ${icons.users.replace('<svg', '<svg class="w-6 h-6"')}
                </div>
                <span class="text-sm">Training Guide</span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <span>January 8, 2025</span>
                <span>•</span>
                <span>6 min read</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                <a href="#" class="hover:text-blue-600 transition-colors">
                  How to Run Effective Phishing Simulations
                </a>
              </h3>
              <p class="text-gray-700 mb-4">
                Step-by-step guide to implementing phishing simulations that actually improve your team's security awareness.
              </p>
              <a href="#" class="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                Read More
                ${icons.arrowRight.replace('<svg', '<svg class="w-4 h-4 ml-1"')}
              </a>
            </div>
          </article>

          <article class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
              <div class="text-white text-center">
                <div class="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                  ${icons.brain.replace('<svg', '<svg class="w-6 h-6"')}
                </div>
                <span class="text-sm">AI & Security</span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <span>January 5, 2025</span>
                <span>•</span>
                <span>10 min read</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                <a href="#" class="hover:text-blue-600 transition-colors">
                  The Future of AI-Powered Cybersecurity
                </a>
              </h3>
              <p class="text-gray-700 mb-4">
                Exploring how artificial intelligence is revolutionizing threat detection and response for small businesses.
              </p>
              <a href="#" class="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                Read More
                ${icons.arrowRight.replace('<svg', '<svg class="w-4 h-4 ml-1"')}
              </a>
            </div>
          </article>

          <article class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <div class="text-white text-center">
                <div class="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                  ${icons.checkCircle.replace('<svg', '<svg class="w-6 h-6"')}
                </div>
                <span class="text-sm">Best Practices</span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <span>January 3, 2025</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                <a href="#" class="hover:text-blue-600 transition-colors">
                  Password Security: Beyond "123456"
                </a>
              </h3>
              <p class="text-gray-700 mb-4">
                Practical password policies and tools that your employees will actually use and follow.
              </p>
              <a href="#" class="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                Read More
                ${icons.arrowRight.replace('<svg', '<svg class="w-4 h-4 ml-1"')}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
               ${icons.shield.replace('<svg', '<svg class="w-5 h-5 text-white"')}
              </div>
              <span class="text-xl font-bold">CyberVillagers</span>
            </div>
            <p class="text-gray-400">
              Empowering SMBs with enterprise-level cybersecurity, powered by AI and fortified by people.
            </p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Services</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">Security Training</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Phishing Simulations</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Incident Response</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Penetration Testing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Resources</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="/blog" class="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Webinars</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Security Guides</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Company</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 CyberVillagers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `
}