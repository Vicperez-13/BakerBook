import React from "react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-24"
        style={{
          background: `linear-gradient(135deg, 
            rgba(168, 162, 158, 0.15) 0%, 
            rgba(214, 211, 209, 0.20) 50%, 
            rgba(231, 229, 228, 0.25) 100%)`,
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-stone-700 mb-6">
            Meet Ava
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            The heart and soul behind every delightful pastry at Ava's Goodies
          </p>
        </div>
      </section>

      {/* Baker Profile Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Baker Photo Placeholder */}
            <div className="order-2 md:order-1">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(168, 162, 158, 0.20) 0%, 
                    rgba(214, 211, 209, 0.25) 50%, 
                    rgba(231, 229, 228, 0.30) 100%)`,
                }}
              >
                {/* Photo Placeholder - You can replace this with an actual image */}
                <div className="aspect-[3/4] flex items-center justify-center text-stone-600">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-stone-300 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-stone-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <p className="text-lg font-medium">Ava's Photo</p>
                    <p className="text-sm text-stone-500 mt-2">
                      Photo coming soon! This space is ready for Ava's beautiful
                      portrait.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Baker Story Content */}
            <div className="order-1 md:order-2">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-stone-700 mb-8">
                  The Baker Behind the Magic
                </h2>

                {/* Story Placeholder */}
                <div
                  className="bg-white/80 rounded-xl p-8 shadow-lg border border-stone-200"
                  style={{
                    background: `linear-gradient(135deg, 
                      rgba(255, 255, 255, 0.9) 0%, 
                      rgba(248, 246, 244, 0.95) 100%)`,
                  }}
                >
                  <h3 className="text-2xl font-semibold text-stone-700 mb-4">
                    Ava's Story
                  </h3>
                  <div className="prose prose-stone max-w-none">
                    <p className="text-stone-600 leading-relaxed mb-4">
                      This is where Ava's beautiful backstory will live! A space
                      ready to tell the inspiring journey of how she discovered
                      her passion for baking and decided to share her delightful
                      creations with the world.
                    </p>
                    <p className="text-stone-600 leading-relaxed mb-4">
                      Her story of dedication, love for the craft, and the joy
                      she finds in bringing sweetness to people's lives will be
                      shared here soon.
                    </p>
                    <blockquote className="border-l-4 border-stone-400 pl-6 italic text-stone-700 text-lg">
                      "Baking is love made visible."
                      <cite className="block text-stone-600 text-base mt-2 not-italic">
                        - Ava
                      </cite>
                    </blockquote>
                  </div>
                </div>

                {/* Philosophy Section */}
                <div
                  className="bg-white/80 rounded-xl p-8 shadow-lg border border-stone-200"
                  style={{
                    background: `linear-gradient(135deg, 
                      rgba(255, 255, 255, 0.9) 0%, 
                      rgba(248, 246, 244, 0.95) 100%)`,
                  }}
                >
                  <h3 className="text-2xl font-semibold text-stone-700 mb-4">
                    Our Philosophy
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    At Ava's Goodies, every pastry is crafted with intention and
                    care. We believe that the finest ingredients, combined with
                    passion and traditional techniques, create more than just
                    desserts—they create moments of joy and connection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, 
            rgba(168, 162, 158, 0.10) 0%, 
            rgba(214, 211, 209, 0.15) 50%, 
            rgba(231, 229, 228, 0.20) 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-700 mb-6">
              What We Stand For
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              The values that guide every creation at Ava's Goodies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Quality */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-stone-200 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-stone-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-stone-700 mb-4">
                Quality
              </h3>
              <p className="text-stone-600 leading-relaxed">
                We use only the finest ingredients and time-honored techniques
                to ensure every bite is exceptional.
              </p>
            </div>

            {/* Passion */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-stone-200 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-stone-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-stone-700 mb-4">
                Passion
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Every creation is made with love and genuine enthusiasm for the
                art of baking.
              </p>
            </div>

            {/* Community */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-stone-200 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-stone-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-stone-700 mb-4">
                Community
              </h3>
              <p className="text-stone-600 leading-relaxed">
                We believe in bringing people together through the shared joy of
                delicious, homemade treats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-stone-700 mb-6">
            Ready to Experience the Magic?
          </h2>
          <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
            Visit us today and taste the difference that passion and quality
            make in every single bite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="bg-stone-600 hover:bg-stone-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200"
            >
              Explore Our Menu
            </a>
            <a
              href="/#contact"
              className="border-2 border-stone-600 text-stone-600 hover:bg-stone-600 hover:text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
