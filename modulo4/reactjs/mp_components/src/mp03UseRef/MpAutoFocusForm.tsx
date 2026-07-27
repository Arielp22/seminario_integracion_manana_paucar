// src/mp03UseRef/MpAutoFocusForm.tsx

import { useRef, useEffect } from 'react'

export default function MpAutoFocusForm() {
  const petNameRef = useRef<HTMLInputElement>(null)
  const speciesRef = useRef<HTMLInputElement>(null)
  const ownerRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    petNameRef.current?.focus()
  }, [])

  function handleFieldKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    nextRef: React.RefObject<HTMLInputElement | null>
  ) {
    if (e.key === 'Enter') {
      e.preventDefault()
      nextRef.current?.focus()
    }
  }

  return (
    <div>
      <h3 style={{ marginBottom: 12 }}>Registro de Nueva Mascota</h3>
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 300 }}
      >
        <input
          ref={petNameRef}
          placeholder="Nombre de la mascota"
          onKeyDown={(e) => handleFieldKeyDown(e, speciesRef)}
          style={inputStyle}
        />
        <input
          ref={speciesRef}
          placeholder="Especie (Perro, Gato...)"
          onKeyDown={(e) => handleFieldKeyDown(e, ownerRef)}
          style={inputStyle}
        />
        <input
          ref={ownerRef}
          placeholder="Nombre del dueno"
          style={inputStyle}
        />
        <button
          type="submit"
          style={{ padding: '8px', background: '#2d6a4f', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Registrar Mascota
        </button>
      </form>
    </div>
  )
}

const inputStyle = {
  padding: '8px 12px',
  border: '1px solid #d1d5db',
  borderRadius: 6,
  fontSize: 14,
}