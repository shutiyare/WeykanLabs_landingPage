"use client"
import React,{useState} from 'react'
import styles from './page.module.css';
import img1 from '../../public/logo/weykan-logo1.png'
import img2 from '../../public/logo/weykan-logo-transparent.png'
import heroImg from '../../public/logo/hero-img.png'
import contact from '../../public/logo/contact.svg'
import Image from 'next/image';
import Link from 'next/link';
import {SiFreelancer} from 'react-icons/si'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
      const handleSubmit=(e)=>{
        e.preventDefault();
      };
  return (
    <div>
           <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={img2} width={60} height={60} alt='logo'/>
          <a href='/'>
          <h3>WeykanLabs</h3>
          </a> 
        </div>
        <div className={styles.burgerMenu} onClick={toggleMenu} >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <ul className={`${styles.navLinks} ${isOpen && styles.active}`}>
          <li><Link href="#hero">Home</Link></li>
          <li><Link href="#programs">Programs</Link></li>
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#contact">Contacts</Link></li>
        </ul>
      </div>
    </nav>
    {/* Hero Section */}
    <div className={styles.hero_section} id='hero'>
      <div className={styles.left}>
        <h4 className={styles.p1}>Shaping Ideas Into Reality</h4>
        <h4 className={styles.h3}>"Building technologies and conducting research on high-impact social issues."</h4>
        <p className={styles.p2}>We shape the next generation of innovators and entrepreneurs. We offer experience and practical learning to youth who quest to start their own enterprises or professions.</p>
        <div>
        <button className={styles.button} >More About us </button>
        </div>
      </div>
      <div className={styles.right}>
        <Image src={heroImg} width={600} height={600} alt='hero image' className={styles.img}/>
      </div>
    </div>
     {/* Programs */}
     <h4 className={styles.head} id='programs'>Programs</h4>
        <div className={styles.programs}>
          <div className={styles.program}>
            <div className={styles.icon}>
            <SiFreelancer  />
            </div>
            <h4>Freelancing programs.</h4>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas a doloribus eum accusamus fugiat, quam voluptates fuga rem asperiores?</p>
          </div>

          <div className={styles.program}>
            <div className={styles.icon}>
            <SiFreelancer  />
            </div>
            <h4>Freelancing programs.</h4>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas a doloribus eum accusamus fugiat, quam voluptates fuga rem asperiores?</p>
          </div>

          <div className={styles.program}>
            <div className={styles.icon}>
            <SiFreelancer  />
            </div>
            <h4>Freelancing programs.</h4>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas a doloribus eum accusamus fugiat, quam voluptates fuga rem asperiores?</p>
          </div>

          
        </div>
        {/* Services */}
        <p className={`${styles.head} ${styles.p}`}>Services</p>
        <h6 className={`${styles.head} ${styles.h}`}>what we provide</h6>
        <div className={styles.programs}>
          <div className={styles.program}>
            <div className={styles.icon}>
            <SiFreelancer  />
            </div>
            <h4>Freelancing programs.</h4>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas a doloribus eum accusamus fugiat, quam voluptates fuga rem asperiores?</p>
          </div>

          <div className={styles.program}>
            <div className={styles.icon}>
            <SiFreelancer  />
            </div>
            <h4>Freelancing programs.</h4>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas a doloribus eum accusamus fugiat, quam voluptates fuga rem asperiores?</p>
          </div>

          <div className={styles.program}>
            <div className={styles.icon}>
            <SiFreelancer  />
            </div>
            <h4>Freelancing programs.</h4>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas a doloribus eum accusamus fugiat, quam voluptates fuga rem asperiores?</p>
          </div>
          </div>
          {/* Contact Us */}
          <div className={styles.contacts} id='contact'>
            <div className={styles.contact}>
              <Image src={contact} width={400} height={390} alt='contact' className={styles.imgC}/>
            </div>
            <div className={styles.contact}>
              <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                  <h5 className={styles.hh}>Contact Us</h5>
                  <div>
                    
                  <input type='text' placeholder='Name' className={styles.name} />
                  </div>
                  <div>
                  <input type='text' placeholder='Phone number' className={styles.name} />
                  </div>
                  <div>
                  <input type='email' placeholder='E-mail' className={styles.name} />
                  </div>
                  <div>
                  <textarea id='message' placeholder='Enter your message here' >
                  </textarea>
                  <button className={styles.submit}>Submit</button>
                  </div>
                 </form>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Navbar