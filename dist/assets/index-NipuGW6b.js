(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();function d(){document.querySelector("#app").innerHTML=`
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              ${e.shield.replace("<svg",'<svg class="w-5 h-5 text-white"')}
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
            ${e.menu.replace("<svg",'<svg id="menu-icon" class="w-6 h-6 text-gray-700"')}
            ${e.x.replace("<svg",'<svg id="close-icon" class="w-6 h-6 text-gray-700 hidden"')}
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
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          <!-- Featured Blog Post -->
          <div class="lg:col-span-3 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-64 bg-gradient-to-br from-red-500 to-red-600 relative overflow-hidden">
              <img src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800" 
                   alt="Cybersecurity Shield" 
                   class="w-full h-full object-cover opacity-80">
              <div class="absolute inset-0 bg-red-600/60 flex items-center justify-center">
                <div class="text-white text-center">
                  <div class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    ${e.shield.replace("<svg",'<svg class="w-8 h-8"')}
                  </div>
                  <h3 class="text-2xl font-bold">Featured Article</h3>
                </div>
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
                ${e.arrowRight.replace("<svg",'<svg class="w-4 h-4 ml-1"')}
              </a>
            </div>
          </div>

          <!-- Recent Posts Sidebar -->
          <div class="lg:col-span-1 space-y-6">
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
            <div class="h-48 relative overflow-hidden">
              <img src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600" 
                   alt="Team Training" 
                   class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-green-600/60 flex items-center justify-center">
                <div class="text-white text-center">
                  <div class="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                    ${e.users.replace("<svg",'<svg class="w-6 h-6"')}
                  </div>
                  <span class="text-sm">Training Guide</span>
                </div>
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
                ${e.arrowRight.replace("<svg",'<svg class="w-4 h-4 ml-1"')}
              </a>
            </div>
          </article>

          <article class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 relative overflow-hidden">
              <img src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600" 
                   alt="AI Technology" 
                   class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-purple-600/60 flex items-center justify-center">
                <div class="text-white text-center">
                  <div class="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                    ${e.brain.replace("<svg",'<svg class="w-6 h-6"')}
                  </div>
                  <span class="text-sm">AI & Security</span>
                </div>
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
                ${e.arrowRight.replace("<svg",'<svg class="w-4 h-4 ml-1"')}
              </a>
            </div>
          </article>

          <article class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 relative overflow-hidden">
              <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600" 
                   alt="Password Security" 
                   class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-orange-600/60 flex items-center justify-center">
                <div class="text-white text-center">
                  <div class="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                    ${e.checkCircle.replace("<svg",'<svg class="w-6 h-6"')}
                  </div>
                  <span class="text-sm">Best Practices</span>
                </div>
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
                ${e.arrowRight.replace("<svg",'<svg class="w-4 h-4 ml-1"')}
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
               ${e.shield.replace("<svg",'<svg class="w-5 h-5 text-white"')}
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
              <li><a href="#" class="hover:text-brand-light transition-colors">Security Training</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Phishing Simulations</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Incident Response</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Penetration Testing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Resources</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="/blog" class="hover:text-brand-light transition-colors">Blog</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Webinars</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Case Studies</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Security Guides</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Company</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-brand-light transition-colors">About Us</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Contact</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 CyberVillagers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `}function g(){document.querySelector("#app").innerHTML=`
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              ${e.shield.replace("<svg",'<svg class="w-5 h-5 text-white"')}
            </div>
            <a href="/" class="text-xl font-bold text-gray-900">CyberVillagers</a>
          </div>
          
          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="/" class="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="/blog" class="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
            <a href="/#services" class="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Free Assessment
            </button>
          </div>
          
          <!-- Mobile Menu Button -->
          <button class="md:hidden" onclick="toggleMobileMenu()">
            ${e.menu.replace("<svg",'<svg id="menu-icon" class="w-6 h-6 text-gray-700"')}
            ${e.x.replace("<svg",'<svg id="close-icon" class="w-6 h-6 text-gray-700 hidden"')}
          </button>
        </div>
        
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden pb-4">
          <div class="flex flex-col space-y-4">
            <a href="/" class="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="/blog" class="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
            <a href="/#services" class="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full">
              Free Assessment
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Blog Post Header -->
    <section class="pt-24 pb-8 bg-gradient-to-br from-red-50 to-red-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <div class="flex items-center justify-center space-x-2 text-sm text-red-600 mb-4">
            <span class="bg-red-100 px-3 py-1 rounded-full">Security Alert</span>
            <span>•</span>
            <span>January 15, 2025</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ransomware Trends 2025: What SMBs Need to Know Right Now
          </h1>
          <p class="text-xl text-gray-700 max-w-3xl mx-auto">
            Ransomware attacks have evolved dramatically in 2025. Learn about the latest tactics cybercriminals are using and how to protect your business with practical, actionable strategies.
          </p>
        </div>
        
        <!-- Author Info -->
        <div class="flex items-center justify-center space-x-4 text-gray-600">
          <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <span class="text-white font-bold">CV</span>
          </div>
          <div>
            <p class="font-semibold text-gray-900">CyberVillagers Team</p>
            <p class="text-sm">Cybersecurity Experts</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Post Content -->
    <article class="py-12 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose prose-lg max-w-none">
          
          <!-- Featured Image Placeholder -->
          <div class="w-full h-96 rounded-xl overflow-hidden mb-8">
            <img src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                 alt="Cybersecurity team working on ransomware protection" 
                 class="w-full h-full object-cover">
            <div class="relative -mt-24 bg-gradient-to-t from-black/60 to-transparent h-24 flex items-end">
              <div class="text-white p-6">
                <p class="text-lg font-semibold">Ransomware Protection Strategy</p>
              </div>
            </div>
          </div>

          <div class="text-gray-700 leading-relaxed space-y-6">
            <p class="text-xl font-medium text-gray-900">
              The ransomware landscape has undergone significant changes in 2025, with cybercriminals adopting more sophisticated tactics specifically targeting small and medium businesses. Understanding these evolving threats is crucial for protecting your organization.
            </p>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Current Threat Landscape</h2>
            
            <p>
              Recent data shows that <strong>43% of cyberattacks now target small businesses</strong>, yet only 14% of SMBs feel adequately prepared. This gap represents a critical vulnerability that cybercriminals are actively exploiting.
            </p>

            <div class="bg-red-50 border-l-4 border-red-500 p-6 my-8">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  ${e.shield.replace("<svg",'<svg class="w-6 h-6 text-red-500"')}
                </div>
                <div class="ml-3">
                  <h3 class="text-lg font-semibold text-red-800">Critical Alert</h3>
                  <p class="text-red-700">
                    The average ransomware incident now costs SMBs $1.85 million, with recovery fees reaching up to $2.7 million. These costs can be devastating for smaller organizations.
                  </p>
                </div>
              </div>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Ransomware Trends in 2025</h2>

            <h3 class="text-xl font-semibold text-gray-900 mb-3">1. AI-Powered Social Engineering</h3>
            <p>
              Cybercriminals are now using artificial intelligence to create highly personalized phishing emails and social engineering attacks. These AI-generated messages are becoming increasingly difficult to distinguish from legitimate communications.
            </p>

            <h3 class="text-xl font-semibold text-gray-900 mb-3">2. Supply Chain Targeting</h3>
            <p>
              Rather than attacking large corporations directly, ransomware groups are focusing on smaller suppliers and vendors as entry points into larger networks. This "supply chain ransomware" approach has proven highly effective.
            </p>

            <h3 class="text-xl font-semibold text-gray-900 mb-3">3. Double and Triple Extortion</h3>
            <p>
              Modern ransomware attacks don't just encrypt data—they steal it first. Attackers then threaten to release sensitive information publicly if ransom demands aren't met, creating multiple pressure points for victims.
            </p>

            <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
              <h3 class="text-lg font-semibold text-blue-900 mb-3">Good News: Proactive Defense Works</h3>
              <p class="text-blue-800">
                Despite the evolving threat landscape, organizations with proper security awareness training and incident response plans have seen a <strong>33% reduction in successful ransomware attacks</strong> compared to 2024.
              </p>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Practical Protection Strategies</h2>

            <h3 class="text-xl font-semibold text-gray-900 mb-3">Employee Training is Your First Line of Defense</h3>
            <p>
              Since <strong>60% of breaches are caused by human error</strong>, comprehensive security awareness training is essential. Focus on:
            </p>
            
            <ul class="list-disc pl-6 space-y-2">
              <li>Regular phishing simulation exercises</li>
              <li>Role-specific security training</li>
              <li>Incident reporting procedures</li>
              <li>Password security best practices</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Implement the CIS Controls Framework</h3>
            <p>
              The Center for Internet Security (CIS) Controls provide a prioritized approach to cybersecurity. Key controls for ransomware protection include:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-semibold text-gray-900 mb-2">Control 5: Access Control</h4>
                <p class="text-sm text-gray-700">Limit user access to only what's necessary for their role.</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-semibold text-gray-900 mb-2">Control 11: Data Recovery</h4>
                <p class="text-sm text-gray-700">Maintain secure, tested backup and recovery procedures.</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-semibold text-gray-900 mb-2">Control 14: Security Awareness</h4>
                <p class="text-sm text-gray-700">Provide ongoing security awareness training for all users.</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-semibold text-gray-900 mb-2">Continuous Monitoring</h4>
                <p class="text-sm text-gray-700">Implement real-time threat detection and response.</p>
              </div>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Building an Incident Response Plan</h2>
            
            <p>
              Every organization needs a clear, tested incident response plan. Your plan should include:
            </p>

            <ol class="list-decimal pl-6 space-y-2">
              <li><strong>Detection and Analysis:</strong> How will you identify a potential ransomware attack?</li>
              <li><strong>Containment:</strong> Steps to isolate affected systems and prevent spread</li>
              <li><strong>Communication:</strong> Who to notify and when (internal teams, law enforcement, customers)</li>
              <li><strong>Recovery:</strong> How to restore operations from clean backups</li>
              <li><strong>Lessons Learned:</strong> Post-incident review and plan improvements</li>
            </ol>

            <div class="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h3 class="text-lg font-semibold text-green-900 mb-3">The CyberVillagers Approach</h3>
              <p class="text-green-800">
                At CyberVillagers, we combine AI-enhanced training with real-world FBI cyber response experience to create comprehensive protection strategies. Our approach focuses on making every employee a defender, because collective vigilance stops attacks before they strike.
              </p>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Take Action Today</h2>
            
            <p>
              Ransomware threats are evolving rapidly, but with the right preparation and training, your organization can build effective defenses. Don't wait until it's too late—start strengthening your cyber village today.
            </p>

            <div class="bg-blue-600 text-white p-6 rounded-lg my-8 text-center">
              <h3 class="text-xl font-bold mb-3">Ready to Assess Your Ransomware Readiness?</h3>
              <p class="mb-4">Get a free cybersecurity assessment and see how prepared your team really is.</p>
              <button class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Book Free Assessment
              </button>
            </div>

            <hr class="my-8 border-gray-200">

            <div class="text-sm text-gray-600">
              <p><strong>About the Author:</strong> This article was written by the CyberVillagers team, combining insights from 15+ years of FBI cyber response experience and proven SaaS education methodologies. Our experts hold OSCP, CompTIA PenTest+, Security+, Network+, and ITF+ certifications.</p>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- Related Articles -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 relative overflow-hidden">
              <img src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600" 
                   alt="Team Training" 
                   class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-green-600/60 flex items-center justify-center">
                <div class="text-white text-center">
                  <div class="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                    ${e.users.replace("<svg",'<svg class="w-6 h-6"')}
                  </div>
                  <span class="text-sm">Training Guide</span>
                </div>
              </div>
            </div>
            <div class="p-6">
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
                ${e.arrowRight.replace("<svg",'<svg class="w-4 h-4 ml-1"')}
              </a>
            </div>
          </article>

          <article class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 relative overflow-hidden">
              <img src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600" 
                   alt="AI Technology" 
                   class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-purple-600/60 flex items-center justify-center">
                <div class="text-white text-center">
                  <div class="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                    ${e.brain.replace("<svg",'<svg class="w-6 h-6"')}
                  </div>
                  <span class="text-sm">AI & Security</span>
                </div>
              </div>
            </div>
            <div class="p-6">
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
                ${e.arrowRight.replace("<svg",'<svg class="w-4 h-4 ml-1"')}
              </a>
            </div>
          </article>

          <article class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 relative overflow-hidden">
              <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600" 
                   alt="Cyber Security" 
                   class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-blue-600/60 flex items-center justify-center">
                <div class="text-white text-center">
                  <div class="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                    ${e.checkCircle.replace("<svg",'<svg class="w-6 h-6"')}
                  </div>
                  <span class="text-sm">Best Practices</span>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                <a href="#" class="hover:text-blue-600 transition-colors">
                  Building a Cyber-Resilient Culture
                </a>
              </h3>
              <p class="text-gray-700 mb-4">
                Learn how to create a security-first mindset across your entire organization.
              </p>
              <a href="#" class="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                Read More
                ${e.arrowRight.replace("<svg",'<svg class="w-4 h-4 ml-1"')}
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
               ${e.shield.replace("<svg",'<svg class="w-5 h-5 text-white"')}
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
              <li><a href="#" class="hover:text-brand-light transition-colors">Security Training</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Phishing Simulations</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Incident Response</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Penetration Testing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Resources</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="/blog" class="hover:text-brand-light transition-colors">Blog</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Webinars</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Case Studies</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Security Guides</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Company</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-brand-light transition-colors">About Us</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Contact</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 CyberVillagers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `}const e={shield:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.5 7.5S5 18 5 13V6l7.5-3L20 6v7z"/><path d="m9 12 2 2 4-4"/></svg>',users:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',brain:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',bookOpen:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',award:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',trendingUp:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/></svg>',checkCircle:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>',arrowRight:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>',menu:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>',x:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'};function c(){switch(window.location.pathname){case"/blog":d();break;case"/blog/ransomware-trends-2025":g();break}}function h(a){window.history.pushState({},"",a),c()}window.addEventListener("popstate",c);let n=!1;function x(){n=!n;const a=document.getElementById("mobile-menu"),t=document.getElementById("menu-icon"),r=document.getElementById("close-icon");n?(a.classList.remove("hidden"),t.classList.add("hidden"),r.classList.remove("hidden")):(a.classList.add("hidden"),t.classList.remove("hidden"),r.classList.add("hidden"))}function p(a,t,r=2e3){const i=t/(r/16);let s=0;const l=setInterval(()=>{s+=i,s>=t&&(s=t,clearInterval(l)),t<1?a.textContent=(s*100).toFixed(1)+"%":t>=1e6?a.textContent="$"+(s/1e6).toFixed(1)+"M":t>=1e3?a.textContent=(s/1e3).toFixed(1)+"K":a.textContent=Math.floor(s)+"%"},16)}function v(){const a=new IntersectionObserver(t=>{t.forEach(r=>{r.isIntersecting&&(r.target.classList.add("animate-in"),r.target.classList.contains("stats-section")&&r.target.querySelectorAll("[data-counter]").forEach(i=>{const s=parseFloat(i.dataset.counter);p(i,s)}))})},{threshold:.1});document.querySelectorAll(".fade-in").forEach(t=>a.observe(t))}function u(){document.querySelector("#app").innerHTML=`
  <!-- Navigation -->
  <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
            ${e.shield.replace("<svg",'<svg class="w-5 h-5 text-white"')}
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
          ${e.menu.replace("<svg",'<svg id="menu-icon" class="w-6 h-6 text-gray-700"')}
          ${e.x.replace("<svg",'<svg id="close-icon" class="w-6 h-6 text-gray-700 hidden"')}
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
            ${e.arrowRight.replace("<svg",'<svg class="w-5 h-5"')}
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
          ${e.users.replace("<svg",'<svg class="w-8 h-8 text-white"')}
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
            ${e.bookOpen.replace("<svg",'<svg class="w-8 h-8 text-white"')}
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">15+ Years in SaaS Education</h3>
          <p class="text-gray-700">Delivering best-in-class online employee learning at scale, with proven methodologies that drive real behavior change.</p>
        </div>
        
        <div class="text-center p-8 bg-red-50 rounded-xl">
          <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            ${e.shield.replace("<svg",'<svg class="w-8 h-8 text-white"')}
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">15+ Years in FBI Cyber Response</h3>
          <p class="text-gray-700">Direct experience responding to the world's largest cyber breaches, understanding threats from the inside out.</p>
        </div>
        
        <div class="text-center p-8 bg-green-50 rounded-xl">
          <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            ${e.award.replace("<svg",'<svg class="w-8 h-8 text-white"')}
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
              ${e.brain.replace("<svg",'<svg class="w-6 h-6 text-white"')}
              <li><a href="#" class="hover:text-brand-light transition-colors">Security Training</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Phishing Simulations</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Incident Response</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Penetration Testing</a></li>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              ${e.trendingUp.replace("<svg",'<svg class="w-6 h-6 text-white"')}
              <li><a href="/blog" class="hover:text-brand-light transition-colors">Blog</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Webinars</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Case Studies</a></li>
              <li><a href="#" class="hover:text-brand-light transition-colors">Security Guides</a></li>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
              ${e.checkCircle.replace("<svg",'<svg class="w-6 h-6 text-white"')}
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
              ${e.checkCircle.replace("<svg",'<svg class="w-5 h-5 text-green-600"')}
              <span class="text-gray-700"><strong>Security Awareness Training</strong> (CIS Control 14)</span>
            </div>
            <div class="flex items-center space-x-3">
              ${e.checkCircle.replace("<svg",'<svg class="w-5 h-5 text-green-600"')}
              <span class="text-gray-700"><strong>Data Recovery</strong> (CIS Control 11)</span>
            </div>
            <div class="flex items-center space-x-3">
              ${e.checkCircle.replace("<svg",'<svg class="w-5 h-5 text-green-600"')}
              <span class="text-gray-700"><strong>Access Control</strong> (CIS Control 5)</span>
            </div>
            <div class="flex items-center space-x-3">
              ${e.checkCircle.replace("<svg",'<svg class="w-5 h-5 text-green-600"')}
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
          ${e.arrowRight.replace("<svg",'<svg class="w-5 h-5"')}
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
             ${e.shield.replace("<svg",'<svg class="w-5 h-5 text-white"')}
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
`}window.location.pathname==="/"||window.location.pathname===""?u():c();window.toggleMobileMenu=x;v();document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener("click",function(t){t.preventDefault();const r=document.querySelector(this.getAttribute("href"));r&&r.scrollIntoView({behavior:"smooth",block:"start"})})});document.addEventListener("click",function(a){var t;a.target.tagName==="A"&&((t=a.target.getAttribute("href"))!=null&&t.startsWith("/"))&&(a.preventDefault(),h(a.target.getAttribute("href")))});
