import './style.css'
import { router, navigate, icons } from './router.js'

// Export icons for use in other modules
export { icons }

// Mobile menu functionality
let mobileMenuOpen = false

function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen
  const mobileMenu = document.getElementById('mobile-menu')
  const menuIcon = document.getElementById('menu-icon')
  const closeIcon = document.getElementById('close-icon')
  
  if (mobileMenuOpen) {
    mobileMenu.classList.remove('hidden')
    menuIcon.classList.add('hidden')
    closeIcon.classList.remove('hidden')
  } else {
    mobileMenu.classList.add('hidden')
    menuIcon.classList.remove('hidden')
    closeIcon.classList.add('hidden')
  }
}

// Animated counter function
function animateCounter(element, target, duration = 2000) {
  const start = 0
  const increment = target / (duration / 16)
  let current = start
  
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    
    if (target < 1) {
      element.textContent = (current * 100).toFixed(1) + '%'
    } else if (target >= 1000000) {
      element.textContent = '$' + (current / 1000000).toFixed(1) + 'M'
    } else if (target >= 1000) {
      element.textContent = (current / 1000).toFixed(1) + 'K'
    } else {
      element.textContent = Math.floor(current) + '%'
    }
  }, 16)
}

// Intersection Observer for animations
function setupAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        
        // Animate counters when stats section comes into view
        if (entry.target.classList.contains('stats-section')) {
          const counters = entry.target.querySelectorAll('[data-counter]')
          counters.forEach(counter => {
            const target = parseFloat(counter.dataset.counter)
            animateCounter(counter, target)
          })
        }
      }
    })
  }, { threshold: 0.1 })
  
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
}

