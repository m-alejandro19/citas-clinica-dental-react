import {useState, useEffect} from 'react';

import Alerta from './Alerta'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(()=>{
    if(Object.keys(paciente).length>0){
      setNombres(paciente.nombres);
      setApellidos(paciente.apellidos);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    } 
  },[paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if([nombres, apellidos, email, fecha, sintomas].includes('')){
      setError(true);
      return;
    }
    setError(false);

    const objetoPaciente = {
        nombres,
        apellidos,
        email,
        fecha,
        sintomas,
    }

    if(paciente.id){
      objetoPaciente.id = paciente.id;
      
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacientesActualizados);

      setPaciente({})
    } else {
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }
    setNombres('');
    setApellidos('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  return (
    <div className="mb-10">
      <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>
      <p className="mt-3 text-center font-bold">Añade Pacientes y
        <span className='text-sky-700'> Administralos</span>
      </p>
      <form 
            onSubmit={handleSubmit}
            action="" 
            className="mt-7 bg-white rounded-md shadow-md py-10 px-5 lg:w-10/12 mx-auto"
          >
          {error && <Alerta mensaje={'Todos los campos son obligatorios'}/>}
        <div className="block mb-3">
          <label htmlFor="nombres" className="block mb-1 font-semibold">Nombres Paciente</label>
          <input 
                value={nombres} 
                onChange={(e) => setNombres(e.target.value)}
                id="nombres" 
                className="border-2 rounded-md border-gray-500 w-full px-1" 
                type="text" 
                placeholder="Nombres del Paciente" 
              />
        </div>
        <div className="block mb-3">
          <label htmlFor="apellidos" className="block mb-1 font-semibold">Apellidos Paciente</label>
          <input 
                value={apellidos}
                onChange={(e) => setApellidos(e.target.value)}
                id="apellidos" 
                className="border-2 rounded-md border-gray-500 w-full px-1" 
                type="text" 
                placeholder="Apellidos del Paciente" 
              />
        </div>
        <div className="block mb-3">
          <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
          <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email" 
                className="border-2 rounded-md border-gray-500 w-full px-1" 
                type="email" 
                placeholder="Email del Paciente" 
              />
        </div>
        <div className="block mb-3">
          <label htmlFor="fecha-alta" className="block mb-1 font-semibold">Fecha de Alta</label>
          <input 
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                id="fecha-alta" 
                className="border-2 rounded-md border-gray-500 w-full px-1" 
                type="date" 
                placeholder="Email del Paciente" 
              />
        </div>
        <div className="block mb-3">
          <label htmlFor="sintomas" className="block mb-1 font-semibold">Sintomas</label>
          <textarea
                value={sintomas}
                onChange={(e) => setSintomas(e.target.value)} 
                className="border-2 rounded-md border-gray-500 w-full px-1" 
                placeholder="Describe los Síntomas" 
                name="" 
                id="sintomas" 
                cols="30" 
                rows="10"
              />
        </div>
        <input 
              className="bg-sky-500 text-white rounded font-semibold uppercase p-1 w-full md:w-3/4 lg:w-1/2 mx-auto block cursor-pointer hover:bg-sky-700" 
              type="submit" 
              value={paciente.id ? 'Guardar Paciente' : 'Agregar Paciente' } />
      </form>
    </div>
  )
}

export default Formulario