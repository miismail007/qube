import React, { useEffect, useState } from 'react'
import { DetailsProps, ListType } from '../utills/types'

function Details({viewAppliance}: DetailsProps) {
    const [ info, setInfo ] = useState<ListType>()
    const getData = async () => {
        const rawData = await fetch(`http://localhost:8000/api/v1/appliances/${viewAppliance}/info`)
        const data = await rawData.json()
        console.log(data);
        
        setInfo(data)
    }
    useEffect(() => {
        getData()
    },[])
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className='container'>
                    <div className='mb-2 p-2'>
                        <h1>{viewAppliance}</h1>
                        <h5>{info?.theatreName}</h5>
                        <h6>{`${info?.location.city}, ${info?.location.state}, ${info?.location.country}`}</h6>
                        <span className="badge bg-secondary mr-2" style={{borderRadius: "10px"}}>{info?.deviceStatus}</span>
                        <span className="badge bg-secondary mr-2" style={{borderRadius: "10px"}}>{info?.storage}</span>
                    </div>
                </div>
            </nav>
            <div className="container card mt-4 shadow">
                <div className="card-body">
                    <div className="row mt-2">
                        <div className="col-sm-3">
                            <h6>Device Serial</h6>
                            <p>{info?.serialNo}</p>
                        </div>
                        <div className="col-sm-3">
                            <h6>City</h6>
                            <p>{`${info?.location.city}, ${info?.location.state}, ${info?.location.country}`}</p>
                        </div>
                        <div className="col-sm-3">
                            <h6>Location</h6>
                            <p>{info?.theatreName}</p>
                        </div>
                        <div className="col-sm-3">
                            <h6>ISP Payment Responsibility</h6>
                            <p>{info?.ispPaymentResponsibility}</p>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-sm-3">
                            <h6>Bandwidth</h6>
                            <p>{info?.bandwidth}</p>
                        </div>
                        <div className="col-sm-3">
                            <h6>Average Bandwidth</h6>
                            <p>{info?.avgBandwidth}</p>
                        </div>
                        <div className="col-sm-3">
                            <h6>Plan Start Date</h6>
                            <p>{info?.planStartDate}</p>
                        </div>
                        <div className="col-sm-3">
                            <h6>Billing Cycle</h6>
                            <p>{info?.billingCycle}</p>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-sm-3">
                            <h6>Download Status</h6>
                            <p>{info?.downloadStatus}</p>
                        </div>
                        <div className="col-sm-3">
                            <h6>OS Version</h6>
                            <p>{info?.osVersion}</p>
                        </div>
                        <div className="col-sm-3">
                            <h6>Storage Available</h6>
                            <p>{info?.storage}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details