import { useState, useEffect } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import ExercisePage from '../ExercisePage/ExercisePage';
import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route} from 'react-router-dom'

function App() {
    const [state, setState] = useState(null)
    const [user, setUser ] = useState(null)
    const loggedInUser = localStorage.getItem("user") || undefined

  
    function hasJWT() {
      let flag = false;

      //check user has JWT token
      localStorage.getItem("token") ? flag=true : flag=false
      console.log(localStorage.getItem("token"))
      return flag
  }
  
    // useEffect(() => {
    //   hasJWT()
    // }, [])
    
    return (
      <main className="App">
        {
          hasJWT() ?
          <>
            <ExercisePage />
            <Routes>
              
              <Route path="/" element={<ExercisePage user={{loggedInUser}} />} />
              {/* <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage/>} />
              <Route path="/" element={<NewOrderPage />}/> */}
            </Routes>
          </>
           :
          <AuthPage setUser={setUser}/>
        }
      </main>
    );
  }
  
  export default App;