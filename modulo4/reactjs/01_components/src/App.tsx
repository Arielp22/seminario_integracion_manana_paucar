// src/App.tsx

import WelcomeBanner       from './components/WelcomeBanner'
/*import UserGreeting        from './components/UserGreeting'
import CurrentDateDisplay  from './components/CurrentDateDisplay'
import ColoredBox          from './components/ColoredBox'
import ConditionalGreeting from './components/ConditionalGreeting'
import FruitList           from './components/FruitList'
import PriceTag            from './components/PriceTag'
import StatusBadge         from './components/StatusBadge'
import MiniProfileCard     from './components/MiniProfileCard'
import SimpleInfoTable     from './components/SimpleInfoTable'*/
import ProductCard         from './components/ProductCard'
//import ProductCatalogList  from './components/ProductCatalogList'
//import UserProfileCard     from './components/UserProfileCard'

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.          │
// │   1  WelcomeBanner       — banner estático sin props                    │
// │   2  UserGreeting        — props string + cálculo de iniciales          │
// │   3  CurrentDateDisplay  — fecha calculada al renderizar                │
// │   4  ColoredBox          — estilos dinámicos con props numéricas        │
// │   5  ConditionalGreeting — renderizado condicional + tipo unión         │
// │   6  FruitList           — lista tipada con .map()                      │
// │   7  PriceTag            — cálculos con props numéricas                 │
// │   8  StatusBadge         — Record para mapear tipos a estilos           │
// │   9  MiniProfileCard     — composición de componentes                   │
// │  10  SimpleInfoTable     — tabla con rows tipadas                       │
// │  11  ProductCard         — interfaz de props con opcionales y booleanas │
// │  12  ProductCatalogList  — lista con renderizado condicional de items   │
// │  13  UserProfileCard     — ejercicio: props complejas + rol             │
// └──────────────────────────────────────────────────────────────────────────┘
const PASO = 1

const fruits = [
  { name: 'Manzana', emoji: '🍎', calories: 52 },
  { name: 'Banana',  emoji: '🍌', calories: 89 },
  { name: 'Naranja', emoji: '🍊', calories: 47 },
]

const catalog = [
  { id: 1, name: 'Teclado mecánico',  price: 89.99 },
  { id: 2, name: 'Monitor 27 pulgadas', price: 349.99 },
  { id: 3, name: 'Mouse inalámbrico', price: 29.99, outOfStock: true },
  { id: 4, name: 'Webcam HD',         price: 59.99 },
]

export default function App() {
  const content =
    PASO ===  1 ? <WelcomeBanner /> :/*
    PASO ===  2 ? <UserGreeting name="Ana García" occupation="Desarrolladora Frontend" /> :
    PASO ===  3 ? <CurrentDateDisplay /> :
    PASO ===  4 ? (
      <div style={{ display: 'flex', gap: 12 }}>
        <ColoredBox color="#0070f3" label="Primary" />
        <ColoredBox color="#22c55e" label="Success" />
        <ColoredBox color="#e00"    label="Danger" />
      </div>
    ) :
    PASO ===  5 ? <ConditionalGreeting isLoggedIn={true} userName="Ana" timeOfDay="afternoon" /> :
    PASO ===  6 ? <FruitList fruits={fruits} title="Frutas favoritas" /> :
    PASO ===  7 ? (
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
        <PriceTag amount={99.99} currency="USD" />
        <PriceTag amount={99.99} currency="USD" discountPercent={20} />
      </div>
    ) :
    PASO ===  8 ? (
      <div style={{ display: 'flex', gap: 8 }}>
        <StatusBadge status="active" />
        <StatusBadge status="pending" />
        <StatusBadge status="error" />
        <StatusBadge status="inactive" />
      </div>
    ) :
    PASO ===  9 ? (
      <MiniProfileCard
        fullName="Ana García"
        role="Senior Developer"
        department="Ingeniería"
        status="active"
        joinedYear={2019}
      />
    ) :
    PASO === 10 ? (
      <SimpleInfoTable
        title="Resumen del pedido"
        rows={[
          { label: 'Subtotal',  value: '$89.99' },
          { label: 'Envío',     value: '$5.00' },
          { label: 'Total',     value: '$94.99', highlight: true },
        ]}
      />
    ) :
    PASO === 11 ? <ProductCard title="Teclado inalámbrico" description="Bluetooth 5.0, retroiluminado" highlighted /> :
    PASO === 12 ? <ProductCatalogList products={catalog} title="Productos disponibles" /> :
    PASO === 13 ? (
      <UserProfileCard
        fullName="Ana García"
        email="ana@ejemplo.com"
        role="admin"
        isActive={true}
        skills={['TypeScript', 'React', 'Node.js']}
        bio="Desarrolladora fullstack con 5 años de experiencia."
      />
    ) :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}


/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
*/
// src/App.tsx
/*
export default function App() {
  return (
    <main style={{ color: '#1a6b4a', maxWidth: 480, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Hola desde el repaso React</h1>
      <p>Programacion 4.</p>
      <p>Versión: 1.0.0</p>
    </main>
  )
}
*/