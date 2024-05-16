import React, { ChangeEvent, useEffect, useState } from 'react'
import { getPageCount, searchInAppliances } from '../utills/helperFunctions'
import { DeviceTableProps } from '../utills/types'



function DeviceTable({ appliances, setViewAppliances }: DeviceTableProps) {
    const [ newAppliances, setNewAppliances ] = useState(appliances)
    const [ searchText, setSearchText ] = useState("")
    const [ isDropDownOpen, setIsDropDownOpen ] = useState(false)
    const [ selectedCount, setSelectedCount ] = useState(10)
    const onChangeSearchText = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value)
    }
    useEffect(() => {
        setNewAppliances(searchInAppliances(appliances,searchText))
    },[searchText,appliances])
    return (
        <div>
            <div className="container card mt-4 shadow">
                <div className="card-body">
                    <div className="input-group w-25">
                        <input 
                            className="form-control py-2 border-right-0 border" 
                            placeholder="search"
                            type="text"
                            value={searchText}
                            id="example-search-input"
                            onChange={onChangeSearchText}
                        />
                    </div>
                    <div className='float-left pt-2'>
                        <div className="dropdown float-left mr-2">
                            <button 
                                className="btn btn-secondary dropdown-toggle" 
                                type="button" 
                                id="dropdownMenuButton" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false"
                                onClick={() => {
                                    setIsDropDownOpen(!isDropDownOpen)
                                }}
                            >
                                {selectedCount}
                            </button>
                            <div className={`dropdown-menu ${isDropDownOpen ? "show" : ""}`} aria-labelledby="dropdownMenuButton">
                                <p className="dropdown-item" onClick={() => {
                                    setSelectedCount(10)
                                    setIsDropDownOpen(false)
                                }}>10</p>
                                <p className="dropdown-item" onClick={() => {
                                    setSelectedCount(20)
                                    setIsDropDownOpen(false)
                                }}>20</p>
                                <p className="dropdown-item" onClick={() => {
                                    setSelectedCount(30)
                                    setIsDropDownOpen(false)
                                }}>30</p>
                            </div>
                        </div>
                        <nav aria-label="Page navigation example float-left">
                            <ul className="pagination">
                                {/* <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                </li> */}
                                {getPageCount(newAppliances.length, selectedCount).map((i) => 
                                    <li className="page-item"><a className="page-link" href="#">{i}</a></li>
                                )}
                                
                                {/* <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </a>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container card shadow overflow-auto" style={{height: "500px"}}>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Device Serial</th>
                                <th scope="col">Location</th>
                                <th scope="col">Bandwidth</th>
                                <th scope="col">status</th>
                                <th scope="col">Download Status</th>
                                <th scope="col">OS Version</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {newAppliances.map((row) => 
                                <tr key={row._id}>
                                    <th scope="row">{row.serialNo}</th>
                                    <td>{`${row.theatreName}`}<br/>{`${row.location.city}, ${row.location.state}, ${row.location.country}`}</td>
                                    <td>{row.bandwidth}</td>
                                    <td>{row.deviceStatus}</td>
                                    <td>{row.downloadStatus}</td>
                                    <td>{row.osVersion}</td>
                                    <td><button className='btn btn-secondary' onClick={() => setViewAppliances(row.serialNo)}>View</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DeviceTable
