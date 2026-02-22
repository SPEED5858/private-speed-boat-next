'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ru'>('en')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

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
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e') center/cover"
      }}>

        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "all 1s ease"
        }}>

          {isRU ? (
            <>
              <h1 style={{ fontSize: "52px", marginBottom: 20 }}>
                Роскошная аренда яхты в Фетхие
              </h1>
              <p style={{ fontSize: "20px", maxWidth: "600px", marginBottom: 40 }}>
                Частные морские туры по бирюзовым бухтам Фетхие.
                Премиальный отдых и незабываемые впечатления.
              </p>
            </>
          ) : (
            <>
              <h1 style={{ fontSize: "52px", marginBottom: 20 }}>
                Luxury Private Speed Boat Charter in Fethiye
              </h1>
              <p style={{ fontSize: "20px", maxWidth: "600px", marginBottom: 40 }}>
                Discover hidden turquoise bays with exclusive private yacht
                experiences along the Mediterranean coast.
              </p>
            </>
          )}

          <a
            href="https://wa.me/905324725802"
            target="_blank"
            style={{
              padding: "15px 40px",
              fontSize: "18px",
              backgroundColor: "#d4af37",
              color: "black",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "0.3s"
            }}
          >
            {isRU ? "Забронировать через WhatsApp" : "Book via WhatsApp"}
          </a>

        </div>

      </section>
{/* WECHAT CONTACT */}
<section style={{
  padding: "80px 20px",
  textAlign: "center",
  backgroundColor: "#ffffff",
  color: "#000"
}}>
  <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
    Contact via WeChat
  </h2>

  <p style={{ marginBottom: "15px", fontSize: "18px" }}>
    WeChat ID: <strong>captaincaveyachts</strong>
  </p>

  <img
    src="/wechat-qr.jpg"
    alt="WeChat QR"
    style={{
      width: "180px",
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
    }}
  />
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