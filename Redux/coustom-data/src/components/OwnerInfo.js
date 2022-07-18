import React from 'react';
import ownerData from './ownerData.js';

export default function OwnerInfo() {

    const data = ownerData.map((info) => {

        const { name, age, hobby, sources, experience, languages } = info
        
        return(
            <>
                <h2>
                    name : {name}
                </h2>
                <h3>
                    age : {age}
                </h3>
                <h4>
                    hobby : {hobby}
                </h4>
                <h5>
                    sources : {sources}
                </h5>
                <h5>
                    experience : {experience}
                </h5>
                <h5>
                    languages : {languages}
                </h5>
            </>
        )

    })
    

    return (
        <div>
            
        </div>
    )
}
