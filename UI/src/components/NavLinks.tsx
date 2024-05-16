import React from 'react'
import { NavLinksProps } from '../utills/types'

function NavLinks({setViewAppliances, viewAppliance}: NavLinksProps) {
  return (
    <div className='container my-4'>
        <h6>
            {viewAppliance ? 
            <>
                <a 
                    onClick={() => setViewAppliances("")} 
                    className="pe-auto link-offset-2 link-underline link-underline-opacity-0">
                    Devices
                </a> {`> ${viewAppliance}`}
            </>
            :
            <p>Devices</p>
            }
        </h6>
    </div>
  )
}

export default NavLinks