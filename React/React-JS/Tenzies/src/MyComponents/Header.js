import React from 'react'

export default function Header() {
    
    return(

    <div className="header">

        <h1 className="title">
                    
            Tenzies
                    
        </h1>

        <h3 className="timer">
                    
            {Minutes < 10 ? "0" + Minutes : Minutes}:{Seconds < 10 ? "0" + Seconds : Seconds}
            {/* So we can have 00:00 if we didn't use the above step then we'll have just 0:0 */}

        </h3>
                    
    </div>

    )

}
