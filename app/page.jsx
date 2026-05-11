export default function Home() {
  return (
    <main
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
        color: '#111',
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '40px 20px',
          background:
            'linear-gradient(to bottom, #ffffff, #dff7e5)',
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Golf_ball_2.jpg"
          alt="Golf"
          style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '30px',
            border: '5px solid #22c55e',
          }}
        />

        <h1
          style={{
            fontSize: '64px',
            marginBottom: '20px',
            fontWeight: 'bold',
          }}
        >
          Marc Harris Golf
        </h1>

        <h2
          style={{
            fontSize: '36px',
            color: '#22c55e',
            marginBottom: '30px',
          }}
        >
          Worldwide Online Golf Coaching
        </h2>

        <p
          style={{
            maxWidth: '850px',
            fontSize: '22px',
            lineHeight: '1.8',
            marginBottom: '40px',
          }}
        >
          Professional golf coaching from certified coach Marc Harris.
          Personalized swing analysis, online coaching packages,
          beginner to advanced instruction, and worldwide support for golfers.
        </p>

        <button
          style={{
            padding: '18px 40px',
            fontSize: '20px',
            backgroundColor: '#22c55e',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Book Coaching
        </button>
      </section>

      {/* ABOUT SECTION */}
      <section
        style={{
          padding: '100px 20px',
          backgroundColor: 'white',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '48px',
            marginBottom: '30px',
          }}
        >
          About Marc Harris
        </h2>

        <p
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            fontSize: '22px',
            lineHeight: '1.8',
          }}
        >
          With over 22 years of golfing experience and years of coaching,
          Marc Harris helps golfers improve their swing, confidence,
          consistency, and understanding of the game.
          
          Lessons are available online worldwide with personalized coaching plans.
        </p>
      </section>

      {/* COACHING PACKAGES */}
      <section
        style={{
          padding: '100px 20px',
          backgroundColor: '#f0fdf4',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '48px',
            marginBottom: '60px',
          }}
        >
          Coaching Packages
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '40px',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            }}
          >
            <h3 style={{ fontSize: '32px' }}>Starter</h3>
            <p style={{ fontSize: '20px', color: '#22c55e' }}>$49</p>
            <p>1 swing analysis</p>
            <p>Personalized feedback</p>
            <p>Improvement drills</p>
          </div>

          <div
            style={{
              backgroundColor: 'white',
              padding: '40px',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            }}
          >
            <h3 style={{ fontSize: '32px' }}>Professional</h3>
            <p style={{ fontSize: '20px', color: '#22c55e' }}>$149</p>
            <p>4 coaching sessions</p>
            <p>Full swing review</p>
            <p>Training plan</p>
          </div>

          <div
            style={{
              backgroundColor: 'white',
              padding: '40px',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            }}
          >
            <h3 style={{ fontSize: '32px' }}>Elite Coaching</h3>
            <p style={{ fontSize: '20px', color: '#22c55e' }}>$399</p>
            <p>Monthly coaching</p>
            <p>Unlimited swing reviews</p>
            <p>Priority support</p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        style={{
          padding: '100px 20px',
          textAlign: 'center',
          backgroundColor: '#111',
          color: 'white',
        }}
      >
        <h2 style={{ fontSize: '48px', marginBottom: '20px' }}>
          Contact Marc Harris
        </h2>

        <p style={{ fontSize: '22px', marginBottom: '20px' }}>
          WhatsApp: 0776326949
        </p>

        <p style={{ fontSize: '22px', marginBottom: '20px' }}>
          Zalo: 0816059110
        </p>

        <p style={{ fontSize: '22px' }}>
          Worldwide Online Golf Coaching Available
        </p>
      </section>
    </main>
  )
}