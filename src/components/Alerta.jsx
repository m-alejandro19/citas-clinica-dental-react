const Alerta = ({mensaje}) => {
    return(
        <div className='p-3 rounded-lg bg-red-600 mb-5'>
            <p className='text-center text-white font-bold'>{mensaje}</p>
        </div>
    )
}

export default Alerta;