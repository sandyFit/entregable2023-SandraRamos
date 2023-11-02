import React from 'react'

const Card = ({ name, song}) => {
  return (
      <div className="container">
          <div className='card'>
              <h3>Hola { name }!</h3>
              <h4>Tu canción favorita es: { song }</h4>
          </div>
          
      </div>
  )
}

export default Card
