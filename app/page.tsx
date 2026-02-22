"use client";

import { useState } from "react";

export default function Home() {
  const [duration, setDuration] = useState("");

  const prices: any = { "3": 320, "4": 420, "6": 650 };
  const deposit = duration ? (prices[duration] * 0.3).toFixed(0) : "0";

  const handleReservation = () => {
    const message = `Hello Captain 👋

I would like to book a private speed boat tour.

Duration: ${duration} hours
Deposit: €${deposit}

Please confirm availability.`;

    window.open(
      `https://wa.me/905000000000?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", fontFamily: "sans-serif" }}>

      {/* HERO */}
      <section style={{
        height: "100vh",
        backgroundImage: "url('/speedboat-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative"
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.7)"
        }} />

        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "60px", color: "#d4af37" }}>
            Captain Cave Yachts
          </h1>
          <p style={{ fontSize: "22px", marginTop: "20px" }}>
            Luxury Private Speed Boat Charter in Ölüdeniz & Fethiye
          </p>
        </div>
      </section>

      {/* TOUR DESCRIPTION SEO */}
      <section style={{ padding: "80px 20px", maxWidth: "900px", margin: "auto" }}>
        <h2 style={{ color: "#d4af37" }}>Saint Nicholas Island Tour</h2>
        <p>
          Discover the legendary Saint Nicholas Island on a private luxury speed boat tour.
          Explore crystal turquoise waters, swim in hidden bays, and visit ancient ruins.
          Perfect for couples, families and VIP guests seeking privacy in Ölüdeniz.
        </p>

        <h2 style={{ color: "#d4af37", marginTop: "40px" }}>Butterfly Valley & Blue Cave</h2>
        <p>
          Experience the breathtaking Butterfly Valley and the famous Blue Cave.
          Enjoy swimming breaks, snorkeling opportunities and unforgettable coastal views
          along the Mediterranean shoreline.
        </p>

        <h2 style={{ color: "#d4af37", marginTop: "40px" }}>Full Coast Private Cruise</h2>
        <p>
          Our 6-hour full coast experience includes multiple swim stops,
          hidden coves and panoramic sightseeing of Fethiye's most beautiful bays.
          A fully private luxury charter with professional captain.
        </p>
      </section>

      {/* PACKAGES */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ color: "#d4af37" }}>Choose Your Experience</h2>

        <div style={{ display: "flex", gap: "30px", justifyContent: "center", flexWrap: "wrap", marginTop: "40px" }}>
          {[
            { title: "3 Hours – Blue Escape", value: "3", price: "€320" },
            { title: "4 Hours – Explorer Tour", value: "4", price: "€420" },
            { title: "6 Hours – Full Coast Experience", value: "6", price: "€650" }
          ].map((pkg) => (
            <div key={pkg.value} style={{
              background: "#111",
              border: "1px solid #d4af37",
              borderRadius: "20px",
              padding: "30px",
              width: "300px"
            }}>
              <h3 style={{ color: "#d4af37" }}>{pkg.title}</h3>
              <p style={{ fontSize: "24px", margin: "20px 0" }}>{pkg.price}</p>
              <button
                onClick={() => setDuration(pkg.value)}
                style={{
                  padding: "10px 20px",
                  background: "#d4af37",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer"
                }}
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section style={{ padding: "60px 20px", textAlign: "center", background: "#111" }}>
        <h2 style={{ color: "#d4af37" }}>
          30% Deposit: €{deposit}
        </h2>

        <button
          onClick={handleReservation}
          style={{
            marginTop: "20px",
            padding: "15px 40px",
            background: "#d4af37",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontSize: "18px"
          }}
        >
          Reserve via WhatsApp
        </button>
      </section>

      {/* MEETING POINT MAP */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ color: "#d4af37" }}>Meeting Point – Ölüdeniz Beach</h2>

        <iframe
          src="https://www.google.com/maps?q=Oludeniz%20Beach&output=embed"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "20px", marginTop: "20px" }}
          loading="lazy"
        ></iframe>
      </section>

      {/* WECHAT */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ color: "#d4af37" }}>Contact via WeChat</h2>
        <p>WeChat ID: <strong>captaincaveyachts</strong></p>
        <img
          src="/wechat-qr.jpg"
          alt="WeChat QR"
          style={{ width: "180px", borderRadius: "16px", marginTop: "20px" }}
        />
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/905000000000"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25D366",
          color: "#fff",
          padding: "15px 18px",
          borderRadius: "50%",
          fontSize: "20px",
          textDecoration: "none"
        }}
      >
        💬
      </a>

    </div>
  );
}