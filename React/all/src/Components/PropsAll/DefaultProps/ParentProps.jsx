import React from 'react'
import Greetings from './DefaultProps'

const ParentProps = () => {
  return (
    <div>
        <Greetings />
        <Greetings name="Shakeer" />
    </div>
  )
}

export default ParentProps