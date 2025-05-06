import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import { Header } from  './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='body-container'>
        
      </div>
    </>
  )
}

export default App
