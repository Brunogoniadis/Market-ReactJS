import React from 'react'
import { Main } from './style'
import Input from '../Input/Input'
export default function Header() {
    return (
        <Main>
            <div className='content'>
                <div className='title'>
                    Market 
                    <h6>.</h6>
                    JS
                </div>

                <Input></Input>

                <div className='nav-container'>
                    <a>Category</a>
                    <a>Contact</a>
                    <a>About</a>                    
                </div>
            </div>
        </Main>
    )
}