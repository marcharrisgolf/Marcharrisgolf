export default function Home() {
  const reviews = [
    {
      name: "James R.",
      text: "Marc completely transformed my golf swing. My consistency and confidence improved dramatically within weeks.",
    },
    {
      name: "Daniel K.",
      text: "Professional, patient, and incredibly knowledgeable. The best online golf coaching I’ve experienced.",
    },
    {
      name: "Sarah L.",
      text: "Marc explains the golf swing in a way that is simple and easy to understand. Highly recommended.",
    },
    {
      name: "Michael T.",
      text: "The online coaching sessions were elite quality. My ball striking has improved massively.",
    },
    {
      name: "Chris D.",
      text: "Excellent communication, detailed swing analysis, and real results on the course.",
    },
    {
      name: "Kevin P.",
      text: "I lowered my scores and gained so much confidence after working with Marc.",
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
      {/* HERO SECTION */}
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
            fontSize: "36px",
            color: "#22c55e",
            marginBottom: "30px",
          }}
        >
          Elite Worldwide Online Golf Coaching
        </h2>

        <p
          style={{
            maxWidth: "1000px",
            fontSize: "24px",
            lineHeight: "2",
            color: "#d1d5db",
            marginBottom: "50px",
          }}
        >
          Experience elite-level golf coaching designed to
          transform your swing, sharpen your confidence, and
          unlock your full golfing potential. With over 22 years
          of golfing experience and professional coaching
          expertise, Marc Harris helps players around the world
          improve consistency, ball striking, and on-course
          performance through premium online coaching.
        </p>

        <p
          style={{
            maxWidth: "950px",
            fontSize: "22px",
            lineHeight: "2",
            color: "#9ca3af",
            marginBottom: "60px",
          }}
        >
          Whether you are a beginner learning the fundamentals
          or an experienced golfer looking for lower scores and
          greater consistency, every lesson is personalized to
          help you achieve real results.
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
            Start Coaching Today
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

      {/* ABOUT */}
      <section
        style={{
          padding: "140px 20px",
          backgroundColor: "#0a0a0a",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "70px",
            alignItems: "center",
          }}
        >
          <img
            src="/IMG_7362.png"
            alt="Golf Coaching"
            style={{
              width: "100%",
              borderRadius: "30px",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.5)",
            }}
          />

          <div>
            <h2
              style={{
                fontSize: "64px",
                marginBottom: "35px",
              }}
            >
              Professional Golf Coaching
            </h2>

            <p
              style={{
                fontSize: "24px",
                lineHeight: "2",
                color: "#d1d5db",
                marginBottom: "25px",
              }}
            >
              Marc Harris provides personalized online coaching
              designed to build confidence, improve mechanics,
              and create long-term golfing success.
            </p>

            <p
              style={{
                fontSize: "24px",
                lineHeight: "2",
                color: "#d1d5db",
              }}
            >
              Every swing analysis and coaching session is built
              around helping golfers achieve smoother swings,
              better consistency, and lower scores.
            </p>
          </div>
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
          Coaching Gallery
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
                boxShadow:
                  "0 20px 50px rgba(0,0,0,0.45)",
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

      {/* CONTACT */}
      <section
        style={{
          padding: "170px 20px",
          backgroundColor: "#000",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "72px",
            marginBottom: "30px",
          }}
        >
          Ready To Elevate Your Golf Game?
        </h2>

        <p
          style={{
            fontSize: "28px",
            maxWidth: "900px",
            margin: "0 auto 60px auto",
            lineHeight: "2",
            color: "#d1d5db",
          }}
        >
          Join golfers from around the world improving their
          swing, confidence, consistency, and performance through
          elite online golf coaching with Marc Harris.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://wa.me/84776326949"
            style={{
              backgroundColor: "#22c55e",
              color: "#fff",
              padding: "24px 55px",
              borderRadius: "20px",
              textDecoration: "none",
              fontSize: "26px",
              fontWeight: "bold",
              boxShadow:
                "0 15px 45px rgba(34,197,94,0.45)",
            }}
          >
            WhatsApp Marc Now
          </a>

          <a
            href="https://zalo.me/0816059110"
            style={{
              backgroundColor: "#111",
              color: "#fff",
              border: "2px solid #22c55e",
              padding: "24px 55px",
              borderRadius: "20px",
              textDecoration: "none",
              fontSize: "26px",
              fontWeight: "bold",
            }}
          >
            Message On Zalo
          </a>
        </div>
      </section>
    </main>
  );
}