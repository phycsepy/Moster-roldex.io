import React from 'react'
import '../card/card.style.css'
export const Card= (props) => {
    return (
        <div className='card-container'>
            <img alt='moste'src={`https://robohash.org/${props.monster.id} `}/> 
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}
