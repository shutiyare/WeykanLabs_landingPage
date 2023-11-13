import React from 'react'
import styles from './page.module.css'
import logo from '../../../public/logo/weykan-logo-transparent.png'
import Image from 'next/image'
import {FaFacebookF,FaPhoneAlt} from 'react-icons/fa'
import {AiOutlineMail,AiFillYoutube,AiOutlineTwitter,AiFillGithub} from 'react-icons/ai'
// import {IoCall} from 'react-icons/io'
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={logo} alt="Logo" className={styles.img}/>
          {/* <h1>My Next.js App</h1> */}
        </div>
        <div className={styles.contact}>
          <h2>Contact Us</h2>
          <p><AiOutlineMail className={styles.icon}/> info@weykan.com</p>
          <p><FaPhoneAlt className={styles.icon}/> +252 615507298</p>
        </div>
        <div className={styles.quickLinks}>
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/hero">Home</a></li>
            <li><a href="#programs">programs</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className={styles.socialLinks}>
          <h2>Social Links</h2>
          <ul>
            <li><a href="https://twitter.com/weykanlabs" target='_blank' className={styles.link}><AiOutlineTwitter className={styles.icon}/> twitter</a></li>
            <li><a href="https://github.com/weykanlabs" target='_blank' className={styles.link}><AiFillGithub className={styles.icon}/> github</a></li>
            <li><a href="https://www.youtube.com/@Weykanlabs" target='_blank' className={styles.link}><AiFillYoutube className={styles.icon}/>youtube</a></li>
          </ul>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer