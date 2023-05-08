import React from 'react'
import './index.css'
import { Button } from './comps/buttons/Button.tsx'

const App = () => {
  return (
    <div className="bg-dark text-light h-screen">
      <Button>
        <span className="text-2xl">Hello</span>
      </Button>
    </div>
  )
}

export default App
