// src/mp01UseState/MpPetProfileForm.tsx

import { useState } from 'react'

interface PetProfile {
  name: string
  species: string
  age: number
  weight: number
}

export default function MpPetProfileForm() {
  const [profile, setProfile] = useState<PetProfile>({
    name: '',
    species: '',
    age: 0,
    weight: 0,
  })

  function handleChange(field: keyof PetProfile, value: string | number) {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div>
      <h3 style={{ marginBottom: 12 }}>Perfil de la Mascota</h3>
      <form style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 320 }}>
        <input
          placeholder="Nombre de la mascota"
          value={profile.name}
          onChange={(e) => handleChange('name', e.target.value)}
          style={inputStyle}
        />
        <input
          placeholder="Especie (Perro, Gato, etc.)"
          value={profile.species}
          onChange={(e) => handleChange('species', e.target.value)}
          style={inputStyle}
        />
        <input
          placeholder="Edad (anios)"
          type="number"
          value={profile.age}
          onChange={(e) => handleChange('age', Number(e.target.value))}
          style={inputStyle}
        />
        <input
          placeholder="Peso (kg)"
          type="number"
          step="0.1"
          value={profile.weight}
          onChange={(e) => handleChange('weight', Number(e.target.value))}
          style={inputStyle}
        />
        <div style={{ marginTop: 8, padding: 12, background: '#f5f5f5', borderRadius: 6 }}>
          <p style={{ margin: 0, fontSize: 13 }}>
            <strong>{profile.name || '---'}</strong> · {profile.species || '---'} · {profile.age || '---'} anios · {profile.weight || '---'} kg
          </p>
        </div>
      </form>
    </div>
  )
}

const inputStyle = {
  padding: '8px 12px',
  border: '1px solid #ddd',
  borderRadius: 6,
  fontSize: 14,
}