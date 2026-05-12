export default function Home() {
  const reviews = [
    {
      name: "James R.",
      text: "Marc completely transformed my golf swing. My consistency improved dramatically.",
    },
    {
      name: "Daniel K.",
      text: "Professional, patient, and incredibly knowledgeable. Excellent coaching.",
    },
    {
      name: "Sarah L.",
      text: "Easy to understand and very effective coaching sessions.",
    },
    {
      name: "Michael T.",
      text: "My ball striking improved massively after working with Marc.",
    },
  ];

  const galleryImages = [
    "/IMG_7364.png",
    "/IMG_7362.png",
    "/IMG_7359.png",
    "/IMG_7360.png",
    "/IMG_7358.png",
    "/IMG_7357.png",
    "/IMG_7361.png",
    "/IMG_7356.png",
  ];

  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "80px 20px",
          background:
            "linear-gradient(180deg, #000000 0%, #07130b 100%)",
        }}
      >
        {/* TOP HEADING */}
        <h1
          style={{
            fontSize: "84px",
            fontWeight: "900",
            marginBottom: "45px",
            textTransform: "uppercase",
            letterSpacing: "3px",
            color: "#ffffff",
            textShadow:
              "0 0 25px rgba(34,197,94,0.35)",
          }}
        >
          Marc Harris Golf Coaching
        </h1>

        <img
          src="/IMG_7364.png"
          alt="Marc Harris Golf"
          style={{
            width: "520px",
            maxWidth: "95%",
            height: "650px",
            objectFit: "cover",
            borderRadius: "28px",
            border: "4px solid #22c55e",
            marginBottom: "50px",
            boxShadow:
              "0 25px 80px rgba(34,197,94,0.35)",
          }}
        />

        <div
          style={{
            backgroundColor: "#22c55e",
            color: "#000",
            padding: "14px 28px",
            borderRadius: "999px",
            fontWeight: "bold",
            fontSize: "20px",
            marginBottom: "25px",
          }}
        >
          FREE 10-Minute Online Video Call
        </div>

        <a
          href="https://wa.me/84776326949"
          style={{
            padding: "22px 60px",
            backgroundColor: "#22c55e",
            color: "#fff",
            borderRadius: "18px",
            textDecoration: "none",
            fontSize: "26px",
            fontWeight: "bold",
            boxShadow:
              "0 15px 40px rgba(34,197,94,0.45)",
            display: "inline-block",
            marginBottom: "45px",
          }}
        >
          Start
        </a>

        <h2
          style={{
            fontSize: "34px",
            color: "#22c55e",
            marginBottom: "30px",
          }}
        >
          Online Golf Coaching Worldwide
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "35px",
            flexWrap: "wrap",
          }}
        >
          <img
            src="https://flagcdn.com/w320/gb.png"
            alt="British Flag"
            style={{
              width: "90px",
              borderRadius: "12px",
            }}
          />

          <img
            src="https://flagcdn.com/w320/za.png"
            alt="South African Flag"
            style={{
              width: "90px",
              borderRadius: "12px",
            }}
          />
        </div>

        <p
          style={{
            maxWidth: "900px",
            fontSize: "24px",
            lineHeight: "1.8",
            color: "#d1d5db",
            marginBottom: "25px",
          }}
        >
          22+ years playing experience • Certified GSA Level 1
          Coach • Coaching beginners to elite golfers.
        </p>

        <p
          style={{
            maxWidth: "900px",
            fontSize: "22px",
            lineHeight: "1.8",
            color: "#9ca3af",
            marginBottom: "55px",
          }}
        >
          Live video calls, swing analysis, direct feedback,
          lesson planning, and personal coaching online.
        </p>
      </section>

      {/* WHY CHOOSE MARC */}
      <section
        style={{
          padding: "140px 20px",
          backgroundColor: "#000",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "68px",
            marginBottom: "35px",
          }}
        >
          Why Train With Marc Harris?
        </h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: "1000px",
            margin: "0 auto 80px auto",
            fontSize: "24px",
            lineHeight: "1.9",
            color: "#d1d5db",
          }}
        >
          Personalized coaching built around your individual
          swing — not generic lessons copied from the internet.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {[
            "Personalized coaching",
            "Direct video support",
            "Beginner to elite coaching",
            "Professional swing analysis",
            "Simple explanations",
            "Long-term improvement plans",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#101010",
                padding: "35px",
                borderRadius: "24px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "22px",
                  lineHeight: "1.8",
                  color: "#d1d5db",
                  fontWeight: "bold",
                }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}