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
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >

        {/* Background Image */}
        <img
          src="/golf-hero.jpg"
          alt="Golf Hero"
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
            backgroundColor: "rgba(0,0,0,0.55)",
          }}
        ></div>

        {/* Logo */}
        <img
          src="/mh-logo.png"
          alt="MH Golf"
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            width: 90,
            zIndex: 10,
          }}
        />

        {/* Hero Text */}
        <div
          style={{
            position: "relative",
            zIndex: 5,
            maxWidth: "700px",
            padding: "20px",
          }}
        >

          <h1
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              lineHeight: "1.1",
              marginBottom: "25px",
            }}
          >
            Elevate Your <br />
            <span style={{ color: "#d4af37" }}>
              Golf Journey
            </span>
          </h1>

          <p
            style={{
              fontSize: "24px",
              lineHeight: "1.7",
              color: "#ddd",
              marginBottom: "40px",
            }}
          >
            Premium online golf coaching with Marc Harris.
            Improve your swing, confidence, consistency,
            ball striking, and overall understanding of the game
            through personalised international coaching.
          </p>

          <a
            href="https://wa.me/84776326949"
            style={{
              display: "inline-block",
              backgroundColor: "#d4af37",
              color: "black",
              padding: "18px 34px",
              borderRadius: "14px",
              fontWeight: "bold",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Contact Marc On WhatsApp
          </a>

        </div>
      </section>

      {/* WHY TRAIN WITH MARC */}
      <section
        style={{
          padding: "100px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >

        <h2
          style={{
            fontSize: "60px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Why Train <br />
          <span style={{ color: "#d4af37" }}>
            With Marc?
          </span>
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#aaa",
            fontSize: "22px",
            marginBottom: "60px",
          }}
        >
          World-class coaching. Personal attention. Real improvement.
        </p>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "25px",
          }}
        >

          {[
            {
              title: "Personalized Coaching",
              text: "Every golfer is different. Marc builds coaching around your unique swing and movement patterns.",
            },
            {
              title: "Professional Swing Analysis",
              text: "Detailed feedback on mechanics, posture, sequencing, contact, and consistency.",
            },
            {
              title: "Real Improvement",
              text: "Improve confidence, cleaner strikes, better distance control, and consistency.",
            },
            {
              title: "Worldwide Online Coaching",
              text: "Train from anywhere in the world with direct communication and support.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#111",
                border: "1px solid #222",
                borderRadius: "24px",
                padding: "35px",
              }}
            >
              <h3
                style={{
                  fontSize: "28px",
                  marginBottom: "20px",
                  color: "#d4af37",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#ccc",
                  lineHeight: "1.8",
                  fontSize: "18px",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* GOLFERS I HELP */}
      <section
        style={{
          padding: "100px 20px",
          backgroundColor: "#050505",
        }}
      >

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >

          <h2
            style={{
              fontSize: "60px",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Golfers I Help
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#d4af37",
              fontSize: "22px",
              marginBottom: "60px",
            }}
          >
            What You Can Improve At Your Level
          </p>

          <div
            style={{
              display: "grid",
              gap: "30px",
            }}
          >

            {/* BEGINNERS */}
            <div
              style={{
                backgroundColor: "#111",
                borderRadius: "28px",
                padding: "40px",
              }}
            >
              <h3
                style={{
                  fontSize: "40px",
                  color: "#39d353",
                  marginBottom: "25px",
                }}
              >
                Beginners
              </h3>

              <ul
                style={{
                  lineHeight: "2",
                  color: "#ddd",
                  fontSize: "22px",
                }}
              >
                <li>Grip, posture & setup</li>
                <li>Swing fundamentals</li>
                <li>Ball striking & contact</li>
                <li>Confidence on the course</li>
                <li>Understanding the game</li>
              </ul>
            </div>

            {/* IMPROVING */}
            <div
              style={{
                backgroundColor: "#111",
                borderRadius: "28px",
                padding: "40px",
              }}
            >
              <h3
                style={{
                  fontSize: "40px",
                  color: "#39d353",
                  marginBottom: "25px",
                }}
              >
                Improving Golfers
              </h3>

              <ul
                style={{
                  lineHeight: "2",
                  color: "#ddd",
                  fontSize: "22px",
                }}
              >
                <li>Cleaner ball striking</li>
                <li>Consistency & control</li>
                <li>Shot shaping</li>
                <li>Short game & putting</li>
                <li>Course management</li>
              </ul>
            </div>

            {/* ELITE */}
            <div
              style={{
                backgroundColor: "#111",
                borderRadius: "28px",
                padding: "40px",
              }}
            >
              <h3
                style={{
                  fontSize: "40px",
                  color: "#d4af37",
                  marginBottom: "25px",
                }}
              >
                Elite Players
              </h3>

              <ul
                style={{
                  lineHeight: "2",
                  color: "#ddd",
                  fontSize: "22px",
                }}
              >
                <li>Advanced mechanics</li>
                <li>Shot sequencing</li>
                <li>Performance under pressure</li>
                <li>Distance optimization</li>
                <li>Tournament strategy</li>
              </ul>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}