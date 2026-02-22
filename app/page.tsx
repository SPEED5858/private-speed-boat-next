'use client'
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams()
  const lang = searchParams.get('lang')

  const isRU = lang === 'ru'

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      
      <nav style={{ position: "absolute", top: 20, right: 40 }}>
        <a href="/" style={{ marginRight: 10 }}>EN</a>
        <a href="/?lang=ru">RU</a>
      </nav>

      <h1>Captain Cave Yachts</h1>

      {isRU ? (
        <>
          <h2>Роскошная аренда скоростной яхты в Фетхие</h2>
          <p>
            Откройте для себя бирюзовые воды Фетхие в полной приватности и
            комфорте. Премиальные частные морские туры.
          </p>
        </>
      ) : (
        <>
          <h2>Luxury Private Speed Boat Charter in Fethiye</h2>
          <p>
            Explore the turquoise waters of Fethiye in ultimate privacy and
            comfort. Premium private yacht experiences.
          </p>
        </>
      )}

    </main>
  )
}