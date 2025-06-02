import React from 'react'
import { FadeLoader } from 'react-spinners'; // Importing the FadeLoader from react-spinners


function Loader() {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'

        }}>
            <FadeLoader color='#3657' />
        </div>
    )
}

export default Loader
