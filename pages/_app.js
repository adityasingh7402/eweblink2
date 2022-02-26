import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  return <>
  <script src="https://kit.fontawesome.com/1b7c84d2ba.js" crossorigin="anonymous"></script>
  <nav className={styles.mainnav}>
        <div className={styles.logo}><a href="/"><Image src={'/logo-dark.png'} height={70} width={198}/></a></div>
        <ul className={styles.navbar}>
                <li><a href='/'>Company<i class="fa fa-angle-down"></i></a></li>
          <Link href='/travel-portal'><li><a>Travel Portal<i class="fa fa-angle-down"></i></a></li></Link>
          <Link href='/services'><li><a>Services<i class="fa fa-angle-down"></i></a></li></Link>
          <Link href='/api-partners'><li><a>API Partners<i class="fa fa-angle-down"></i></a></li></Link>
          <Link href='/portfolio'><li><a>Career</a></li></Link>
          <Link href='/portfolio'><li><a>Portfolio</a></li></Link>
          <Link href='/contact-us'><li><a>Contact Us</a></li></Link>
        </ul>
      </nav>
  <Component {...pageProps} />
  <footer className={styles.footer}>
          <span>
          © 2011-2022 eWeblink Technology LLP. All Rights Reserved.
          </span>
      </footer>
  </>
}

export default MyApp
