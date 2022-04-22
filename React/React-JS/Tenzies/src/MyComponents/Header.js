import React from 'react';

export default function Header() {

    const [Seconds, SetSeconds] = React.useState(0)

    const [Minutes, SetMinutes] = React.useState(0)


    // WE'VE TO USE (USE EFFECT) for timer because we wanted ours timer to update every seconds and if we didn't use (DEPENDENCY ARRAY) in ours (USE EFFECT) it'll update automatically every seconds

    React.useEffect(() => {

        var timer = setInterval(() => {
            
            SetSeconds(PrevSec => PrevSec + 1)

            if ( Seconds === 59 ) {

                // if seconds reach 59 then update ours minute and start counting seconds again from 0

                SetMinutes(PrevMinutes => PrevMinutes + 1)

                SetSeconds(PrevSec => 0)
                
                // therefore here we've set ours SetSeconds to zero
            }

        }, 1000);

        return ()=> clearInterval(timer)

    }, [Seconds]) // here if we use dependency array it'll be stopped just after a second


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
