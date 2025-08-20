(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();const i={shield:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',users:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',brain:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6"/><path d="m15.5 3.5-1.5 1.5m0 6 1.5 1.5M1 12h6m6 0h6m-15.5 3.5 1.5-1.5m6 0 1.5 1.5m-1.5-9L8.5 3.5"/></svg>',bookOpen:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',award:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/></svg>',trendingUp:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/><polyline points="17,6 23,6 23,12"/></svg>',checkCircle:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>',arrowRight:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>',menu:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',x:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'};let n=!1;function d(){n=!n;const l=document.getElementById("mobile-menu"),s=document.getElementById("menu-icon"),r=document.getElementById("close-icon");n?(l.classList.remove("hidden"),s.classList.add("hidden"),r.classList.remove("hidden")):(l.classList.add("hidden"),s.classList.remove("hidden"),r.classList.add("hidden"))}function c(l,s,r=2e3){const t=s/(r/16);let e=0;const o=setInterval(()=>{e+=t,e>=s&&(e=s,clearInterval(o)),s<1?l.textContent=(e*100).toFixed(1)+"%":s>=1e6?l.textContent="$"+(e/1e6).toFixed(1)+"M":s>=1e3?l.textContent=(e/1e3).toFixed(1)+"K":l.textContent=Math.floor(e)+"%"},16)}function x(){const l=new IntersectionObserver(s=>{s.forEach(r=>{r.isIntersecting&&(r.target.classList.add("animate-in"),r.target.classList.contains("stats-section")&&r.target.querySelectorAll("[data-counter]").forEach(t=>{const e=parseFloat(t.dataset.counter);c(t,e)}))})},{threshold:.1});document.querySelectorAll(".fade-in").forEach(s=>l.observe(s))}document.querySelector("#app").innerHTML=`
  <!-- Navigation -->
  <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
            ${i.shield.replace("<svg",'<svg class="w-5 h-5 text-white"')}
          </div>
          <span class="text-xl font-bold text-gray-900">CyberVillagers</span>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#mission" class="text-gray-700 hover:text-blue-600 transition-colors">Mission</a>
          <a href="#team" class="text-gray-700 hover:text-blue-600 transition-colors">Team</a>
          <a href="#approach" class="text-gray-700 hover:text-blue-600 transition-colors">Approach</a>
          <a href="#services" class="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
          <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Free Assessment
          </button>
        </div>
        
        <!-- Mobile Menu Button -->
        <button class="md:hidden" onclick="toggleMobileMenu()">
          ${i.menu.replace("<svg",'<svg id="menu-icon" class="w-6 h-6 text-gray-700"')}
          ${i.x.replace("<svg",'<svg id="close-icon" class="w-6 h-6 text-gray-700 hidden"')}
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div id="mobile-menu" class="hidden md:hidden pb-4">
        <div class="flex flex-col space-y-4">
          <a href="#mission" class="text-gray-700 hover:text-blue-600 transition-colors">Mission</a>
          <a href="#team" class="text-gray-700 hover:text-blue-600 transition-colors">Team</a>
          <a href="#approach" class="text-gray-700 hover:text-blue-600 transition-colors">Approach</a>
          <a href="#services" class="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
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
            ${i.arrowRight.replace("<svg",'<svg class="w-5 h-5"')}
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
          ${i.users.replace("<svg",'<svg class="w-8 h-8 text-white"')}
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
            ${i.bookOpen.replace("<svg",'<svg class="w-8 h-8 text-white"')}
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">15+ Years in SaaS Education</h3>
          <p class="text-gray-700">Delivering best-in-class online employee learning at scale, with proven methodologies that drive real behavior change.</p>
        </div>
        
        <div class="text-center p-8 bg-red-50 rounded-xl">
          <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            ${i.shield.replace("<svg",'<svg class="w-8 h-8 text-white"')}
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">15+ Years in FBI Cyber Response</h3>
          <p class="text-gray-700">Direct experience responding to the world's largest cyber breaches, understanding threats from the inside out.</p>
        </div>
        
        <div class="text-center p-8 bg-green-50 rounded-xl">
          <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            ${i.award.replace("<svg",'<svg class="w-8 h-8 text-white"')}
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
              ${i.brain.replace("<svg",'<svg class="w-6 h-6 text-white"')}
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">AI-Enhanced Training</h3>
              <p class="text-gray-700">Personalized learning paths aligned with CIS Controls, adapting to each employee's role and risk profile.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              ${i.trendingUp.replace("<svg",'<svg class="w-6 h-6 text-white"')}
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Automated Phishing Simulations</h3>
              <p class="text-gray-700">Continuous testing with real-world scenarios, providing immediate feedback and targeted remediation.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
              ${i.checkCircle.replace("<svg",'<svg class="w-6 h-6 text-white"')}
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Human-First Incident Response</h3>
              <p class="text-gray-700">AI-tailored response plans backed by real FBI cyber response experience when incidents occur.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white p-8 rounded-xl shadow-lg">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Proven Framework Integration</h3>
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              ${i.checkCircle.replace("<svg",'<svg class="w-5 h-5 text-green-600"')}
              <span class="text-gray-700"><strong>Security Awareness Training</strong> (CIS Control 14)</span>
            </div>
            <div class="flex items-center space-x-3">
              ${i.checkCircle.replace("<svg",'<svg class="w-5 h-5 text-green-600"')}
              <span class="text-gray-700"><strong>Data Recovery</strong> (CIS Control 11)</span>
            </div>
            <div class="flex items-center space-x-3">
              ${i.checkCircle.replace("<svg",'<svg class="w-5 h-5 text-green-600"')}
              <span class="text-gray-700"><strong>Access Control</strong> (CIS Control 5)</span>
            </div>
            <div class="flex items-center space-x-3">
              ${i.checkCircle.replace("<svg",'<svg class="w-5 h-5 text-green-600"')}
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
          ${i.arrowRight.replace("<svg",'<svg class="w-5 h-5"')}
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
             ${i.shield.replace("<svg",'<svg class="w-5 h-5 text-white"')}
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
            <li><a href="#" class="hover:text-white transition-colors">Blog</a></li>
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
`;window.toggleMobileMenu=d;x();document.querySelectorAll('a[href^="#"]').forEach(l=>{l.addEventListener("click",function(s){s.preventDefault();const r=document.querySelector(this.getAttribute("href"));r&&r.scrollIntoView({behavior:"smooth",block:"start"})})});
