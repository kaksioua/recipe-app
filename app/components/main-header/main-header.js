import Link from 'next/link'
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'
import Image from 'next/image'
import MainHeaderBakcground from './main-header-background'

import NavLink from './nav-links'

export default function Header() {
  return (
    <>
      <MainHeaderBakcground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A palte with food on it " priority />
          NextLvel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href={'/meals'}>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href={'/community'}>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}