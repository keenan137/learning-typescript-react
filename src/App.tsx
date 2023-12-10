import { useState } from 'react'
import './App.css'

function App(): React.ReactElement {
  const [header, setHeader] = useState<string>('Vite + React');
  const [count, setCount] = useState<number>(0)

  const changeHeader = (e: React.MouseEvent) =>{
        setHeader("Amazing! " + e.clientX)
  }

  const incrementCounter = (): void =>{
    setCount(count => count + 1);
  }

  return (
    <>
      <h1>{header}</h1>
      <div className="card">
        <button onClick={changeHeader}>
          Change Header
        </button>
      </div>
      <div className="card">
        <button onClick={() => incrementCounter()}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
