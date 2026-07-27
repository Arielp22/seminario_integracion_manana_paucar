// src/App.tsx

import MpWelcomeBanner from "./mpComponents/MpWelcomeBanner"
import MpPetList from "./mpComponents/MpPetList"
import MpServiceCard from "./mpComponents/MpServiceCard"
import MpPatientCounter from "./mp01UseState/MpPatientCounter"
import MpVisitCounter from "./mp01UseState/MpVisitCounter"
import MpAppointmentManager from "./mp01UseState/MpAppointmentManager"
import MpPetProfileForm from "./mp01UseState/MpPetProfileForm"
import MpClinicTitle from "./mp02UseEffect/MpClinicTitle"
import MpFetchPet from "./mp02UseEffect/MpFetchPet"
import MpFetchPets from "./mp02UseEffect/MpFetchPets"
import MpAutoFocusForm from "./mp03UseRef/MpAutoFocusForm"
import MpInlineEditor from "./mp03UseRef/MpInlineEditor"

const PASO = 31

const petsData = [
  { name: 'Max', species: 'Perro', age: 3 },
  { name: 'Luna', species: 'Gato', age: 5 },
  { name: 'Rocky', species: 'Perro', age: 2 },
  { name: 'Piolin', species: 'Ave', age: 1 },
]

export default function App() {
  const content =
    // mpComponents
    //PASO === 1 ? <MpWelcomeBanner /> :
    //PASO === 2 ? <MpPetList pets={petsData} title="Pacientes del dia" /> :
    //PASO === 3 ? <MpServiceCard title="Vacunacion Completa" description="Incluye todas las vacunas anuales" highlighted /> :

    // mp01UseState
    //PASO === 10 ? <MpPatientCounter initialValue={5} label="Pacientes en sala" /> :
    //PASO === 11 ? <MpVisitCounter /> :
    //PASO === 12 ? <MpPetProfileForm /> :
    //PASO === 13 ? <MpAppointmentManager /> :

    // mp02UseEffect
    //PASO === 20 ? <MpClinicTitle /> :
    //PASO === 21 ? <MpFetchPet /> :
    //PASO === 22 ? <MpFetchPets /> :

    // mp03UseRef
    //PASO === 30 ? <MpAutoFocusForm /> :
    PASO === 31 ? <MpInlineEditor /> :

    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}