import React from "react";

const ContactSection = () => {
  return (
    <div id="contact-section" className="relative py-16 px-4">
      <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto">
        {/* Welcoming Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-600 mb-4">
            Let's Chat Over Coffee & Pastries
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Whether you're dreaming of a custom birthday cake, planning a cozy
            event, or just want to share how much you loved our croissants -
            we're all ears!
            <span className="text-stone-600 font-medium">
              Every conversation starts with kindness.
            </span>
          </p>
        </div>

        {/* Contact Methods - Better organized */}
        <div className="w-full max-w-5xl mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email Contact */}
            <div className="relative group">
              <div className="relative bg-stone-50/95 rounded-xl p-6 border border-stone-300 hover:border-stone-400 transition-all duration-300 text-center shadow-md">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-stone-100 rounded-full">
                    <svg
                      className="w-8 h-8 text-stone-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-stone-600 mb-2">
                  Email Us
                </h3>
                <p className="text-stone-600 text-sm mb-3">
                  Drop us a line anytime!
                </p>
                <a
                  href="mailto:ava3065@icloud.com"
                  className="text-stone-700 hover:text-stone-800 transition-colors duration-200 font-medium break-all"
                >
                  ava3065@icloud.com
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="relative group">
              <div className="relative bg-stone-50/95 rounded-xl p-6 border border-stone-300 hover:border-stone-400 transition-all duration-300 text-center shadow-md">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-stone-100 rounded-full">
                    <img
                      src="/src/assets/tabbyCat.png"
                      alt="Quick Response"
                      className="w-8 h-8 object-cover rounded-full"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-stone-600 mb-2">
                  Quick Response
                </h3>
                <p className="text-stone-600 text-sm mb-3">
                  We're pretty speedy!
                </p>
                <p className="text-stone-700 font-medium">
                  💝 Usually within 24 hours
                </p>
              </div>
            </div>

            {/* Best Times */}
            <div className="relative group">
              <div className="relative bg-stone-50/95 rounded-xl p-6 border border-stone-300 hover:border-stone-400 transition-all duration-300 text-center shadow-md">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-stone-100 rounded-full">
                    <svg
                      className="w-8 h-8 text-stone-600"
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
                <h3 className="text-lg font-bold text-stone-600 mb-2">
                  Best Times
                </h3>
                <p className="text-stone-600 text-sm mb-3">
                  When we're most chatty
                </p>
                <p className="text-stone-700 font-medium">
                  ☀️ Mornings & Afternoons
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Message Form - More welcoming */}
        <div className="w-full max-w-2xl">
          <div className="relative group">
            <div className="relative bg-stone-50/95 rounded-2xl p-8 border-2 border-stone-300 hover:border-stone-400 transition-all duration-300 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-stone-600 mb-2 flex items-center justify-center">
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
                <p className="text-stone-600">
                  Tell us what's on your mind - we love hearing from you!
                </p>
              </div>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your lovely name"
                      className="w-full px-4 py-3 bg-white/95 border-2 border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent transition-all duration-200 hover:border-stone-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-white/95 border-2 border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent transition-all duration-200 hover:border-stone-300"
                    />
                  </div>
                </div>

                <select className="w-full px-4 py-3 bg-white/95 border-2 border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent transition-all duration-200 hover:border-stone-300">
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
                  className="w-full px-4 py-3 bg-white/95 border-2 border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent transition-all duration-200 resize-vertical hover:border-stone-300"
                ></textarea>

                <button
                  type="submit"
                  className="w-full text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center group text-lg"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(107, 114, 108, 0.9), rgba(92, 99, 94, 0.95))",
                  }}
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
          <p className="text-stone-600 italic max-w-md mx-auto">
            "Every message brings us joy - just like every pastry we bake brings
            sweetness to your day."
          </p>
          <p className="text-stone-600 font-medium mt-2">
            - The Ava's Goodies Team 🐱
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
