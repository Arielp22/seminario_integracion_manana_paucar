// src/mp02UseEffect/MpFetchPets.tsx

import { useState, useEffect } from 'react'

interface VetRecord {
  id: number
  name: string
  species: string
  breed: string
  owner: string
  phone: string
}

export default function MpFetchPets() {
  const [pets, setPets] = useState<VetRecord[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchPets() {
      setLoading(true)
      setError(null)

      try {
        await new Promise((r) => setTimeout(r, 500))

        const mockPets: VetRecord[] = [
          { id: 1, name: 'Max', species: 'Perro', breed: 'Labrador', owner: 'Ariel', phone: '0991234567' },
          { id: 2, name: 'Luna', species: 'Gato', breed: 'Siames', owner: 'Ariel', phone: '0987654321' },
          ]

        if (!cancelled) setPets(mockPets)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error desconocido')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchPets()

    return () => { cancelled = true }
  }, [])

  return (
    <div style={{ maxWidth: 480 }}>
      <h3 style={{ marginBottom: 12 }}>Mascotas Registradas</h3>
      {loading && <p style={{ color: '#6b7280', fontSize: 14 }}>Cargando lista...</p>}
      {error && <p style={{ color: '#991b1b', fontSize: 14 }}>Error: {error}</p>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {pets.map((pet) => (
          <li
            key={pet.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <span style={{ flex: 1, color: '#333', fontWeight: 600 }}>
              {pet.name}
            </span>
            <span style={{ flex: 1, color: '#666', fontSize: 13 }}>
              {pet.species} · {pet.breed}
            </span>
            <span style={{ flex: 1, color: '#888', fontSize: 12 }}>
              dueño: {pet.owner}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}