import React from "react";

const ContactSection = () => {
  return (
    <div id="contact-section" className="relative py-16 px-4">
      {/* Background decorative elements - matching gallery style */}
      <div className="absolute top-12 right-8 w-20 h-20 bg-amber-200/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-32 left-12 w-16 h-16 bg-yellow-200/30 rounded-full blur-lg"></div>
      <div
        className="absolute bottom-16 right-1/4 w-12 h-12 bg-orange-200/25 rounded-full blur-md animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto">
        {/* Welcoming Header */}
        <div className="text-center mb-16 relative">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-2 bg-amber-400/30 rounded-full blur-lg animate-pulse"></div>
              <img
                src="/src/assets/tabbyCat.png"
                alt="Welcome to Contact"
                className="relative w-12 h-12 object-cover rounded-full animate-bounce"
              />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-600 mb-4">
            Let's Chat Over Coffee & Pastries
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Whether you're dreaming of a custom birthday cake, planning a cozy
            event, or just want to share how much you loved our croissants -
            we're all ears!
            <span className="text-amber-600 font-medium">
              Every conversation starts with kindness.
            </span>
          </p>
        </div>

        {/* Welcome Message Banner */}
        <div className="w-full max-w-4xl mb-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-300/40 to-yellow-300/40 rounded-2xl blur-lg"></div>
            <div className="relative bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 border-2 border-amber-200/60">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-amber-700 mb-2">
                    🌟 We're Here to Help Make Your Day Sweeter 🌟
                  </h3>
                  <p className="text-gray-600">
                    From special orders to recipe questions, our friendly team
                    loves connecting with fellow pastry enthusiasts!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Methods - Better organized */}
        <div className="w-full max-w-5xl mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email Contact */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-200/20 to-yellow-200/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-amber-200/50 hover:border-amber-400 transition-all duration-300 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-amber-100 rounded-full">
                    <svg
                      className="w-8 h-8 text-amber-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-amber-600 mb-2">
                  Email Us
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Drop us a line anytime!
                </p>
                <a
                  href="mailto:ava3065@icloud.com"
                  className="text-amber-700 hover:text-amber-800 transition-colors duration-200 font-medium break-all"
                >
                  ava3065@icloud.com
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-200/20 to-yellow-200/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-amber-200/50 hover:border-amber-400 transition-all duration-300 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-amber-100 rounded-full">
                    <img
                      src="/src/assets/tabbyCat.png"
                      alt="Quick Response"
                      className="w-8 h-8 object-cover rounded-full"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-amber-600 mb-2">
                  Quick Response
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  We're pretty speedy!
                </p>
                <p className="text-amber-700 font-medium">
                  💝 Usually within 24 hours
                </p>
              </div>
            </div>

            {/* Best Times */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-200/20 to-yellow-200/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-amber-200/50 hover:border-amber-400 transition-all duration-300 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-amber-100 rounded-full">
                    <svg
                      className="w-8 h-8 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-amber-600 mb-2">
                  Best Times
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  When we're most chatty
                </p>
                <p className="text-amber-700 font-medium">
                  ☀️ Mornings & Afternoons
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Message Form - More welcoming */}
        <div className="w-full max-w-2xl">
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-amber-200/30 to-yellow-200/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 border-2 border-amber-200/60 hover:border-amber-300 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-2 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Share Your Sweet Story
                </h3>
                <p className="text-gray-600">
                  Tell us what's on your mind - we love hearing from you!
                </p>
              </div>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your lovely name"
                      className="w-full px-4 py-3 bg-white/95 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200 hover:border-amber-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-white/95 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200 hover:border-amber-300"
                    />
                  </div>
                </div>

                <select className="w-full px-4 py-3 bg-white/95 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200 hover:border-amber-300">
                  <option value="">How can we make your day sweeter?</option>
                  <option value="general">Just saying hello! 👋</option>
                  <option value="order">Custom order inquiry 🎂</option>
                  <option value="catering">Event catering 🎉</option>
                  <option value="feedback">
                    Share some love (or suggestions) 💕
                  </option>
                </select>

                <textarea
                  rows={5}
                  placeholder="Share your thoughts, dreams, or pastry wishes... We're excited to hear from you! ✨"
                  className="w-full px-4 py-3 bg-white/95 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200 resize-vertical hover:border-amber-300"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center group text-lg"
                >
                  <svg
                    className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  Send Our Sweet Message 🍯
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Closing Message */}
        <div className="text-center mt-12">
          <p className="text-gray-600 italic max-w-md mx-auto">
            "Every message brings us joy - just like every pastry we bake brings
            sweetness to your day."
          </p>
          <p className="text-amber-600 font-medium mt-2">
            - The Ava's Goodies Team 🐱
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
