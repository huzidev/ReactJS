import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <Link to='/owner'>owner info</Link> 
            <Link to='/products'>products</Link> 
        </div>
    )
}
