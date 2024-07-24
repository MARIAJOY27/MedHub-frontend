import React, { createContext, useState } from 'react'
export const AddMedResponseStatusContext = createContext()
export const PlaceOrderContext = createContext()
export const SalesContext = createContext()
export const isAuthorizedContext = createContext()



function Context({ children }) {
  const [addResponse, setAddResponse] = useState({})
  const [medicines, setMedicines] = useState([])
  const [orders, setOrders] = useState({})
  const [quantity, setquantity] = useState(null)
  const [sumSales, setSumSales] = useState(null)
  const [isAuthorized, setIsAuthorized] = useState(true)

  return (

    <AddMedResponseStatusContext.Provider value={{ addResponse, setAddResponse, medicines, setMedicines }}>

      <PlaceOrderContext.Provider value={{ orders, setOrders, quantity, setquantity }}>
        <SalesContext.Provider value={{ sumSales, setSumSales }}>
         <isAuthorizedContext.Provider value={{isAuthorized, setIsAuthorized}}>
           {children}
           </isAuthorizedContext.Provider>
        
        </SalesContext.Provider>
      </PlaceOrderContext.Provider>


    </AddMedResponseStatusContext.Provider>

  )
}

export default Context
