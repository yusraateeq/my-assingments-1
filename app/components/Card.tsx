import React from 'react'

interface Tprops{
    name:string,
    rollno:number,
    day:string
}

const Card = (props:Tprops) => {

    return (    
        <>
            <h2>Name:{props.name}</h2>
            <h2>Rollno:{props.rollno}</h2>
            <h2>day:{props.day}</h2>
        </>
    )
}

export default Card
