import React from 'react'
import School from './assets/School'

const Demo = ({data}) => {
    console.log(data)
  return (
    <div style={{
        border:'1px solid white',
        width:'400px',
        borderRadius:'8px',
        padding:'10px',
        margin:'10px'
    }}>
        <h2>College name:{data.name} </h2>
        <h2>College branch:{data.branch} </h2>
        <h2>College year: {data.year}</h2>

        <h2>More info</h2>

        {
            data.school.map((saman,idx)=>(
                <div key={idx}>
                <School  info={saman}/>

                </div>
            ))
        }
    </div>
  )
}

export default Demo