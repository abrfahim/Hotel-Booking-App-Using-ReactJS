import { useState } from 'react'
import Connector from './Connector'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Connector/>
      </div>
    </>
  )
}

export default App
