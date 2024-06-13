import React from 'react'
import HeaderAdmin from './HeaderAdmin'

function OrderHistory() {
    return (
        <>
            <HeaderAdmin />
            <h4 style={{overflowY:"hidden"}} className='text-center mt-4'>Order Summary</h4>
            <div className="row mx-5 mt-4">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <table className='table border '>
                        <thead>
                            <tr>
                                <th>Sl.No</th>
                                <th>Item</th>
                                <th>Order ID</th>
                                <th>Time Stamp</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Dolo 650</td>
                                <td>hgrhfr</td>
                                <td>bff</td>
                                <td>bdh</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-2"></div>

            </div>
        </>
    )
}

export default OrderHistory
