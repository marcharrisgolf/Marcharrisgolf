export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <img
          src="/golf-hero.jpg"
          alt="MH Golf"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Logo Top Right */}
        <div className="absolute top-6 right-6 z-20">
          <img
            src="/mh-logo.png"
            alt="MH Golf Logo"
            className="w-24 md:w-32"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Elevate Your Golf Journey
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10">
            Premium online golf coaching with Marc Harris.
            Improve your swing, confidence, consistency,
            ball striking, and overall understanding of the game
            through personalised international coaching.
          </p>

          <a
            href="https://wa.me/84776326949"
            className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-200 transition"
          >
            Contact Marc On WhatsApp
          </a>

        </div>

      </section>

      {/* WHY TRAIN WITH MARC */}
      <section className="py-24 px-6 md:px-20">

        <h2 className="text-5xl md:text-7xl font-bold mb-16 leading-tight">
          Why Train <br /> With Marc?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="bg-zinc-950 rounded-[40px] p-12 border border-zinc-900">

            <h3 className="text-4xl font-bold mb-6 text-green-400">
              Personalized Coaching
            </h3>

            <p className="text-gray-300 text-2xl leading-relaxed">
              Every golfer has a unique swing.
              Marc focuses on helping you improve
              based on your natural movement patterns
              rather than forcing unrealistic positions.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-zinc-950 rounded-[40px] p-12 border border-zinc-900">

            <h3 className="text-4xl font-bold mb-6 text-green-400">
              Professional Swing Analysis
            </h3>

            <p className="text-gray-300 text-2xl leading-relaxed">
              Receive detailed feedback on your mechanics,
              sequencing, posture, club path, contact,
              and consistency to help unlock real progress.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-zinc-950 rounded-[40px] p-12 border border-zinc-900">

            <h3 className="text-4xl font-bold mb-6 text-green-400">
              Real Improvement
            </h3>

            <p className="text-gray-300 text-2xl leading-relaxed">
              Improve confidence, cleaner strikes,
              distance control, consistency,
              and overall understanding of your swing.
            </p>

          </div>

          {/* Card 4 */}
          <div className="bg-zinc-950 rounded-[40px] p-12 border border-zinc-900">

            <h3 className="text-4xl font-bold mb-6 text-green-400">
              Worldwide Online Coaching
            </h3>

            <p className="text-gray-300 text-2xl leading-relaxed">
              Train from anywhere in the world with
              premium online coaching and direct
              support from Marc Harris.
            </p>

          </div>

        </div>

      </section>

      {/* GOLFER LEVELS */}
      <section className="py-24 px-6 md:px-20">

        <h2 className="text-5xl md:text-7xl font-bold mb-16">
          Coaching For Every Level
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Beginner */}
          <div className="bg-zinc-950 rounded-[40px] p-12 min-h-[420px]">

            <h3 className="text-5xl font-bold mb-10 text-green-400">
              Beginners
            </h3>

            <ul className="space-y-6 text-gray-300 text-2xl leading-relaxed">
              <li>• Grip and posture</li>
              <li>• Setup fundamentals</li>
              <li>• Swing confidence</li>
              <li>• Ball contact</li>
              <li>• Basic swing mechanics</li>
              <li>• Understanding the game</li>
            </ul>

          </div>

          {/* Improving Golfers */}
          <div className="bg-zinc-950 rounded-[40px] p-12 min-h-[420px]">

            <h3 className="text-5xl font-bold mb-10 text-green-400">
              Improving Golfers
            </h3>

            <ul className="space-y-6 text-gray-300 text-2xl leading-relaxed">
              <li>• Cleaner ball striking</li>
              <li>• Better consistency</li>
              <li>• Club path improvement</li>
              <li>• Sequencing and timing</li>
              <li>• Shot shaping</li>
              <li>• Distance control</li>
            </ul>

          </div>

          {/* Elite Players */}
          <div className="bg-zinc-950 rounded-[40px] p-12 min-h-[420px]">

            <h3 className="text-5xl font-bold mb-10 text-green-400">
              Elite Players
            </h3>

            <ul className="space-y-6 text-gray-300 text-2xl leading-relaxed">
              <li>• Advanced mechanics</li>
              <li>• Efficient sequencing</li>
              <li>• Pressure performance</li>
              <li>• Tournament preparation</li>
              <li>• Precision shot control</li>
              <li>• High-level swing refinement</li>
            </ul>

          </div>

        </div>

      </section>

    </main>
  );
}