import React, {useEffect} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cookies from "js-cookie"
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from './Redux/actions/authActions'
import LandingPage from "./Pages/LandingPage/LandingPage"
import LoginPage from './Pages/LoginPage/LoginPage'
import SignUpPage from './Pages/SignupPage/SignupPage'
import CartPage from './Pages/ShoppingCartPage/CartPage'
import SearchPage from './Pages/SearchPage/SearchPage'
import SeeAllPage from './Pages/SeeAllPage/SeeAllPage'


import { retrieveCubes } from './Redux/actions/cubeActions'
import ProductDetail from './Pages/ProductDetail/ProductDetail'

function App() {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    useEffect(()=>{
        if(auth.id){
            const generateSession = async () => {

                const res = await fetch("/api/session/token/refresh", {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'access': Cookies.get("access_token_cookie")
                    },
                })
                if (res.ok) {
                    const data = await res.json()
                    dispatch(setUser(data))
                }
            }
            generateSession()
        }
    }
        
    ,[])

    useEffect(() => {
        dispatch(retrieveCubes())
    }, [dispatch])

  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/cubes/:id" component={ProductDetail} />
            <Route path="/cart" component={CartPage} />
            <Route path="/search" component={SearchPage}/>
            <Route path="/all/:brand" component={SeeAllPage}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
