export default function Home() {
  return (
    <main
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '80px 20px',
        textAlign: 'center',
        backgroundColor: '#f4f4f4',
        minHeight: '100vh',
      }}
    >
      <section>
        <h1
          style={{
            fontSize: '56px',
            marginBottom: '20px',
            color: '#111',
          }}
        >
          Marc Harris Golf
        </h1>

        <h2
          style={{
            fontSize: '32px',
            color: '#22c55e',
            marginBottom: '30px',
          }}
        >
          Worldwide Online Golf Coaching
        </h2>

        <p
          style={{
            maxWidth: '800px',
            margin: '30px auto',
            fontSize: '20px',
            lineHeight: '1.8',
            color: '#333',
          }}
        >
          Personalized online golf coaching, swing analysis,
          coaching packages, and multilingual support for
          golfers around the world.
        </p>
      </section>
    </main>
  );
}