function initHomePage() {
  document.querySelector('#app').innerHTML = `
  <!-- Navigation -->
  <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
            ${icons.shield.replace('<svg', '<svg class="w-5 h-5 text-white"')}
          </div>
          <span class="text-xl font-bold text-gray-900">CyberVillagers</span>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#mission" class="text-gray-700 hover:text-blue-600 transition-colors">Mission</a>
          <a href="#team" class="text-gray-700 hover:text-blue-600 transition-colors">Team</a>
          <a href="#approach" class="text-gray-700 hover:text-blue-600 transition-colors">Approach</a>
          <a href="#services" class="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
          <a href="/blog" class="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
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
          <a href="#mission" class="text-gray-700 hover:text-blue-600 transition-colors">Mission</a>
          <a href="#team" class="text-gray-700 hover:text-blue-600 transition-colors">Team</a>
          <a href="#approach" class="text-gray-700 hover:text-blue-600 transition-colors">Approach</a>
          <a href="#services" class="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
          <a href="/blog" class="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
          <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full">
            Free Assessment
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-6 fade-in">
          IT Takes a <span class="text-blue-600">Village</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto fade-in">
          CyberVillagers brings enterprise-level defense, awareness, and response to small and medium businesses—powered by AI, fortified by people.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center fade-in">
          <button class="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
            <span>Start Free Assessment</span>
            ${icons.arrowRight.replace('<svg', '<svg class="w-5 h-5"')}
          </button>
          <button class="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all">
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Problem & Market Context -->
  <section class="py-16 bg-white stats-section fade-in">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Cyber Reality for SMBs</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Small and medium businesses face unprecedented cyber threats, yet most remain unprepared.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-red-50 p-8 rounded-xl border border-red-200">
          <div class="text-4xl font-bold text-red-600 mb-2" data-counter="43">43%</div>
          <p class="text-gray-700">of cyberattacks target small businesses—yet just 14% of SMBs are prepared</p>
        </div>
        
        <div class="bg-orange-50 p-8 rounded-xl border border-orange-200">
          <div class="text-4xl font-bold text-orange-600 mb-2" data-counter="60">60%</div>
          <p class="text-gray-700">of breaches are caused by human error, with phishing emails increasing 1,200%</p>
        </div>
        
        <div class="bg-purple-50 p-8 rounded-xl border border-purple-200">
          <div class="text-4xl font-bold text-purple-600 mb-2" data-counter="1.85">$1.85M</div>
          <p class="text-gray-700">average ransomware cost per incident, with recovery fees reaching $2.7M</p>
        </div>
        
        <div class="bg-blue-50 p-8 rounded-xl border border-blue-200">
          <div class="text-4xl font-bold text-blue-600 mb-2" data-counter="94">94%</div>
          <p class="text-gray-700">of SMBs know cyber threats are real, but most lack training and tools</p>
        </div>
        
        <div class="bg-green-50 p-8 rounded-xl border border-green-200">
          <div class="text-4xl font-bold text-green-600 mb-2" data-counter="57">$57B</div>
          <p class="text-gray-700">in global ransomware damages hit in 2025, affecting businesses worldwide</p>
        </div>
        
        <div class="bg-emerald-50 p-8 rounded-xl border border-emerald-200">
          <div class="text-4xl font-bold text-emerald-600 mb-2" data-counter="0.33">33%</div>
          <p class="text-gray-700">reduction in ransomware payouts in 2024—showing proactive security works</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Mission Section -->
  <section id="mission" class="py-16 bg-gray-50 fade-in">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="max-w-4xl mx-auto">
        <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
          ${icons.users.replace('<svg', '<svg class="w-8 h-8 text-white"')}
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
        <p class="text-2xl text-gray-700 leading-relaxed">
          We empower every employee to be a defender—because collective vigilance stops attacks before they strike.
        </p>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section id="team" class="py-16 bg-white fade-in">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">A Team That's Been There</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Our unique combination of education expertise and real-world cyber response experience sets us apart.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center p-8 bg-blue-50 rounded-xl">
          <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            ${icons.bookOpen.replace('<svg', '<svg class="w-8 h-8 text-white"')}
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">15+ Years in SaaS Education</h3>
          <p class="text-gray-700">Delivering best-in-class online employee learning at scale, with proven methodologies that drive real behavior change.</p>
        </div>
        
        <div class="text-center p-8 bg-red-50 rounded-xl">
          <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            ${icons.shield.replace('<svg', '<svg class="w-8 h-8 text-white"')}
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">15+ Years in FBI Cyber Response</h3>
          <p class="text-gray-700">Direct experience responding to the world's largest cyber breaches, understanding threats from the inside out.</p>
        </div>
        
        <div class="text-center p-8 bg-green-50 rounded-xl">
          <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            ${icons.award.replace('<svg', '<svg class="w-8 h-8 text-white"')}
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Certified Cyber Experts</h3>
          <p class="text-gray-700">OSCP, CompTIA PenTest+, Security+, Network+, ITF+ certified professionals who stay ahead of emerging threats.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Approach & Features -->
  <section id="approach" class="py-16 bg-gradient-to-br from-gray-50 to-blue-50 fade-in">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our AI-Enhanced Approach</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          We blend cutting-edge AI technology with proven cybersecurity frameworks and human expertise.
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              ${icons.brain.replace('<svg', '<svg class="w-6 h-6 text-white"')}
              <li><a href="#" class="hover:text-brand-light transition-colors">Security Training</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Phishing Simulations</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Incident Response</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Penetration Testing</a></li>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              ${icons.trendingUp.replace('<svg', '<svg class="w-6 h-6 text-white"')}
              <li><a href="/blog" class="hover:text-brand-light transition-colors">Blog</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Webinars</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Case Studies</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Security Guides</a></li>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
              ${icons.checkCircle.replace('<svg', '<svg class="w-6 h-6 text-white"')}
              <li><a href="#" class="hover:text-brand-light transition-colors">About Us</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Contact</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Terms of Service</a></li>
            </div>
          </div>
        </div>
        
        <div class="bg-white p-8 rounded-xl shadow-lg">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Proven Framework Integration</h3>
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              ${icons.checkCircle.replace('<svg', '<svg class="w-5 h-5 text-green-600"')}
              <span class="text-gray-700"><strong>Security Awareness Training</strong> (CIS Control 14)</span>
            </div>
            <div class="flex items-center space-x-3">
              ${icons.checkCircle.replace('<svg', '<svg class="w-5 h-5 text-green-600"')}
              <span class="text-gray-700"><strong>Data Recovery</strong> (CIS Control 11)</span>
            </div>
            <div class="flex items-center space-x-3">
              ${icons.checkCircle.replace('<svg', '<svg class="w-5 h-5 text-green-600"')}
              <span class="text-gray-700"><strong>Access Control</strong> (CIS Control 5)</span>
            </div>
            <div class="flex items-center space-x-3">
              ${icons.checkCircle.replace('<svg', '<svg class="w-5 h-5 text-green-600"')}
              <span class="text-gray-700"><strong>Continuous Monitoring</strong> & Awareness Nudges</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Proof in Numbers -->
  <section class="py-16 bg-white fade-in">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why It Works—Proof in the Numbers</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center">
          <div class="text-5xl font-bold text-blue-600 mb-4">£600K+</div>
          <p class="text-lg text-gray-700">Using AI-driven security lowers breach costs by over £600K (~$750K)</p>
        </div>
        
        <div class="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl text-center">
          <div class="text-5xl font-bold text-green-600 mb-4">70%</div>
          <p class="text-lg text-gray-700">SMBs see employee error incidents drop with consistent training and simulated phishing</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="py-16 bg-gray-50 fade-in">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive cybersecurity solutions tailored for small and medium businesses.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h3 class="text-xl font-bold text-gray-900 mb-3">Online Education</h3>
          <p class="text-gray-700 mb-4">Interactive videos, micro-learning modules, and live webinars designed for busy professionals.</p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Role-based training paths</li>
            <li>• Progress tracking</li>
            <li>• Certification programs</li>
          </ul>
        </div>
        
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h3 class="text-xl font-bold text-gray-900 mb-3">Phishing Simulations</h3>
          <p class="text-gray-700 mb-4">Automated phishing campaigns with detailed reporting and immediate remediation.</p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Real-world scenarios</li>
            <li>• Instant feedback</li>
            <li>• Performance analytics</li>
          </ul>
        </div>
        
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h3 class="text-xl font-bold text-gray-900 mb-3">Incident Response Plans</h3>
          <p class="text-gray-700 mb-4">AI-tailored response strategies based on your specific business needs and risk profile.</p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Custom playbooks</li>
            <li>• 24/7 support</li>
            <li>• Expert guidance</li>
          </ul>
        </div>
        
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h3 class="text-xl font-bold text-gray-900 mb-3">Personal Check-Ups</h3>
          <p class="text-gray-700 mb-4">Regular security reminders and tips delivered via email, Slack, or Teams.</p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Personalized nudges</li>
            <li>• Security tips</li>
            <li>• Threat alerts</li>
          </ul>
        </div>
        
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h3 class="text-xl font-bold text-gray-900 mb-3">Awareness Dashboard</h3>
          <p class="text-gray-700 mb-4">Real-time visibility into your team's security awareness and compliance status.</p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Security scores</li>
            <li>• Audit tools</li>
            <li>• Compliance tracking</li>
          </ul>
        </div>
        
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h3 class="text-xl font-bold text-gray-900 mb-3">Additional Services</h3>
          <p class="text-gray-700 mb-4">Extended support including penetration testing and insurance partnerships.</p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Developer training</li>
            <li>• Pen testing</li>
            <li>• Insurance partnerships</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white fade-in">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Strengthen Your Cyber Village?</h2>
      <p class="text-xl mb-8 max-w-3xl mx-auto">
        Book a free readiness assessment today — see how cyber-aware your team truly is.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
          <span>Book Free Assessment</span>
          ${icons.arrowRight.replace('<svg', '<svg class="w-5 h-5"')}
        </button>
        <button class="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
          Contact Our Experts
        </button>
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

// Initialize functionality based on current route
if (window.location.pathname === '/' || window.location.pathname === '') {
  initHomePage()
} else {
  router()
}

window.toggleMobileMenu = toggleMobileMenu
setupAnimations()

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
})

// Handle navigation links
document.addEventListener('click', function(e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('/')) {
    e.preventDefault()
    navigate(e.target.getAttribute('href'))
  }
})