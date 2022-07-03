import { useState } from 'react'
import './App.css'
import { QrCode } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <QrCode/>
    </div>
  )
}

export default App
