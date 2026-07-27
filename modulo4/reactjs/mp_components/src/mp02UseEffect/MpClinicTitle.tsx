// src/mp02UseEffect/MpClinicTitle.tsx

import { useEffect } from 'react'

export default function MpClinicTitle() {
  useEffect(() => {
    document.title = 'Vet AP - Clinica Veterinaria'

    return () => {
      document.title = 'React App'
    }
  }, [])

  return (
    <p style={{ fontSize: 14, color: '#6b7280' }}>
      Vet AP - Clinica Veterinaria
    </p>
  )
}