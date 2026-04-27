import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import AdminSidebar from '../../../Components/Admin/AdminSidebar'

import { getSetting, createSetting, updateSetting } from "../../../Redux/ActionCreators/SettingActionCreators"
export default function AdminSettingPage() {
    let [data, setData] = useState({
        sizeName: "",
        map1: "",
        map2: "",
        address: "",
        email: "",
        phone: "",
        whatsapp: "",
        facebook: "",
        twitter: "",
        linkedin: "",
        youtube: "",
        instagram: "",
        privacyPolicy: "",
        termsAndCondition: "",
    })
    let SettingStateData = useSelector(state => state.SettingStateData)
    let dispatch = useDispatch()

    function getInputData(e) {
        let { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    function postData(e) {
        e.preventDefault()
    }

    useEffect(() => {
        (() => {
            dispatch(getSetting())
            if (SettingStateData.length) {
                setData({ ...data, ...SettingStateData[0] })
            }
        })()
    }, [SettingStateData.length])
    return (
        <>
            <div className="container my-3 admin">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-center p-2 text-light'>Setting</h5>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="col-lg-6 mb-3">
                                    <label>SiteName</label>
                                    <input type="text" name="siteName" onChange={getInputData} className='form-control border border-primary' placeholder='Site Name' />
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <label>Email</label>
                                    <input type="email" name="email" onChange={getInputData} className='form-control border border-primary' placeholder='Email Address' />
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <label>Phone Number</label>
                                    <input type="text" name="phone" onChange={getInputData} className='form-control border border-primary' placeholder='Phone Number' />
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <label>Whatsapp</label>
                                    <input type="text" name="whatsapp" onChange={getInputData} className='form-control border border-primary' placeholder='Whatsapp Number' />
                                </div>
                                <div className="col-12 mb-3">
                                    <label>Address</label>
                                    <textarea name="address" rows={2} onChange={getInputData} className='form-control border border-primary' placeholder='Address' />
                                </div>
                                <div className="col-12 mb-3">
                                    <label>Map1</label>
                                    <textarea name="map1" rows={2} onChange={getInputData} className='form-control border border-primary' placeholder='Map1' />
                                </div>
                                <div className="col-12 mb-3">
                                    <label>Map2</label>
                                    <textarea name="map2" rows={2} onChange={getInputData} className='form-control border border-primary' placeholder='Map2' />
                                </div>

                                <div className="col-12 mb-3">
                                    <label>Facebook Profile Page URL</label>
                                    <input type='url' name="facebook" onChange={getInputData} className='form-control border border-primary' placeholder='Facebook Profile Page URL' />
                                </div>
                                 <div className="col-12 mb-3">
                                    <label>Youtube Profile Page URL</label>
                                    <input type='url' name="youtube" onChange={getInputData} className='form-control border border-primary' placeholder='Youtube Profile Page URL' />
                                </div>
                                 <div className="col-12 mb-3">
                                    <label>Linkedin Profile Page URL</label>
                                    <input type='url' name="linkedin" onChange={getInputData} className='form-control border border-primary' placeholder='Linkedin Profile Page URL' />
                                </div>
                                 <div className="col-12 mb-3">
                                    <label>Twitter Profile Page URL</label>
                                    <input type='url' name="twitter" onChange={getInputData} className='form-control border border-primary' placeholder='Twitter Profile Page URL' />
                                </div>
                                 <div className="col-12 mb-3">
                                    <label>Instagram Profile Page URL</label>
                                    <input type='url' name="instagram" onChange={getInputData} className='form-control border border-primary' placeholder='Instagram Profile Page URL' />
                                </div>
                                <div className="col-12">
                                    <button className='btn btn-primary w-100'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
