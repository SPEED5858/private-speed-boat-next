'use client'

import { useState } from 'react'

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ru'>('en')
  const isRU = lang === 'ru'

  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "white", backgroundColor: "#0c0c0c" }}>

      {/* NAV */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
        alignItems: "center"
      }}>
        <h2 style={{ letterSpacing: "2px" }}>Captain Cave Yachts</h2>

        <div>
          <button onClick={() => setLang('en')} style={{ marginRight: 10 }}>EN</button>
          <button onClick={() => setLang('ru')}>RU</button>
        </div>
      </div>

      {/* HERO */}
      <section style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e') center/cover"
      }}>

        {isRU ? (
          <>
            <h1 style={{ fontSize: "48px", marginBottom: 20 }}>
              Роскошная аренда яхты в Фетхие
            </h1>
            <p style={{ fontSize: "20px", maxWidth: "600px", marginBottom: 30 }}>
              Частные морские туры по бирюзовым бухтам Фетхие.
              Премиальный отдых и незабываемые впечатления.
            </p>
          </>
        ) : (
          <>
            <h1 style={{ fontSize: "48px", marginBottom: 20 }}>
              Luxury Private Speed Boat Charter in Fethiye
            </h1>
            <p style={{ fontSize: "20px", maxWidth: "600px", marginBottom: 30 }}>
              Discover hidden turquoise bays with exclusive private yacht
              experiences along the Mediterranean coast.
            </p>
          </>
        )}

        <button style={{
          padding: "15px 35px",
          fontSize: "18px",
          backgroundColor: "#d4af37",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold"
        }}>
          {isRU ? "Забронировать сейчас" : "Book Now"}
        </button>

      </section>

      {/* PACKAGES */}
      <section style={{ padding: "80px 40px", textAlign: "center" }}>
        <h2 style={{ marginBottom: 50 }}>
          {isRU ? "Пакеты туров" : "Private Tour Packages"}
        </h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap"
        }}>

          <div style={{ background: "#1a1a1a", padding: "30px", width: "280px" }}>
            <h3>2 Hours</h3>
            <p>€250</p>
          </div>

          <div style={{ background: "#1a1a1a", padding: "30px", width: "280px" }}>
            <h3>4 Hours</h3>
            <p>€450</p>
          </div>

          <div style={{ background: "#1a1a1a", padding: "30px", width: "280px" }}>
            <h3>Full Day</h3>
            <p>€750</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "40px",
        textAlign: "center",
        backgroundColor: "#000"
      }}>
        <p>© 2026 Captain Cave Yachts – Fethiye</p>
      </footer>

    </main>
  )
}