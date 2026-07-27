// src/components/FetchUsers.tsx

import { useState, useEffect } from 'react'

interface Company {
  name: string
  catchPhrase:    string
  bs: string

}

interface User {
  id:       number
  name:     string
  email:    string
  username: string
  website: string
  company: Company
}

export default function FetchUsers() {

  const [users,    setUsers]    = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState<string | null>(null)

  useEffect(() => {
    // Flag de cancelación — evita race conditions y
    // actualizaciones de estado en componentes desmontados
    let cancelled = false

    async function fetchUser() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        )
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`)
        const data: User[] = await res.json()
        console.log(data);
        // Solo actualiza si el componente sigue montado
        if (!cancelled) setUsers(data)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error desconocido')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchUser()

    return () => { cancelled = true }
  }, [])

  return (
    <div style={{ maxWidth: 360 }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users!.map((user) => (
          <li
            key={user.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <span
              style={{
                flex: 1,
                color: '#333',
              }}
            >
              {user.username}
            </span>
            <span
              style={{
                flex: 1,
                color:  '#333',
              }}
            >
              {user.email}
            </span>
            <span
              style={{
                flex: 1,
                color:  '#333',
              }}
            >
              {user.website}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}