import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Reusable fade-in animation wrapper
const FadeInWhenVisible = ({ children, delay = 0, className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--mocha-foam)" }}
    >
      {/* Hero Section */}
      <FadeInWhenVisible>
        <section className="relative py-24 pt-40">
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
              Proof that butter, sugar, and sass make magic.
            </p>
          </div>
        </section>
      </FadeInWhenVisible>

      {/* Baker Profile Section */}
      <FadeInWhenVisible delay={0.15}>
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Ava's Photo */}
              <div className="order-2 md:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/AvaWild.jpg"
                    alt="Ava - Head Baker & Owner"
                    className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-500"
                    style={{ filter: "brightness(1.1) contrast(1.05)" }}
                  />
                  {/* Optional overlay for subtle mocha tint */}
                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, var(--mocha-cream) 0%, transparent 50%, var(--mocha-latte) 100%)`,
                    }}
                  ></div>
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
                  <FadeInWhenVisible delay={0.3}>
                    <div
                      className="rounded-xl p-8 shadow-lg border"
                      style={{
                        background: `linear-gradient(135deg, var(--mocha-foam) 0%, var(--mocha-latte) 100%)`,
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
                        <div
                          className="mb-4"
                          style={{
                            color: "var(--mocha-text-light)",
                            fontFamily: "Georgia, 'Times New Roman', serif",
                            textAlign: "justify",
                            lineHeight: "1.7",
                            fontSize: "1.04rem",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              textIndent: "1.5em",
                              display: "block",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "1.5rem",
                                lineHeight: "1",
                                fontWeight: 700,
                                color: "var(--mocha-accent)",
                                fontFamily: "Georgia, serif",
                                verticalAlign: "baseline",
                                display: "inline",
                                letterSpacing: "0",
                                paddingRight: "0.01em",
                              }}
                            >
                              H
                            </span>
                            i, I’m Ava—the slightly weird, soup-obsessed,
                            sunshine-chasing baker behind Ava’s Goodies. I’ve
                            always been a little bit of a hippy at heart. If I’m
                            not elbow-deep in dough, you’ll probably find me
                            barefoot in the garden, talking to my sourdough
                            starter like it’s my child (his name is Gerald, and
                            yes, he’s temperamental).
                          </span>
                          <span
                            style={{
                              textIndent: "1.5em",
                              display: "block",
                              marginTop: "0.5em",
                            }}
                          >
                            Baking has been my comfort zone since
                            forever—there’s something magical about mixing up a
                            mess and watching it turn into something warm,
                            flaky, and full of love. I’m constantly
                            experimenting with new recipes, usually while
                            blasting movie soundtracks or quoting lines from
                            whatever film I just watched for the tenth time.
                          </span>
                          <span
                            style={{
                              textIndent: "1.5em",
                              display: "block",
                              marginTop: "0.5em",
                            }}
                          >
                            I believe soup is a love language—any kind, any
                            time, any season. If you bring me soup, I’ll
                            probably love you forever. Summer is my jam. I live
                            for long days, spontaneous swims, and a little
                            cheeky banter with friends.
                          </span>
                          <span
                            style={{
                              textIndent: "1.5em",
                              display: "block",
                              marginTop: "0.5em",
                            }}
                          >
                            I started Ava’s Goodies because I wanted to share
                            the joy I find in baking with others—whether it’s a
                            cookie that makes you giggle or a loaf that reminds
                            you of home. Thanks for stopping by. I hope you find
                            something here that makes your day a little brighter
                            (and tastier).
                          </span>
                          <span
                            style={{
                              color: "var(--mocha-accent)",
                              fontStyle: "italic",
                              display: "block",
                              marginTop: "0.5em",
                              textIndent: "1.5em",
                            }}
                          >
                            Peace, pastries, and good vibes ✌️ —Ava
                          </span>
                        </div>
                      </div>
                    </div>
                  </FadeInWhenVisible>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInWhenVisible>

      {/* Values Section */}
      <FadeInWhenVisible delay={0.25}>
        <section
          className="py-20"
          style={{
            background: `linear-gradient(135deg, var(--mocha-latte) 0%, var(--mocha-cream) 50%, var(--mocha-foam) 100%)`,
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
              <FadeInWhenVisible delay={0.3}>
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
                    We use only the finest ingredients and time-honored
                    techniques to ensure every bite is exceptional.
                  </p>
                </div>
              </FadeInWhenVisible>
              {/* Passion */}
              <FadeInWhenVisible delay={0.4}>
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
                    Every creation is made with love and genuine enthusiasm for
                    the art of baking.
                  </p>
                </div>
              </FadeInWhenVisible>
              {/* Community */}
              <FadeInWhenVisible delay={0.5}>
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
                    We believe in bringing people together through the shared
                    joy of delicious, homemade treats.
                  </p>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>
      </FadeInWhenVisible>

      {/* Call to Action */}
      <FadeInWhenVisible delay={0.35}>
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
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <a
                href="/menu"
                className="inline-flex items-center justify-center px-8 py-4 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg bg-gradient-to-r from-[var(--mocha-medium)] to-[var(--mocha-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--mocha-medium)] hover:text-white"
                style={{
                  fontFamily: "Comic Neue, cursive",
                  letterSpacing: "0.01em",
                }}
              >
                Explore Our Menu
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg bg-gradient-to-r from-[var(--mocha-dark)] to-[var(--mocha-medium)] focus:outline-none focus:ring-2 focus:ring-[var(--mocha-medium)] hover:text-white"
                style={{
                  fontFamily: "Comic Neue, cursive",
                  letterSpacing: "0.01em",
                }}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </FadeInWhenVisible>
    </div>
  );
};

export default About;
