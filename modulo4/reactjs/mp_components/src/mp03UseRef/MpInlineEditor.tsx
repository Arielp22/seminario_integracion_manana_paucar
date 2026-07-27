// src/mp03UseRef/MpInlineEditor.tsx

import { useRef, useState } from 'react'

export default function MpInlineEditor() {
  const petNameRef = useRef<HTMLInputElement>(null)
  const notesRef = useRef<HTMLInputElement>(null)
  const [saved, setSaved] = useState('Nota vacia')

  function handleSave() {
    const petName = petNameRef.current?.value ?? ''
    const notes = notesRef.current?.value ?? ''
    if (petName.trim() === '' && notes.trim() === '') {
      setSaved('(Nota vacia)')
    } else {
      setSaved(`${petName}: ${notes}`)
    }
  }

  function handleClear() {
    if (petNameRef.current) petNameRef.current.value = ''
    if (notesRef.current) notesRef.current.value = ''
    petNameRef.current?.focus()
  }

  return (
    <div style={{ maxWidth: 340, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <h3 style={{ margin: 0 }}>Notas Veterinarias</h3>
      <p style={{ margin: 0, color: '#6b7280', fontSize: 13 }}>
        Ultima nota: <strong style={{ color: '#111827' }}>{saved}</strong>
      </p>

      <input
        ref={petNameRef}
        defaultValue=""
        placeholder="Nombre de la mascota..."
        style={inputStyle}
      />

      <input
        ref={notesRef}
        defaultValue=""
        placeholder="Notas del diagnostico..."
        style={inputStyle}
      />

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={handleSave}
          style={{ flex: 1, padding: '8px', background: '#2d6a4f', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Guardar Nota
        </button>
        <button
          onClick={handleClear}
          style={{ padding: '8px 16px', background: '#f3f4f6', color: '#6b7280', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Limpiar
        </button>
      </div>
    </div>
  )
}

const inputStyle = {
  padding: '8px 12px',
  border: '1px solid #d1d5db',
  borderRadius: 6,
  fontSize: 14,
}