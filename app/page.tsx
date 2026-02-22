"use client";

import { useState } from "react";

export default function Home() {
  const [duration, setDuration] = useState("");
  const prices: any = { "3": 320, "4": 420, "6": 650 };
  const deposit = duration ? (prices[duration] * 0.3).toFixed(0) : "0";

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", fontFamily: "sans-serif" }}>

      {/* HERO */}
      <section
        style={{
          height: "100vh",
          backgroundImage: "url('/speedboat-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative"
        }}
      >
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.7)"
        }} />

        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "60px", color: "#d4af37", marginBottom: "20px" }}>
            Captain Cave Yachts
          </h1>
          <p style={{ fontSize: "22px", marginBottom: "30px" }}>
            Ultra Luxury Private Speed Boat Charter in Ölüdeniz & Fethiye
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ color: "#d4af37", fontSize: "36px", marginBottom: "40px" }}>
          Choose Your Experience
        </h2>

        <div style={{ display: "flex", gap: "30px", justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { title: "3 Hours – Blue Escape", value: "3", price: "€320" },
            { title: "4 Hours – Explorer Tour", value: "4", price: "€420" },
            { title: "6 Hours – Full Coast Experience", value: "6", price: "€650" }
          ].map((pkg) => (
            <div
              key={pkg.value}
              style={{
                background: "#111",
                border: "1px solid #d4af37",
                borderRadius: "20px",
                padding: "30px",
                width: "300px"
              }}
            >
              <h3 style={{ color: "#d4af37" }}>{pkg.title}</h3>
              <p style={{ fontSize: "24px", margin: "20px 0" }}>{pkg.price}</p>
              <button
                onClick={() => setDuration(pkg.value)}
                style={{
                  padding: "12px 25px",
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
        <h2 style={{ color: "#d4af37", marginBottom: "20px" }}>
          30% Deposit: €{deposit}
        </h2>
        <button
          style={{
            padding: "15px 40px",
            background: "#d4af37",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontSize: "18px"
          }}
        >
          Pay Deposit
        </button>
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

      {/* CONTACT BAR */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          background: "#000",
          borderTop: "1px solid #d4af37",
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          padding: "10px"
        }}
      >
        <a href="https://wa.me/905000000000" style={{ color: "#25D366" }}>WhatsApp</a>
        <span style={{ color: "#d4af37" }}>WeChat: captaincaveyachts</span>
        <a href="tel:+905000000000" style={{ color: "#fff" }}>Call Now</a>
      </div>

    </div>
  );
}