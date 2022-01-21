import React from 'react'
import Me from '../../Me.jpg'
const ProfilePhoto = () => {
    return (
        <div>
        <img src= {Me} alt="ProfilePhoto"   style={{width: 400, height: 400, borderRadius: 400/ 2}}  /> 

        </div>
    )
}

export default ProfilePhoto;    
