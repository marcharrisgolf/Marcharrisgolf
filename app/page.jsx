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
    "/IMG_7355.png",
    "/IMG_7356.png",
    "/IMG_7357.png",
    "/IMG_7358.png",
    "/IMG_7359.png",
    "/IMG_7360.png",
    "/IMG_7361.png",
    "/IMG_7362.png",
  ];

  return (
    <main
      style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        backgroundColor: "#000000",
        color: "#ffffff",
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
          src="/IMG_7357.png"
          alt="Marc Harris Golf"
          style={{
            width: "320px",
            height: "320px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "7px solid #22c55e",
            marginBottom: "40px",
            boxShadow: "0 20px 60px rgba(34,197,94,0.45)",
          }}
        />

        <h1
          style={{
            fontSize: "88px",
            fontWeight: "900",
            marginBottom: "20px",
            letterSpacing: "-3px",
          }}
        >
          Marc Harris Golf
        </h1>

        <h2
          style={{
            fontSize: "38px",
            color: "#22c55e",
            marginBottom: "30px",
            fontWeight: "700",
          }}
        >
          Elite Worldwide Online Golf Coaching
        </h2>

        <p
          style={{
            maxWidth: "1000px",
            fontSize: "25px",
            lineHeight: "2",
            color: "#d1d5db",
            marginBottom: "50px",
          }}
        >
          Unlock a more powerful, consistent, and confident golf
          game through elite online coaching with Marc Harris.
          Experience personalized swing analysis, professional
          guidance, and premium golf development programs designed
          to help golfers of every level reach their true potential.
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
              color: "#ffffff",
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
              backgroundColor: "#111111",
              border: "2px solid #22c55e",
              color: "#ffffff",
              borderRadius: "18px",
              textDecoration: "none",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            View Facebook Profile
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
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
            gap: "80px",
            alignItems: "center",
          }}
        >
          <img
            src="/IMG_7360.png"
            alt="Golf Coaching"
            style={{
              width: "100%",
              borderRadius: "35px",
              boxShadow: "0 25px 60px rgba(0,0,0,0.55)",
            }}
          />

          <div>
            <h2
              style={{
                fontSize: "68px",
                marginBottom: "35px",
              }}
            >
              Train With Marc Harris
            </h2>

            <p
              style={{
                fontSize: "24px",
                lineHeight: "2",
                color: "#d1d5db",
                marginBottom: "25px",
              }}
            >
              With over 22 years of golfing experience and years
              of professional coaching knowledge, Marc Harris
              provides elite online golf coaching designed to help
              players improve every aspect of their game.
            </p>

            <p
              style={{
                fontSize: "24px",
                lineHeight: "2",
                color: "#d1d5db",
              }}
            >
              Through personalized swing analysis, clear technical
              instruction, and confidence-building coaching,
              golfers worldwide are developing stronger swings,
              lower scores, and greater consistency on the course.
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
              alt="Golf Coaching"
              style={{
                width: "100%",
                height: "430px",
                objectFit: "cover",
                borderRadius: "30px",
                boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
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

      {/* CONTACT SECTION */}
      <section
        style={{
          padding: "170px 20px",
          backgroundColor: "#000000",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "76px",
            marginBottom: "35px",
          }}
        >
          Ready To Transform Your Golf Game?
        </h2>

        <p
          style={{
            fontSize: "28px",
            maxWidth: "950px",
            margin: "0 auto 60px auto",
            lineHeight: "2",
            color: "#d1d5db",
          }}
        >
          Join golfers around the world improving their swing,
          confidence, and on-course performance through elite
          online coaching with Marc Harris.
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
              color: "#ffffff",
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
              backgroundColor: "#111111",
              color: "#ffffff",
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