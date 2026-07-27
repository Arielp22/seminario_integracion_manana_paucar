// src/mp02UseEffect/MpFetchPet.tsx

import { useState, useEffect } from 'react'

interface VetRecord {
  id: number
  name: string
  species: string
  breed: string
  owner: string
  phone: string
}

export default function MpFetchPet() {
  const [petId, setPetId] = useState(1)
  const [pet, setPet] = useState<VetRecord | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchPet() {
      setLoading(true)
      setError(null)

      try {
        const mockPets: Record<number, VetRecord> = {
          1: { id: 1, name: 'Max', species: 'Perro', breed: 'Labrador', owner: 'Carlos Perez', phone: '0991234567' },
          2: { id: 2, name: 'Luna', species: 'Gato', breed: 'Siames', owner: 'Ana Gomez', phone: '0987654321' },
          3: { id: 3, name: 'Rocky', species: 'Perro', breed: 'Bulldog', owner: 'Luis Torres', phone: '0976543210' },
        }

        await new Promise((r) => setTimeout(r, 500))

        if (!cancelled) {
          const data = mockPets[petId]
          if (data) {
            setPet(data)
          } else {
            throw new Error('Mascota no encontrada')
          }
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error desconocido')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchPet()

    return () => { cancelled = true }
  }, [petId])

  return (
    <div style={{ maxWidth: 360 }}>
      <h3 style={{ marginBottom: 12 }}>Ficha de Mascota</h3>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {[1, 2, 3].map((id) => (
          <button
            key={id}
            onClick={() => setPetId(id)}
            style={{
              padding: '6px 14px',
              borderRadius: 6,
              border: '1px solid #d1d5db',
              background: petId === id ? '#2d6a4f' : '#fff',
              color:      petId === id ? '#fff'    : '#333',
              cursor: 'pointer',
              fontWeight: petId === id ? 600 : 400,
            }}
          >
            Mascota {id}
          </button>
        ))}
      </div>

      {loading && (
        <p style={{ color: '#6b7280', fontSize: 14 }}>Cargando ficha...</p>
      )}
      {error && (
        <p style={{ color: '#991b1b', fontSize: 14 }}>Error: {error}</p>
      )}
      {pet && !loading && (
        <div style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8 }}>
          <p style={{ margin: '0 0 4px', fontWeight: 600 }}>{pet.name}</p>
          <p style={{ margin: '0 0 4px', fontSize: 13, color: '#6b7280' }}>
            {pet.species} · {pet.breed}
          </p>
          <p style={{ margin: '0 0 4px', fontSize: 13, color: '#6b7280' }}>
            dueno: {pet.owner}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            Tel: {pet.phone}
          </p>
        </div>
      )}
    </div>
  )
}