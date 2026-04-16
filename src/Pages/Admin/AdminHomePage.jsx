import React from 'react'
import AdminSidebar from '../../Components/Admin/AdminSidebar'

export default function AdminHomePage() {
    return (
        <>
            <div className="container my-3 admin">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-center p-2 text-light'>Your Profile</h5>
                        <table className='table table-bordered'>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>Nitin Chauhan</td>
                                </tr>
                                <tr>
                                    <th>Username</th>
                                    <td>nitin</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>vishankchauhan@gmail.com</td>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <td>9873848046</td>
                                </tr>
                                <tr>
                                    <th>Role</th>
                                    <td>Super Admin</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
