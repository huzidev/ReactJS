import React from 'react';
import useStore from './Store';
import { NavBar } from './styled-components/Nav.styled';

export default function App() {

    const count = useStore((state) => state.count)

    const inc = useStore((state) => state.inc)

    const dec = useStore((state) => state.dec)

    const reset = useStore((state) => state.reset)

    const dark = useStore((state) => state.dark)

    const toggleState = useStore((state) => state.toggle)

    let State = dark ? "light" : "dark"

    return ( 
        <div>
            <NavBar>
                <button onClick={toggleState}>
                    Toggle to {State} mode
                </button>
            </NavBar>
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
