import { useState } from 'react'
import './App.css'

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0)

  const incrementCounter = (): void =>{
    setCount(count => count + 1);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => incrementCounter()}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
