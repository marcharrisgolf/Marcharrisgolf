export default function Home() {
  return (
    <main
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f5f5f5',
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
          padding: '60px 20px',
          background:
            'linear-gradient(180deg, #ffffff 0%, #e9f9ef 100%)',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=1200&auto=format&fit=crop"
          alt="Golf Coaching"
          style={{
            width: '220px',
            height: '220px',
            objectFit: 'cover',
            borderRadius: '50%',
            border: '6px solid #22c55e',
            marginBottom: '40px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          }}
        />

        <h1
          style={{
            fontSize: '72px',
            marginBottom: '20px',
            fontWeight: '900',
            letterSpacing: '-2px',
          }}
        >
          Marc Harris Golf
        </h1>

        <h2
          style={{
            fontSize: '36px',
            color: '#22c55e',
            marginBottom: '35px',
            maxWidth: '900px',
          }}
        >
          Elite Worldwide Online Golf Coaching
        </h2>

        <p
          style={{
            maxWidth: '900px',
            fontSize: '24px',
            lineHeight: '1.9',
            marginBottom: '50px',
            color: '#333',
          }}
        >
          Professional golf coaching designed to improve your swing,
          consistency, confidence, and on-course performance.
          Personalized coaching programs available worldwide.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <button
            style={{
              padding: '18px 42px',
              backgroundColor: '#22c55e',
              color: 'white',
              border: 'none',
              borderRadius: '14px',
              fontSize: '20px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(34,197,94,0.35)',
            }}
          >
            Start Coaching
          </button>

          <button
            style={{
              padding: '18px 42px',
              backgroundColor: 'white',
              color: '#111',
              border: '2px solid #111',
              borderRadius: '14px',
              fontSize: '20px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            View Packages
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section
        style={{
          padding: '120px 20px',
          backgroundColor: 'white',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop"
            alt="Golf"
            style={{
              width: '100%',
              borderRadius: '30px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
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
                color: '#333',
              }}
            >
              Marc Harris is a certified golf coach with over 22 years
              of golfing experience. His coaching combines technical
              instruction, swing analysis, confidence development,
              and real on-course improvement strategies.
            </p>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section
        style={{
          padding: '120px 20px',
          backgroundColor: '#f0fdf4',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '58px',
            marginBottom: '70px',
          }}
        >
          Coaching Packages
        </h2>

        <div
          style={{
            maxWidth: '1300px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '35px',
          }}
        >
          {[
            {
              title: 'Starter',
              price: '$49',
              items: ['1 Swing Analysis', 'Video Feedback', 'Practice Drills'],
            },
            {
              title: 'Professional',
              price: '$149',
              items: ['4 Coaching Sessions', 'Personal Training Plan', 'Priority Support'],
            },
            {
              title: 'Elite Coaching',
              price: '$399',
              items: ['Monthly Coaching', 'Unlimited Reviews', 'Elite Development'],
            },
          ].map((pkg, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '28px',
                padding: '50px 40px',
                textAlign: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
              }}
            >
              <h3 style={{ fontSize: '38px', marginBottom: '20px' }}>
                {pkg.title}
              </h3>

              <p
                style={{
                  fontSize: '32px',
                  color: '#22c55e',
                  fontWeight: 'bold',
                  marginBottom: '30px',
                }}
              >
                {pkg.price}
              </p>

              {pkg.items.map((item, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: '20px',
                    marginBottom: '15px',
                    color: '#444',
                  }}
                >
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{
          padding: '120px 20px',
          backgroundColor: '#111',
          color: 'white',
          textAlign: 'center',
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

        <p style={{ fontSize: '24px', marginBottom: '18px' }}>
          WhatsApp: 0776326949
        </p>

        <p style={{ fontSize: '24px', marginBottom: '18px' }}>
          Zalo: 0816059110
        </p>

        <p style={{ fontSize: '24px', color: '#22c55e' }}>
          International Online Coaching Available
        </p>
      </section>
    </main>
  )
}