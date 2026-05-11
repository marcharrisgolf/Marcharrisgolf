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
            marginBottom: "35px",
          }}
        >
          FREE 10-Minute Online Video Call
        </div>

        <h1
          style={{
            fontSize: "78px",
            fontWeight: "900",
            marginBottom: "20px",
          }}
        >
          Marc Harris Golf
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

        <div
          style={{
            display: "flex",
            gap: "25px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="https://wa.me/84776326949"
            style={{
              padding: "22px 50px",
              backgroundColor: "#22c55e",
              color: "#fff",
              borderRadius: "18px",
              textDecoration: "none",
              fontSize: "24px",
              fontWeight: "bold",
              boxShadow:
                "0 15px 40px rgba(34,197,94,0.45)",
            }}
          >
            Start Lessons Today
          </a>

          <a
            href="https://facebook.com/"
            style={{
              padding: "22px 50px",
              border: "2px solid #22c55e",
              color: "#fff",
              borderRadius: "18px",
              textDecoration: "none",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            Visit Facebook
          </a>
        </div>
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

        <p
          style={{
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto 80px auto",
            fontSize: "22px",
            lineHeight: "1.8",
            color: "#d1d5db",
          }}
        >
          Simple online coaching through video calls and swing
          analysis.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "35px",
            maxWidth: "1500px",
            margin: "0 auto",
          }}
        >
          {[
            {
              title: "Beginners",
              text: "Grip, posture, setup, and confidence from day one.",
            },
            {
              title: "Improving Golfers",
              text: "Better consistency, timing, and cleaner ball striking.",
            },
            {
              title: "Elite Players",
              text: "Advanced mechanics, sequencing, and performance coaching.",
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
                  marginBottom: "30px",
                }}
              >
                {level.text}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="https://wa.me/84776326949"
                  style={{
                    backgroundColor: "#22c55e",
                    color: "#fff",
                    padding: "14px 24px",
                    borderRadius: "14px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  WhatsApp
                </a>

                <a
                  href="https://facebook.com/"
                  style={{
                    border: "2px solid #22c55e",
                    color: "#fff",
                    padding: "14px 24px",
                    borderRadius: "14px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Facebook
                </a>
              </div>
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

      {/* REVIEWS */}
      <section
        style={{
          padding: "150px 20px",
          backgroundColor: "#050505",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "72px",
            marginBottom: "80px",
          }}
        >
          Client Reviews
        </h2>

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "35px",
          }}
        >
          {reviews.map((review, index) => (
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
                  fontSize: "28px",
                  marginBottom: "20px",
                  color: "#22c55e",
                }}
              >
                {review.name}
              </h3>

              <p
                style={{
                  fontSize: "21px",
                  lineHeight: "1.9",
                  color: "#d1d5db",
                }}
              >
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section
        style={{
          padding: "150px 20px",
          backgroundColor: "#000",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "72px",
            marginBottom: "80px",
          }}
        >
          Coaching Packages
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "35px",
            maxWidth: "1500px",
            margin: "0 auto",
          }}
        >
          {[
            {
              title: "Swing Analysis",
              price: "$60",
              text: "Detailed online swing breakdown and feedback.",
            },
            {
              title: "Single Online Lesson",
              price: "$80",
              text: "30-minute live online coaching session.",
            },
            {
              title: "10 Session Package",
              price: "$700",
              text: "Long-term coaching and development plan.",
            },
            {
              title: "Monthly Coaching",
              price: "$500",
              text: "Monthly support, video calls, and swing analysis.",
            },
          ].map((pkg, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#101010",
                padding: "45px",
                borderRadius: "28px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "38px",
                  color: "#22c55e",
                  marginBottom: "20px",
                }}
              >
                {pkg.title}
              </h3>

              <p
                style={{
                  fontSize: "56px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                {pkg.price}
              </p>

              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.8",
                  color: "#d1d5db",
                }}
              >
                {pkg.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}