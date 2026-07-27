// src/mpComponents/MpServiceCard.tsx

interface MpServiceCardProps {
  title: string
  description?: string
  highlighted?: boolean
}

export default function MpServiceCard({
  title,
  description = 'Consulta general',
  highlighted = false,
}: MpServiceCardProps) {
  return (
    <div
      style={{
        border: highlighted ? '2px solid #2d6a4f' : '1px solid #ccc',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        backgroundColor: highlighted ? '#e8f5e9' : '#fff',
      }}
    >
      <h3 style={{ margin: '0 0 8px' }}>{title}</h3>
      <p style={{ margin: 0, color: '#555' }}>{description}</p>
    </div>
  )
}