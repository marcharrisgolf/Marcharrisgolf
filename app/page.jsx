export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
          overflow: "hidden",
        }}
      >
        {/* Background */}
        <img
          src="/golf-hero.jpg"
          alt="Golf"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.45,
          }}
        />

        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        ></div>

        {/* Logo */}
        <img
          src="/mh-logo.png"
          alt="MH Golf"
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "90px",
            zIndex: 10,
          }}
        />

        {/* Hero Content */}
        <div
          style={{
            position: "relative",
            zIndex: 5,
            maxWidth: "900px",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            Elevate Your Golf Journey
          </h1>

          <p
            style={{
              fontSize: "24px",
              lineHeight: "1.7",
              color: "#d1d5db",
              marginBottom: "40px",
            }}
          >
            Premium online golf coaching with Marc Harris.
            Improve your swing, confidence, consistency,
            ball striking, and overall understanding
            of the game through personalised international coaching.
          </p>

          <a
            href="https://wa.me/84776326949"
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "18px 36px",
              borderRadius: "14px",
              fontWeight: "bold",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Contact Marc On WhatsApp
          </a>
        </div>
      </section>

      {/* WHY TRAIN */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "64px",
            marginBottom: "60px",
            fontWeight: "bold",
          }}
        >
          Why Train With Marc?
        </h2>

        <div
          style={{
            display: "grid",
            gap: "30px",
          }}
        >
          <div
            style={{
              backgroundColor: "#111",
              padding: "40px",
              borderRadius: "24px",
            }}
          >
            <h3 style={{ fontSize: "36px", marginBottom: "20px" }}>
              Personalized Coaching
            </h3>

            <p style={{ fontSize: "22px", color: "#d1d5db" }}>
              Every golfer has a unique swing. Marc focuses on helping you
              improve based on your natural movement patterns rather than
              forcing unrealistic positions.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#111",
              padding: "40px",
              borderRadius: "24px",
            }}
          >
            <h3 style={{ fontSize: "36px", marginBottom: "20px" }}>
              Professional Swing Analysis
            </h3>

            <p style={{ fontSize: "22px", color: "#d1d5db" }}>
              Receive detailed feedback on mechanics, sequencing,
              posture, club path, contact, and consistency
              to unlock real improvement.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#111",
              padding: "40px",
              borderRadius: "24px",
            }}
          >
            <h3 style={{ fontSize: "36px", marginBottom: "20px" }}>
              Golfers Marc Helps
            </h3>

            <p
              style={{
                fontSize: "28px",
                color: "#22c55e",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Beginners
            </p>

            <p style={{ fontSize: "22px", color: "#d1d5db" }}>
              Grip, setup, posture, confidence, contact, and understanding
              the fundamentals of the game.
            </p>

            <br />

            <p
              style={{
                fontSize: "28px",
                color: "#22c55e",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Improving Golfers
            </p>

            <p style={{ fontSize: "22px", color: "#d1d5db" }}>
              Cleaner ball striking, consistency, shot shaping,
              distance control, and lower scores.
            </p>

            <br />

            <p
              style={{
                fontSize: "28px",
                color: "#22c55e",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Elite Players
            </p>

            <p style={{ fontSize: "22px", color: "#d1d5db" }}>
              Advanced mechanics, sequencing, performance training,
              tournament preparation, and scoring optimisation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}