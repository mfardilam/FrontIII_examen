import React from 'react'

const Card = ({nombre, cancion}) => {
    return (
        <div>
            <h1>Hola {nombre}</h1>
            <h3>A nosotros también nos encanta ♪♪ {cancion} ♪♪</h3>
        </div>

    )
}

export default Card