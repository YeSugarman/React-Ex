import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3'
import Comp4 from "./Comp4"

export default function PageHome() {
  return (
    <div>
        <Routes>
            <Route path='/' element= {<Comp1/>}/>
            <Route path='/comp2' element= {<Comp2/>}/>
            <Route path='/comp3' element={<Comp3/>}/>
            <Route path='/comp4' element={<Comp4/>}/>
        </Routes>
    </div>
  )
}
