import React, { useEffect, useState } from 'react'
import { serverUrl } from '../services/baseUrl'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfileApi } from '../services/allAPI'

function Profile() {
    const [userDetails, setUserDetails] = useState({
        username: "",
        password: "",
        email: "",
        address: "",
        profile: ""
    })
    const [existingImg, setExistingImg] = useState("")
    const [preview, setPreview] = useState("")
    const [updateStatus, setUpdateStatus] = useState(false)

    const handleUpdate = async (e) => {
        e.preventDefault()
        const { username, password, email, address, profile } = userDetails
        if (!username || !address) {
            alert('Please fill the form completely')
        }
        else {
            const reqBody = new FormData()

            reqBody.append("username", username)
            reqBody.append("password", password)
            reqBody.append("email", email)
            reqBody.append("address", address)
            preview ? reqBody.append("profile", profile) : reqBody.append("profile", existingImg)

            const token = sessionStorage.getItem('token')
            if (preview) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                const result = await updateProfileApi(reqBody, reqHeader)
                if (result.status == 200) {
                    toast.success('Profile updated')
                    sessionStorage.setItem("existingUser", JSON.stringify(result.data))
                    setUpdateStatus(!updateStatus)
                }
                else {
                    console.log(result);
                    toast.error('Something went wrong')
                }
            }
            else {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                const result = await updateProfileApi(reqBody, reqHeader)
                if (result.status == 200) {
                    toast.success('Profile updated')
                    sessionStorage.setItem("existingUser", JSON.stringify(result.data))
                    setUpdateStatus(!updateStatus)
                }
                else {
                    console.log(result);
                    toast.error('Something went wrong')
                }
            }
        }
    }

    useEffect(() => {
        if (sessionStorage.getItem("existingUser")) {
            const user = JSON.parse(sessionStorage.getItem("existingUser"))
            setUserDetails({ ...userDetails, username: user.username, password: user.password, email: user.mailId, address: user.address })
            setExistingImg(user.profile)
        }
    }, [updateStatus])

    useEffect(() => {
        if (userDetails.profile) {
            setPreview(URL.createObjectURL(userDetails.profile))
        }
        else {
            setPreview("")
        }
    }, [userDetails.profile])

    console.log(userDetails);

    return (
        <>

            <div className="row">
                <h4 className='text-center mt-4' style={{ overflowY: "hidden" }}>Create Your Profile</h4>
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <div className='mt-4 d-flex justify-content-center align-items-center flex-column'>
                        <label htmlFor="image">
                            <input id='image' type="file" onChange={(e) => setUserDetails({ ...userDetails, profile: e.target.files[0] })} style={{ display: "none" }} />
                            {existingImg == "" ?
                                <img src={preview ? preview : "https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"} alt="" width={'240px'} style={{ borderRadius: "50%" }} />
                                :
                                <img src={preview ? preview : `${serverUrl}/uploads/${existingImg}`} alt="" width={'240px'} style={{ borderRadius: "50%" }} />
                            }
                        </label>
                        <div className='my-3 w-100'>
                            <input type="text" placeholder='Name' value={userDetails.username} className='form-control' onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} />
                        </div>
                        <div className='mb-3 w-100'>
                            <input type="text" placeholder='Address' value={userDetails.address} className='form-control' onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })} />
                        </div>
                        <div className='mb-3 w-100'>
                            <button onClick={handleUpdate} className='btn btn-success  w-100'>Update</button>
                        </div>

                    </div>
                </div>
                <div className="col-md-1"></div>
                <ToastContainer theme='colored' position='top-center' autoClose={2000} />
            </div>

        </>
    )
}

export default Profile
