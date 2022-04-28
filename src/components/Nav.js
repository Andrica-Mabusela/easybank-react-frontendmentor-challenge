import React, { useState } from 'react'
import logo from '../images/logo.svg'
import Overlay from './Overlay'
import Modal from './Modal'

export default function App(){

    const [isOpen, setIsOpen] = useState(false)

    return (
    <>
    <nav>
            <a href="#">
                <img src={logo} alt="Not Found" />
            </a>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
                <li>
                    <a href="#">Careers</a>
                </li>
            </ul>
            <button>Request invite</button>
            <div className="nav-toggler" onClick={() => setIsOpen(!isOpen)}>
                { isOpen ? <div className="cross-icon"><i className="fa fa-times"></i></div> :  <article>
                     <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </article>
                }
               
            </div>
    </nav>
    { isOpen ? <div><Overlay /> <Modal /></div> : '' }
    </>
    )
}