import { useState } from 'react'
import Card from './Card'

const Form = () => {
    const [name, setName] = useState('')
    const [song, setSong] = useState('')
    const [showCard, setShowCard] = useState(false)

    const handlerSubmit = e => {
        e.preventDefault()

        // Validaciones
        if (typeof name === 'string' && name.trim().length > 2){
            if (typeof song === 'string' && song.trim().length > 5) {
                setShowCard(true)
            }
            else{
                alert('Por favor chequea que la información sea correcta')
            }
        }
        else{
            alert('Por favor chequea que la información sea correcta')
        }
    }

    return (
        <div className='container'>
            <div className='inputs'>
                <h1>Tu Canción Favorita</h1>
                <form onSubmit={handlerSubmit}>
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id='name'
                        placeholder='Ingresa tu nombre'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="song">Canción</label>
                    <input
                        type="text"
                        id='song'
                        placeholder='Ingresa tu canción favorita'
                        value={song}
                        onChange={(e) => setSong(e.target.value)}
                    />

                    <input
                        type="submit"
                        value='Enviar'
                        
                    />
                </form>
                {showCard && <Card name={name} song={song} />}
            </div>
        </div>
    )
}

export default Form
