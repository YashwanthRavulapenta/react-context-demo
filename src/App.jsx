import { useState ,useEffect} from "react"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import UserContext from "./contexts/usercontext"

function App() {

  const [products , setProduts] = useState([])
  const getProducts = async () =>{
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setProduts(data);
  }


  useEffect(()=>{
    getProducts();
  },[])
  return (
   <div>
    <UserContext.Provider value={products}>
      <Navbar/>
      <Cart/>
      <Footer/>
    </UserContext.Provider>
   </div>
  )
}

export default App
