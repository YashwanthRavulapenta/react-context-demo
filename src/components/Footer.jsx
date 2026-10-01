import React, { useContext } from 'react'
import UserContext from '../contexts/usercontext'

const Footer = () => {
    const products = useContext(UserContext)
  return (
    <div>   
        {products.filter(
            eachProduct=>
                eachProduct.price < 300
        ).map(eachProduct=>
            <h1>{eachProduct.price}</h1>
        )}
    </div>
  )
}

export default Footer