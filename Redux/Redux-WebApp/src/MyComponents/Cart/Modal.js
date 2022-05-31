import React from 'react'

export default function Modal() {
  return (
    <div>
        {screen ? (
            <>
                <div className='modal'>
                    <p>
                        Are You Sure You Wanted To Remove All Cart Items?
                    </p>
                    <button>
                        Yes
                    </button>
                    <button>
                        No
                    </button>
                </div>)
            : ""
            </> 
        }
    </div>
  )
}
