import { BrowserRouter, Routes, Route } from "react-router-dom"
import gameOfThrones from "./gameOfThrones"
import Houses from './Houses'
import House from './House'
import Member from './Member'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/houses" element={<Houses houses={gameOfThrones}/>}/>
        <Route path="/houses/:id" element={<House houses={gameOfThrones}/>}/>
        <Route path="/houses/:houseId/members/:memberId" element={<Member houses={gameOfThrones}/>}/>
      </Routes>
    </BrowserRouter>
  )
}