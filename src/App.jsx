import { useState } from 'react'
import RHTSLogo from './assets/RHTS.gif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="body">
      <header className="header">
        <a className="logo" href="https://discord.gg/heistteams" target="_blank">
          <img src={RHTSLogo} alt="RHTS logo"/>
        </a>
        <h1 className="title">Heist Teams</h1>
      </header>
      <main className="main">
        <button onClick={() => setCount((count) => count + 1)}>
          GTA Weekly News
        </button>
      </main>

      <footer className="footer">
        <a
          href="https://discord.gg/heistteams"
          target="_blank"
          rel="noopener noreferrer"
          style={{ gridColumn: "2" }}
        >
          Join our Discord
        </a>
      </footer>
    </div>
  )
}

export default App
