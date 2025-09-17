import React from "react";

const About = () => {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--mocha-foam)" }}
    >
      {/* Hero Section */}
      <section
        className="relative py-24"
        style={{
          background: `linear-gradient(135deg, 
            var(--mocha-latte) 0%, 
            var(--mocha-cream) 50%, 
            var(--mocha-foam) 100%)`,
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ color: "var(--mocha-text)" }}
          >
            Meet Ava
          </h1>
          <p
            className="text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--mocha-text-light)" }}
          >
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
                    var(--mocha-cream) 0%, 
                    var(--mocha-latte) 50%, 
                    var(--mocha-foam) 100%)`,
                }}
              >
                {/* Photo Placeholder - You can replace this with an actual image */}
                <div
                  className="aspect-[3/4] flex items-center justify-center"
                  style={{ color: "var(--mocha-text-light)" }}
                >
                  <div className="text-center p-8">
                    <div
                      className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "var(--mocha-cream)" }}
                    >
                      <svg
                        className="w-12 h-12"
                        style={{ color: "var(--mocha-text-light)" }}
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
                    <p
                      className="text-sm mt-2"
                      style={{ color: "var(--mocha-text-light)" }}
                    >
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
                <h2
                  className="text-4xl font-bold mb-8"
                  style={{ color: "var(--mocha-text)" }}
                >
                  The Baker Behind the Magic
                </h2>

                {/* Story Placeholder */}
                <div
                  className="rounded-xl p-8 shadow-lg border"
                  style={{
                    background: `linear-gradient(135deg, 
                      var(--mocha-foam) 0%, 
                      var(--mocha-latte) 100%)`,
                    borderColor: "var(--mocha-cream)",
                  }}
                >
                  <h3
                    className="text-2xl font-semibold mb-4"
                    style={{ color: "var(--mocha-text)" }}
                  >
                    Ava's Story
                  </h3>
                  <div className="prose prose-stone max-w-none">
                    <p
                      className="leading-relaxed mb-4"
                      style={{ color: "var(--mocha-text-light)" }}
                    >
                      This is where Ava's beautiful backstory will live! A space
                      ready to tell the inspiring journey of how she discovered
                      her passion for baking and decided to share her delightful
                      creations with the world.
                    </p>
                    <p
                      className="leading-relaxed mb-4"
                      style={{ color: "var(--mocha-text-light)" }}
                    >
                      Her story of dedication, love for the craft, and the joy
                      she finds in bringing sweetness to people's lives will be
                      shared here soon.
                    </p>
                    <blockquote
                      className="border-l-4 pl-6 italic text-lg"
                      style={{
                        borderColor: "var(--mocha-light)",
                        color: "var(--mocha-text)",
                      }}
                    >
                      "Baking is love made visible."
                      <cite
                        className="block text-base mt-2 not-italic"
                        style={{ color: "var(--mocha-text-light)" }}
                      >
                        - Ava
                      </cite>
                    </blockquote>
                  </div>
                </div>

                {/* Philosophy Section */}
                <div
                  className="rounded-xl p-8 shadow-lg border"
                  style={{
                    background: `linear-gradient(135deg, 
                      var(--mocha-foam) 0%, 
                      var(--mocha-latte) 100%)`,
                    borderColor: "var(--mocha-cream)",
                  }}
                >
                  <h3
                    className="text-2xl font-semibold mb-4"
                    style={{ color: "var(--mocha-text)" }}
                  >
                    Our Philosophy
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ color: "var(--mocha-text-light)" }}
                  >
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
            var(--mocha-latte) 0%, 
            var(--mocha-cream) 50%, 
            var(--mocha-foam) 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-6"
              style={{ color: "var(--mocha-text)" }}
            >
              What We Stand For
            </h2>
            <p
              className="text-xl max-w-2xl mx-auto"
              style={{ color: "var(--mocha-text-light)" }}
            >
              The values that guide every creation at Ava's Goodies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Quality */}
            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--mocha-cream)" }}
              >
                <svg
                  className="w-8 h-8"
                  style={{ color: "var(--mocha-text)" }}
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
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--mocha-text)" }}
              >
                Quality
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--mocha-text-light)" }}
              >
                We use only the finest ingredients and time-honored techniques
                to ensure every bite is exceptional.
              </p>
            </div>

            {/* Passion */}
            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--mocha-cream)" }}
              >
                <svg
                  className="w-8 h-8"
                  style={{ color: "var(--mocha-text)" }}
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
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--mocha-text)" }}
              >
                Passion
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--mocha-text-light)" }}
              >
                Every creation is made with love and genuine enthusiasm for the
                art of baking.
              </p>
            </div>

            {/* Community */}
            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--mocha-cream)" }}
              >
                <svg
                  className="w-8 h-8"
                  style={{ color: "var(--mocha-text)" }}
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
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--mocha-text)" }}
              >
                Community
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--mocha-text-light)" }}
              >
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
          <h2
            className="text-4xl font-bold mb-6"
            style={{ color: "var(--mocha-text)" }}
          >
            Ready to Experience the Magic?
          </h2>
          <p
            className="text-xl mb-8 max-w-2xl mx-auto"
            style={{ color: "var(--mocha-text-light)" }}
          >
            Visit us today and taste the difference that passion and quality
            make in every single bite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200"
              style={{ backgroundColor: "var(--mocha-medium)" }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "var(--mocha-dark)")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "var(--mocha-medium)")
              }
            >
              Explore Our Menu
            </a>
            <a
              href="/#contact"
              className="border-2 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200"
              style={{
                borderColor: "var(--mocha-medium)",
                color: "var(--mocha-medium)",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "var(--mocha-medium)";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "var(--mocha-medium)";
              }}
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
