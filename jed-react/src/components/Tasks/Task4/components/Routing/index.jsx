import {Routes , Route} from 'react-router'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Contact from '../../pages/Contact'
import ProductSingle from '../ProductSingle'
import UsersWithReducer from '../../../Task6/pages/UsersWithReducer'

function Routing(){
    return <div>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/users-with-reducer' element={<UsersWithReducer/>}/>
        <Route path='/:id' element={<ProductSingle/>}/>
     </Routes>
    </div>
}

export default Routing