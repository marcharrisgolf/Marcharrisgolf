export default function Home() {
  return (
    <main
      style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        backgroundColor: '#000000',
        color: '#ffffff',
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
          padding: '60px 20px',
          background:
            'linear-gradient(180deg, #000000 0%, #07130b 100%)',
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
            boxShadow: '0 20px 60px rgba(34,197,94,0.35)',
          }}
        />

        <h1
          style={{
            fontSize: '84px',
            marginBottom: '20px',
            fontWeight: '900',
            letterSpacing: '-3px',
          }}
        >
          Marc Harris Golf
        </h1>

        <h2
          style={{
            fontSize: '38px',
            color: '#22c55e',
            marginBottom: '35px',
            fontWeight: '700',
          }}
        >
          Elite Worldwide Online Golf Coaching
        </h2>

        <p
          style={{
            maxWidth: '950px',
            fontSize: '24px',
            lineHeight: '1.9',
            color: '#d1d5db',
            marginBottom: '50px',
          }}
        >
          Transform your golf game with elite online coaching,
          professional swing analysis, and personalized training
          designed to improve confidence, consistency, and
          performance on the course.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <a
            href="https://wa.me/84776326949"
            style={{
              padding: '20px 44px',
              backgroundColor: '#22c55e',
              color: 'white',
              borderRadius: '16px',
              textDecoration: 'none',
              fontSize: '22px',
              fontWeight: 'bold',
              boxShadow:
                '0 15px 40px rgba(34,197,94,0.45)',
            }}
          >
            Start Coaching Today
          </a>

          <a
            href="https://zalo.me/0816059110"
            style={{
              padding: '20px 44px',
              backgroundColor: '#111111',
              color: '#ffffff',
              border: '2px solid #22c55e',
              borderRadius: '16px',
              textDecoration: 'none',
              fontSize: '22px',
              fontWeight: 'bold',
            }}
          >
            Message Marc Directly
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        style={{
          padding: '140px 20px',
          backgroundColor: '#0b0b0b',
        }}
      >
        <div
          style={{
            maxWidth: '1300px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '70px',
            alignItems: 'center',
          }}
        >
          <img
            src="/coach.jpg"
            alt="Golf Coach"
            style={{
              width: '100%',
              borderRadius: '32px',
              boxShadow:
                '0 25px 60px rgba(0,0,0,0.5)',
            }}
          />

          <div>
            <h2
              style={{
                fontSize: '62px',
                marginBottom: '30px',
              }}
            >
              Train With Marc Harris
            </h2>

            <p
              style={{
                fontSize: '23px',
                lineHeight: '2',
                color: '#d1d5db',
              }}
            >
              With over 22 years of golfing experience and
              professional coaching knowledge, Marc helps golfers
              around the world improve swing mechanics,
              consistency, confidence, and on-course
              performance through elite personalized coaching.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        style={{
          padding: '140px 20px',
          background:
            'linear-gradient(180deg, #07130b 0%, #000000 100%)',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '64px',
            marginBottom: '70px',
          }}
        >
          Worldwide Coaching Experience
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            maxWidth: '1400px',
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
              alt="Golf Coaching"
              style={{
                width: '100%',
                height: '420px',
                objectFit: 'cover',
                borderRadius: '28px',
                boxShadow:
                  '0 25px 50px rgba(0,0,0,0.5)',
              }}
            />
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        style={{
          padding: '160px 20px',
          backgroundColor: '#000000',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '68px',
            marginBottom: '30px',
          }}
        >
          Start Your Golf Transformation Today
        </h2>

        <p
          style={{
            fontSize: '26px',
            maxWidth: '900px',
            margin: '0 auto 50px auto',
            lineHeight: '1.8',
            color: '#d1d5db',
          }}
        >
          Join golfers around the world already improving their
          game with elite online coaching from Marc Harris.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '25px',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="https://wa.me/84776326949"
            style={{
              backgroundColor: '#22c55e',
              color: '#ffffff',
              padding: '22px 50px',
              borderRadius: '18px',
              textDecoration: 'none',
              fontSize: '24px',
              fontWeight: 'bold',
              boxShadow:
                '0 15px 40px rgba(34,197,94,0.45)',
            }}
          >
            WhatsApp Marc Now
          </a>

          <a
            href="https://zalo.me/0816059110"
            style={{
              backgroundColor: '#111111',
              color: '#ffffff',
              border: '2px solid #22c55e',
              padding: '22px 50px',
              borderRadius: '18px',
              textDecoration: 'none',
              fontSize: '24px',
              fontWeight: 'bold',
            }}
          >
            Message On Zalo
          </a>
        </div>
      </section>
    </main>
  );
}