import React from 'react';
import { Nav } from './styledComponents/Nav.styled.js'
import { Button } from './styledComponents/Button.styled.js';

export default function Header() {
    return (
        <div>
            <Nav>
                <h3>
                    Styled Components
                </h3>
                <Button>
                    Same Button
                </Button>
            </Nav>
        </div>
    )
}
