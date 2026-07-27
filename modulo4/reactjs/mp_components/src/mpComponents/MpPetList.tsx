// src/mpComponents/MpPetList.tsx

interface Pet {
  name: string
  species: string
  age: number
}

interface MpPetListProps {
  pets: Pet[]
  title?: string
}

export default function MpPetList({ pets, title = 'Mascotas en consulta' }: MpPetListProps) {
  if (pets.length === 0) {
    return <p style={{ color: '#999' }}>No hay mascotas en la lista.</p>
  }

  return (
    <div>
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {pets.map((pet) => (
          <li
            key={pet.name}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <span>{pet.name}</span>
            <span style={{ color: '#888', fontSize: 13 }}>{pet.species} · {pet.age} anios</span>
          </li>
        ))}
      </ul>
    </div>
  )
}