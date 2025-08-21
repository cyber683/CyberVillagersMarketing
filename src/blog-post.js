// Individual blog post functionality
import { icons } from './main.js'

export function initBlogPost() {
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
            <a href="/blog" class="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
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
                  ${icons.shield.replace('<svg', '<svg class="w-6 h-6 text-red-500"')}
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
                    ${icons.users.replace('<svg', '<svg class="w-6 h-6"')}
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
                ${icons.arrowRight.replace('<svg', '<svg class="w-4 h-4 ml-1"')}
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
                    ${icons.brain.replace('<svg', '<svg class="w-6 h-6"')}
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
                ${icons.arrowRight.replace('<svg', '<svg class="w-4 h-4 ml-1"')}
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
                    ${icons.checkCircle.replace('<svg', '<svg class="w-6 h-6"')}
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
  `
}