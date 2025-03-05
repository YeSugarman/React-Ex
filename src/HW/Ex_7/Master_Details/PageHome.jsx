import { Routes, Route } from 'react-router-dom'

import Names from './Names'
import Name from './Name'
import Posts from './Posts'
import Todos from './Todos'


export default function PageHome() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Names/>}/>
            <Route path="/name/:id" element={<Name/>}>
                  <Route path="posts" element={<Posts/>}/>
                  <Route path="todos" element={<Todos/>}/>
            </Route>
        </Routes>
    </div>
  )
}
