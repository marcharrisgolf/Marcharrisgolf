export default function Home() {
  const reviews = [
    {
      name: "James R.",
      text: "Marc completely transformed my golf swing. My consistency improved dramatically.",
    },
    {
      name: "Daniel K.",
      text: "Professional, patient, and incredibly knowledgeable.",
    },
    {
      name: "Sarah L.",
      text: "Easy to understand and very effective coaching sessions.",
    },
  ];

  const galleryImages = [
    "/IMG_7362.png",
    "/IMG_7359.png",
    "/IMG_7360.png",
    "/IMG_7358.png",
    "/IMG_7357.png",
    "/IMG_7361.png",
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
        {/* MAIN IMAGE */}
        <div
          style={{
            position: "relative",
            width: "520px",
            maxWidth: "95%",
            marginBottom: "50px",
          }}
        >
          <img
            src="/IMG_7364.png"
            alt="Marc Harris Golf"
            style={{
              width: "100%",
              height: "650px",
              objectFit: "cover",
              borderRadius: "28px",
              border: "4px solid #22c55e",
              boxShadow:
                "0 25px 80px rgba(34,197,94,0.35)",
            }}
          />
        </div>

        {/* FREE CALL */}
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

        {/* START BUTTON */}
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

        <h1
          style={{
            fontSize: "78px",
            fontWeight: "900",
            marginBottom: "20px",
          }}
        >
          MH GOLF
        </h1>

        <h2
          style={{
            fontSize: "34px",
            color: "#22c55e",
            marginBottom: "30px",
          }}
        >
          Online Golf Coaching Worldwide
        </h2>

        {/* FLAGS */}
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
          Coach • Beginner to elite golfers.
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
          and personalized online coaching.
        </p>
      </section>

      {/* WHY TRAIN WITH ME */}
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
          Why Train With Me?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            maxWidth: "1400px",
            margin: "80px auto 0 auto",
          }}
        >
          {[
            "Personalized coaching",
            "Professional swing analysis",
            "Beginner to elite coaching",
            "Simple explanations",
            "Direct video support",
            "Long-term improvement",
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

      {/* LEVELS */}
      <section
        style={{
          padding: "140px 20px",
          backgroundColor: "#050505",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "68px",
            marginBottom: "35px",
          }}
        >
          Coaching For Every Golfer
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "35px",
            maxWidth: "1500px",
            margin: "80px auto 0 auto",
          }}
        >
          {[
            {
              title: "Beginners",
              text: "Grip, posture, setup, and confidence.",
            },
            {
              title: "Improving Golfers",
              text: "Better consistency and cleaner strikes.",
            },
            {
              title: "Elite Players",
              text: "Advanced mechanics and sequencing.",
            },
          ].map((level, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#101010",
                padding: "40px",
                borderRadius: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "36px",
                  color: "#22c55e",
                  marginBottom: "20px",
                }}
              >
                {level.title}
              </h3>

              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.8",
                  color: "#d1d5db",
                }}
              >
                {level.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section
        style={{
          padding: "150px 20px",
          background:
            "linear-gradient(180deg, #07130b 0%, #000000 100%)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "72px",
            marginBottom: "70px",
          }}
        >
          Coach In Action
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "35px",
            maxWidth: "1500px",
            margin: "0 auto",
          }}
        >
          {galleryImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Golf"
              style={{
                width: "100%",
                height: "430px",
                objectFit: "cover",
                borderRadius: "25px",
                boxShadow:
                  "0 20px 50px rgba(0,0,0,0.5)",
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}