export default function Home() {
  return (
    <main
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#000',
        color: 'white',
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
            'linear-gradient(to bottom, #000000, #07130b)',
        }}
      >
        <img
          src="/hero.jpg"
          alt="Marc Harris Golf"
          style={{
            width: '280px',
            height: '280px',
            objectFit: 'cover',
            borderRadius: '50%',
            border: '6px solid #22c55e',
            marginBottom: '40px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          }}
        />

        <h1
          style={{
            fontSize: '72px',
            marginBottom: '20px',
            fontWeight: '900',
          }}
        >
          Marc Harris Golf
        </h1>

        <h2
          style={{
            fontSize: '34px',
            color: '#22c55e',
            marginBottom: '30px',
          }}
        >
          Worldwide Online Golf Coaching
        </h2>

        <p
          style={{
            maxWidth: '900px',
            fontSize: '22px',
            lineHeight: '1.8',
            color: '#d1d5db',
          }}
        >
          Professional online golf coaching, swing analysis,
          elite development programs, and worldwide coaching
          support from certified golf coach Marc Harris.
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section
        style={{
          padding: '120px 20px',
          backgroundColor: '#0f0f0f',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '50px',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <img
            src="/coach.jpg"
            alt="Golf Coach"
            style={{
              width: '100%',
              borderRadius: '30px',
              boxShadow:
                '0 20px 40px rgba(0,0,0,0.5)',
            }}
          />

          <div>
            <h2
              style={{
                fontSize: '56px',
                marginBottom: '30px',
              }}
            >
              About Marc Harris
            </h2>

            <p
              style={{
                fontSize: '22px',
                lineHeight: '1.9',
                color: '#d1d5db',
              }}
            >
              Marc Harris has over 22 years of golf experience
              and provides elite online coaching worldwide.
              His coaching focuses on improving consistency,
              swing mechanics, confidence, and overall golf
              performance.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        style={{
          padding: '120px 20px',
          backgroundColor: '#07130b',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '58px',
            marginBottom: '60px',
          }}
        >
          Coaching Gallery
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            maxWidth: '1300px',
            margin: '0 auto',
          }}
        >
          {[
            '/student.jpg',
            '/swing.jpg',
            '/range.jpg',
            '/putting.jpg',
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Golf"
              style={{
                width: '100%',
                height: '380px',
                objectFit: 'cover',
                borderRadius: '24px',
                boxShadow:
                  '0 20px 40px rgba(0,0,0,0.4)',
              }}
            />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{
          padding: '120px 20px',
          textAlign: 'center',
          backgroundColor: '#000',
        }}
      >
        <h2
          style={{
            fontSize: '58px',
            marginBottom: '30px',
          }}
        >
          Contact Marc Harris
        </h2>

        <p style={{ fontSize: '24px' }}>
          WhatsApp: 0776326949
        </p>

        <p style={{ fontSize: '24px' }}>
          Zalo: 0816059110
        </p>
      </section>
    </main>
  );
}