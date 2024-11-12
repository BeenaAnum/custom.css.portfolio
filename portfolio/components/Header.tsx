import Link from 'next/link'
import React from 'react'


export default function Header(): React.JSX.Element {
  return (
    <div>
       <header>
        <div className="logo">
            <h1>Beena<span>Anum</span></h1>
        </div>
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
        <div className="button">
            <button className="btn">Contact Me</button>
        </div>
    </header>
    </div>
  )
}

