import React from 'react'

const School = ({info}) => {
  return (
    <div>
        <ul>
            <li>
                school name : {info.schoolname}
            </li>
            <li>
                school city : {info.city}
            </li>
        </ul>
    </div>
  )
}

export default School