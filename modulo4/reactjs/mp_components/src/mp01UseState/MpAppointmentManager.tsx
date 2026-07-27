// src/mp01UseState/MpAppointmentManager.tsx

import { useState } from 'react'

interface Appointment {
  id: number
  petName: string
  ownerName: string
  reason: string
  attended: boolean
}

export default function MpAppointmentManager() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [petName, setPetName] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [reason, setReason] = useState('')

  function addAppointment() {
    if (!petName.trim() || !ownerName.trim() || !reason.trim()) return
    setAppointments((prev) => [
      ...prev,
      { id: Date.now(), petName: petName.trim(), ownerName: ownerName.trim(), reason: reason.trim(), attended: false },
    ])
    setPetName('')
    setOwnerName('')
    setReason('')
  }

  function removeAppointment(id: number) {
    setAppointments((prev) => prev.filter((appt) => appt.id !== id))
  }

  function toggleAttended(id: number) {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === id ? { ...appt, attended: !appt.attended } : appt
      )
    )
  }

  return (
    <div style={{ maxWidth: 480 }}>
      <h3 style={{ marginBottom: 12 }}>Gestion de Citas Veterinarias</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
        <input
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          placeholder="Nombre de la mascota..."
          style={inputStyle}
        />
        <input
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
          placeholder="Nombre del dueno..."
          style={inputStyle}
        />
        <input
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Motivo de la consulta..."
          style={inputStyle}
        />
        <button
          onClick={addAppointment}
          style={{ padding: '8px 16px', background: '#2d6a4f', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Agregar Cita
        </button>
      </div>

      {appointments.length === 0 && (
        <p style={{ color: '#999', fontSize: 14 }}>No hay citas registradas.</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {appointments.map((appt) => (
          <li
            key={appt.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <input
              type="checkbox"
              checked={appt.attended}
              onChange={() => toggleAttended(appt.id)}
            />
            <div style={{ flex: 1 }}>
              <span
                style={{
                  textDecoration: appt.attended ? 'line-through' : 'none',
                  color: appt.attended ? '#aaa' : '#333',
                  fontWeight: 600,
                }}
              >
                {appt.petName}
              </span>
              <span style={{ fontSize: 12, color: '#888', marginLeft: 8 }}>
                dueno: {appt.ownerName}
              </span>
              <p style={{ margin: '4px 0 0', fontSize: 13, color: '#666' }}>
                {appt.reason}
              </p>
            </div>
            <button
              onClick={() => removeAppointment(appt.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e00', fontSize: 16 }}
            >
              X
            </button>
          </li>
        ))}
      </ul>

      {appointments.length > 0 && (
        <p style={{ fontSize: 13, color: '#888', marginTop: 8 }}>
          {appointments.filter((a) => a.attended).length} de {appointments.length} atendidas
        </p>
      )}
    </div>
  )
}

const inputStyle = {
  padding: '8px 12px',
  border: '1px solid #ddd',
  borderRadius: 6,
  fontSize: 14,
}