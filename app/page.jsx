export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center">

        {/* Background Image */}
        <img
          src="/golf-hero.jpg"
          alt="MH Golf"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Logo */}
        <div className="absolute top-6 right-6 z-20">
          <img
            src="/mh-logo.png"
            alt="MH Golf Logo"
            className="w-24 md:w-32"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Elevate Your Golf Journey
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Premium international golf coaching with Marc Harris.
            Improve your swing, confidence, consistency,
            and understanding of the game through professional
            online coaching designed for golfers worldwide.
          </p>

          <a
            href="https://wa.me/84776326949"
            className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition"
          >
            Contact Marc On WhatsApp
          </a>

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 md:px-20">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <img
            src="/marc-coaching.jpg"
            alt="Marc Harris"
            className="rounded-3xl shadow-2xl"
          />

          <div>

            <h2 className="text-5xl font-bold mb-8">
              Meet Marc Harris
            </h2>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              With over 22 years of golfing experience and professional
              coaching certification, Marc Harris delivers premium golf
              instruction focused on real improvement and long-term confidence.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you are a beginner or an experienced golfer,
              MH Golf provides a modern coaching experience designed
              to help players unlock their true potential.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}