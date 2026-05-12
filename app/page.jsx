"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
          includedLanguages:
            "af,sq,am,ar,hy,az,eu,be,bn,bs,bg,ca,ceb,ny,zh-CN,zh-TW,co,hr,cs,da,nl,en,eo,et,tl,fi,fr,fy,gl,ka,de,el,gu,ht,ha,haw,he,hi,hmn,hu,is,ig,id,ga,it,ja,jw,kn,kk,km,rw,ko,ku,ky,lo,la,lv,lt,lb,mk,mg,ms,ml,mt,mi,mr,mn,my,ne,no,or,ps,fa,pl,pt,pa,ro,ru,sm,gd,sr,st,sn,sd,si,sk,sl,so,es,su,sw,sv,tg,ta,tt,te,th,tr,tk,uk,ur,ug,uz,vi,cy,xh,yi,yo,zu",
          layout:
            window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );

      setTimeout(() => {
        const gadget = document.querySelector(".goog-te-gadget");
        if (gadget) {
          gadget.style.color = "transparent";
          gadget.style.fontSize = "0px";
        }

        const select = document.querySelector(".goog-te-combo");
        if (select) {
          select.style.background = "#111";
          select.style.color = "#fff";
          select.style.border = "2px solid #22c55e";
          select.style.borderRadius = "10px";
          select.style.padding = "8px 12px";
          select.style.fontSize = "14px";
          select.style.fontFamily = "Arial, sans-serif";
          select.style.outline = "none";
          select.style.cursor = "pointer";
        }
      }, 1000);
    };
  }, []);

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
      {/* TRANSLATE BUTTON */}
      <div
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: "9999",
          backgroundColor: "#111",
          padding: "14px",
          borderRadius: "16px",
          border: "2px solid #22c55e",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "15px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Translate
        </div>

        <div id="google_translate_element"></div>
      </div>

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
      </section>
    </main>
  );
}