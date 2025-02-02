import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes path="/*">
          <Route path='/*' element={<HomePage />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
