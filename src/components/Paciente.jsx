const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombres, apellidos, email, fecha, sintomas, id} = paciente;

    const handleEliminar = () => {

        const respuesta = confirm(`¿Deseas eliminar a ${nombres}?`);

        if(respuesta){
            eliminarPaciente(id);
        }
    }

    return (
        <div className='mt-7 md:ml-5 lg:ml-0 bg-white shadow-md px-5 py-10 rounded-md'>
            <p className='font-bold mb-3'>Paciente: 
            <span className='font-normal'> {`${nombres} ${apellidos}`}</span>
            </p>
            <p className='font-bold mb-3'>Email: 
            <span className='font-normal'> {email}</span>
            </p>
            <p className='font-bold mb-3'>Fecha Alta: 
            <span className='font-normal'> {fecha}</span>
            </p>
            <p className='font-bold mb-3'>Sintomas: 
            <span className='font-normal'> {sintomas}</span>
            </p>
            <div className="flex justify-between">
                <button
                    onClick={() => setPaciente(paciente)}
                    className="bg-sky-500 text-white font-medium rounded px-3 cursor-pointer hover:bg-sky-700"
                >Editar</button>
                <button
                    onClick={handleEliminar}
                    className="bg-red-500 text-white font-medium rounded px-3 cursor-pointer hover:bg-red-700"   
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente;

