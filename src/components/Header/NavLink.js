"use client"
import React from "react"
import Link from 'next/link'
import "./navlink.css"
import { usePathname } from "next/navigation"

const NavLink = ({href, lable}) => {

    const path = usePathname()
    return (
        <Link className={ path==href? "active ": "link"} href={href} key={href}>
        {lable}
         </Link>
     )
}
// nav-link

export default NavLink