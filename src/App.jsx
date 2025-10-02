import React from 'react'
import Demo from './Demo'

const App = () => {

  const collegedata=[
  {
    name:'ymca',
    branch:'ece',
    year:"1st",
    school:[
      {
        schoolname:'kv no1',
        city:'faridabad'
    
      }
    ]
  },
  {
    name:'ymca',
    branch:'ece',
    year:"1st",
    school:[
      {
        schoolname:'DAV',
        city:'faridabad'
    
      }
    ]
  },
  {
    name:'ymca',
    branch:'ece',
    year:"1st",
    school:[
      {
        schoolname:'kv no2',
        city:'faridabad'
    
      }
    ]
  },
]
  return (
    <div>
      <h1>Nested looping with components</h1>

     {
      collegedata.map((item,idx)=>(
        <div key={idx}>
        <Demo  data={item}/>

        </div>
      ))
     }
      
    </div>
  )
}

export default App