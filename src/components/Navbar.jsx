import React, { useContext } from 'react'
import UserContext from '../contexts/usercontext'

const Navbar = () => {

    const products = useContext(UserContext)
  return (

        <div>
            {
                products.map((eachProduct)=><h1>{eachProduct.category}</h1>)
            }
        </div>
            
        
    
  )
}

export default Navbar