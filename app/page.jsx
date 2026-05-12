import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function MHGolfHomepage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <img
          src="/golf-hero.jpg"
          alt="Marc Harris Golf Coaching"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        {/* Logo Top Right */}
        <div className="absolute top-6 right-6 z-20">
          <img
            src="/mh-logo.png"
            alt="MH Golf Logo"
            className="w-24 md:w-32 opacity-95"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Elevate Your Golf <br /> To The Next Level
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mb-8 leading-relaxed">
            World-class online golf coaching with Marc Harris.  
            Over 22 years of golfing experience combined with modern coaching,
            personalised swing analysis, and elite international instruction
            designed to help golfers unlock real improvement and confidence.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#packages"
              className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
            >
              View Coaching Packages
            </a>

            <a
              href="https://wa.me/84776326949"
              className="border border-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-white hover:text-black transition"
            >
              <MessageCircle size={20} />
              Contact On WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/marc-coaching.jpg"
              alt="Marc Harris Coaching"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Meet Marc Harris
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Marc Harris is an international golf coach with a passion for
              helping golfers improve their swing, confidence, consistency,
              and enjoyment of the game.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              With more than 22 years of golf experience and professional
              coaching certification, Marc combines technical understanding
              with a calm and encouraging coaching style that helps students
              progress naturally and effectively.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you are a beginner discovering golf for the first time
              or an experienced player looking for refinement, MH Golf offers
              a premium coaching experience tailored specifically to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* COACHING PACKAGES */}
      <section
        id="packages"
        className="py-24 px-6 md:px-20 bg-zinc-950"
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Online Coaching Packages
          </h2>

          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Professional online golf coaching designed for players worldwide.
            Receive personalised swing analysis, coaching plans, drills,
            and direct feedback from Marc Harris.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Package 1 */}
          <div className="bg-black border border-zinc-800 rounded-3xl p-10 hover:border-white transition">
            <h3 className="text-3xl font-bold mb-4">
              Starter
            </h3>

            <p className="text-gray-400 mb-6">
              Perfect for golfers beginning their improvement journey.
            </p>

            <div className="text-5xl font-bold mb-8">
              $49
            </div>

            <ul className="space-y-4 text-gray-300 mb-10">
              <li>✓ Swing Analysis</li>
              <li>✓ Personal Feedback</li>
              <li>✓ Practice Drills</li>
              <li>✓ Online Support</li>
            </ul>

            <button className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:scale-105 transition">
              Get Started
            </button>
          </div>

          {/* Package 2 */}
          <div className="bg-white text-black rounded-3xl p-10 scale-105 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Elite Coaching
            </h3>

            <p className="text-zinc-700 mb-6">
              The most popular package for serious improvement.
            </p>

            <div className="text-5xl font-bold mb-8">
              $149
            </div>

            <ul className="space-y-4 mb-10">
              <li>✓ Detailed Swing Analysis</li>
              <li>✓ Personal Coaching Plan</li>
              <li>✓ Video Feedback</li>
              <li>✓ Priority Support</li>
              <li>✓ Weekly Progress Review</li>
            </ul>

            <button className="w-full bg-black text-white py-4 rounded-2xl font-semibold hover:scale-105 transition">
              Join Elite Coaching
            </button>
          </div>

          {/* Package 3 */}
          <div className="bg-black border border-zinc-800 rounded-3xl p-10 hover:border-white transition">
            <h3 className="text-3xl font-bold mb-4">
              VIP Performance
            </h3>

            <p className="text-gray-400 mb-6">
              Premium coaching for maximum development.
            </p>

            <div className="text-5xl font-bold mb-8">
              $299
            </div>

            <ul className="space-y-4 text-gray-300 mb-10">
              <li>✓ Full Coaching Access</li>
              <li>✓ Unlimited Analysis</li>
              <li>✓ Direct WhatsApp Support</li>
              <li>✓ Advanced Performance Plan</li>
              <li>✓ Monthly Live Session</li>
            </ul>

            <button className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:scale-105 transition">
              Go VIP
            </button>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-5xl font-bold mb-8">
          Start Your Golf Transformation Today
        </h2>

        <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-10">
          Join golfers around the world who are improving their swing,
          confidence, consistency, and enjoyment through professional
          online coaching with MH Golf.
        </p>

        <a
          href="https://wa.me/84776326949"
          className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl text-lg font-semibold hover:scale-105 transition"
        >
          <MessageCircle size={24} />
          Message Marc On WhatsApp
        </a>
      </section>

    </div>
  );
}