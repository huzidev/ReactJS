import React from 'react';
import useStore from './Store';

export default function App() {

    const count = useStore((state) => state.count)

    const inc = useStore((state) => state.inc)

    const dec = useStore((state) => state.dec)

    const reset = useStore((state) => state.reset)

    return ( 
        <div>
            <h1>
                Initial Count : {count}
            </h1>
            <button onClick={inc}>
                Increase Count
            </button>
            {
                count === 0
                    ? '' 
                    : (
                        <>
                            <button onClick={dec}>
                                Decrease Count
                            </button>
                            <button onClick={reset}>
                                Reset Count
                            </button>
                        </>
                    )
            }
        </div>
    )
}
