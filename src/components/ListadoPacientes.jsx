import React from 'react'
import Paciente from './Paciente'
import { useEffect } from 'react'

                        //prop viene desde el App.jsx
const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  
  return (
    <div className='mb-10 h-screen md:overflow-y-scroll lg:mr-5'>
      {/* RETORNA 0 CUANDO NO HAY PACIENTES 1 CUANDO HAY PACIENTES */}
      {pacientes && pacientes.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Listado pacientes</h2>
          <p className='mt-3 text-center font-bold'>Administra tus
            <span className='text-sky-700'> Pacientes y citas</span>
          </p>
          {pacientes.map(paciente => (
            <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
          <p className='mt-3 text-center font-bold'>Comienza agregando uno
            <span className='text-sky-700'> Se mostrarán aquí</span>
          </p>
        </>
      )}
      
    </div>
  )
}

export default ListadoPacientes