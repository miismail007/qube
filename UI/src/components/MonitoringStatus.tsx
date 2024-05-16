import React from 'react'
import { downloadStatusCount } from '../utills/helperFunctions'
import { MonitoringStatusProps } from '../utills/types'

function MonitoringStatus({ appliances }: MonitoringStatusProps) {
  return (
    <div className="container card mt-4 shadow">
        <div className="card-body">
            <ul className="list-inline">
                <li>{downloadStatusCount(appliances,"failed")} Failed</li>
                <li>{downloadStatusCount(appliances,"cancelled")} Cancelled</li>
                <li>{downloadStatusCount(appliances,"downloading")} Downloading</li>
                <li>{downloadStatusCount(appliances,"succeeded")} Succeeded</li>
            </ul>
        </div>
    </div>
  )
}

export default MonitoringStatus