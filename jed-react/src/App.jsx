import Profile from "./Profile"
import Count from "./components/Counter"
import Task2 from "./components/Tasks/Task2"
import DuringCourse from "./components/DuringCourse/Practise1"
import Calculator from "./components/DuringCourse/Practise2"
import GetCountry from "./components/Tasks/Task3"
import { Route , Routes} from "react-router"
import Routing from "./components/Tasks/Task4/components/Routing"
import { BrowserRouter } from "react-router-dom"
import Context from "./components/Tasks/Task5/context/Context"

function App() {
  return <>
  {/* <Profile firstname="Nicat" lastname={"Zeynalli"} age={19} city={"Baku"}></Profile> */}
  {/* <Count></Count> */}
  {/* {/* <Task2> </Task2> */}
  {/* <DuringCourse></DuringCourse> */}
  {/* <Calculator></Calculator> */}
  {/* <GetCountry></GetCountry> */}
  {/* <Routes>
    <Route path="/" element={<div>Home Page</div>}></Route>
    <Route path="/calculator" element={<Calculator/>}></Route>
    <Route path="/getcountry" element={<GetCountry/>}></Route>

  </Routes> */}

  <Context>
    <Routing/>
  </Context>
  </>  
}

export default App
