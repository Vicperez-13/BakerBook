import React from 'react';

const ContactSection = () => {
  return (
    <div id="contact-section" className="relative bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 mb-12 shadow-lg overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-200/20 rounded-full blur-lg"></div>
      
      {/* Header */}
      <div className="text-center mb-8 relative z-10">
        <div className="flex justify-center mb-4">
          <img
            src="/src/assets/tabbyCat.png"
            alt="Contact Us"
            className="w-12 h-12 object-cover rounded-full animate-pulse"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-amber-600 mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions about our pastries? Want to place a special order? 
          We'd love to hear from you!
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          {/* Email */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-amber-600 mb-3 flex items-center">
              <svg className="w-6 h-6 mr-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              Email Us
            </h3>
            <a 
              href="mailto:ava3065@icloud.com"
              className="text-lg text-amber-700 hover:text-amber-800 transition-colors duration-200 font-medium"
            >
              ava3065@icloud.com
            </a>
          </div>

          {/* Social Links */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-amber-600 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              Follow Us
            </h3>
            <div className="flex space-x-3">
              <a
                href="https://github.com/Vicperez-13"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-md"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 0 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/vicperez13"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-md"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Info */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-center mb-3">
              <img
                src="/src/assets/tabbyCat.png"
                alt="Response time"
                className="w-8 h-8 object-cover rounded-full mr-3"
              />
              <span className="text-lg font-semibold text-amber-600">Quick Response</span>
            </div>
            <p className="text-center text-gray-600">
              💝 We typically respond within 24 hours
            </p>
          </div>
        </div>

        {/* Right Side - Message Form */}
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-amber-600 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            Send us a Message
          </h3>
          
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white/80 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-white/80 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
            
            <select className="w-full px-4 py-3 bg-white/80 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200">
              <option value="">What can we help you with?</option>
              <option value="general">General Inquiry</option>
              <option value="order">Special Order</option>
              <option value="catering">Catering Services</option>
              <option value="feedback">Feedback</option>
            </select>
            
            <textarea
              rows={4}
              placeholder="Tell us about your inquiry..."
              className="w-full px-4 py-3 bg-white/80 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200 resize-vertical"
            ></textarea>
            
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
