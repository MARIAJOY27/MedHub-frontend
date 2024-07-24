import { serverUrl } from "./baseUrl"
import { commonAPI } from "./commonAPI"

//register
export const registerAPI = async(reqbody)=>{
   return await commonAPI('POST',`${serverUrl}/user/register`,reqbody,"")
}

//login user
export const loginAPI = async(reqbody)=>{
   return await commonAPI('POST',`${serverUrl}/user/login`,reqbody,"")
}

//add medicine
export const addMedicineApi = async(reqbody,reqHeader)=>{
   return await commonAPI('POST',`${serverUrl}/medicines`,reqbody,reqHeader)
}

//get all medicines at admin pg
export const getAllMedadminApi = async()=>{
   return await commonAPI('GET',`${serverUrl}/all-medadmin`,"","")
}

//get all medicines at userpg
export const getAllMedicineApi = async(searchKey)=>{
   return await commonAPI('GET',`${serverUrl}/all-medicines?search=${searchKey}`,"","")
}

//delete a medicine 
export const deleteAMedicineApi = async(id,reqHeader)=>{
   return await commonAPI('DELETE',`${serverUrl}/delete-medicine/${id}`,"",reqHeader)
}

//update medicine
export const updateMedApi = async(id,reqbody,reqHeader)=>{
   return await commonAPI('PUT',`${serverUrl}/update-med/${id}`,reqbody,reqHeader)
}

//update profile
export const updateProfileApi = async(reqbody,reqHeader)=>{
   return await commonAPI('PUT',`${serverUrl}/update-profile`,reqbody,reqHeader)
}

//add quantity
export const placeOrderApi = async(reqbody,reqHeader)=>{
   return await commonAPI('POST',`${serverUrl}/place-order`,reqbody,reqHeader)
}

//get placed med at user order page
export const getUserOrderApi = async(reqHeader)=>{
   return await commonAPI('GET',`${serverUrl}/getuser-med`,"",reqHeader)
}

//get all orders at admin page
export const getAllOrdersApi = async()=>{
   return await commonAPI('GET',`${serverUrl}/getAll-med`,"","")
}

//delete placed order 
export const deleteOrderApi = async(id,reqHeader)=>{
   return await commonAPI('DELETE',`${serverUrl}/delete-order/${id}`,"",reqHeader)
}

//get total count of medicines
export const getTotalCountMedApi = async()=>{
   return await commonAPI('GET',`${serverUrl}/count-medicines`,"","")
}

//get total count of users
export const getTotalCountUserApi = async()=>{
   return await commonAPI('GET',`${serverUrl}/count-users`,"","")
}

//get all users
export const getAllUsersApi = async()=>{
   return await commonAPI('GET',`${serverUrl}/all-users`,"","")
}

//delete user
export const deleteUserApi = async(id,reqHeader)=>{
   return await commonAPI("DELETE",`${serverUrl}/delete-user/${id}`,"",reqHeader)
}

//get out of stock med count
export const getOosMedCountApi = async()=>{
   return await commonAPI('GET',`${serverUrl}/count-oos-med`,"","")
}

//get total count of orders
export const getTotalCountOrdersApi = async()=>{
   return await commonAPI('GET',`${serverUrl}/count-orders`,"","")
}

//delete user orders when checkout
export const deleteUserOrderApi = async(id,reqHeader)=>{
   return await commonAPI('DELETE',`${serverUrl}/delete-userorders/${id}`,"",reqHeader)
}