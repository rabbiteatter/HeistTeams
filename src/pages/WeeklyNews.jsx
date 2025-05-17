import { useState } from 'react'
import RHTSLogo from './assets/RHTS.gif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://discord.gg/heistteams" target="_blank">
          <img src={RHTSLogo} className="logo" alt="RHTS logo" />
        </a>
      </div>
      <h1>Heist Teams</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          GTA Weekly News
        </button>
      </div>
      <p className="read-the-docs">
        © 2025 Rabbiteatters
      </p>
    </>
  )
}

export default App
