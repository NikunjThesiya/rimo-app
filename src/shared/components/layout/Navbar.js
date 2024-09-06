"use client"
import React, { useState } from 'react'
import styles from "@/assets/scss/components/navbar.module.scss"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import CloseIcon from "@/assets/images/close.svg" 
import MenuIcon from "@/assets/images/menu.svg" 
import { ROUTES } from '@/shared/constants/allRoutes'
import { NAVBAR_LINKS } from '@/shared/constants'
  
const Navbar = () => {
  const pathname = usePathname();
  const [isToggle, setIsToggle] = useState(false)

  return (
    <div className={`${styles.navbar}`}>
      <div className={`custom-container ${styles.container}`}>
        <div className={styles.navLeft}>
          <Link href={ROUTES.home} className={styles.logo}>RIMO</Link>
          <button className={styles.toggle} onClick={() => setIsToggle(!isToggle)}>
            {
              isToggle ? (
                <Image src={CloseIcon} alt='close icon' />
              ) : (
                <Image src={MenuIcon} alt='close icon' />
              )
            }
          </button>
        </div>
        <div className={`${styles.nav} ${isToggle ? styles.activeNav : styles.inActiveNav}`}>
          {
            NAVBAR_LINKS?.map((nav) => {
              return (
                <Link key={nav?.key} href={nav?.link || "#"} className={`${styles.navItem} ${pathname === nav?.link ? styles.activeNavItem : styles.inactiveNavItem}`}>
                  {nav?.title}
                </Link>
              )
            })
          }
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
