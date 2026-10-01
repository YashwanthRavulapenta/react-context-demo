import React, { useContext } from 'react'
import UserContext from '../contexts/usercontext'

const Cart = () => {

const products = useContext(UserContext)
  return (
    <div>
        {
            products.map(
                (eachProduct)=>
                    <p>
                        {eachProduct.price}
                    </p>
            )
        }
    </div>
  )
}

export default Cart