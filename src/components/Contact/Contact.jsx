
import React from 'react'
import styles from './Contact.module.css'
import email from '/assets/contact/emailIcon.png'
import linkedin from '/assets/contact/linkedinIcon.png'
import github from '/assets/contact/githubIcon.png'

const Contact = () => {
  return (
    <section id='contact' className={styles.contact}>
            <div className={styles.container}>
                <h2>Get In Touch</h2>
                <p>Let's discuss your next project or just say hello</p>
                <div className={styles.alternate}>
                    <h3>Alternative Contact</h3>
                    <div className={styles.link}>
                        <div className={styles.linkImg}>
                            <img src={email} alt="email" />
                        </div>
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">sitaramaiah1473@gmail.com</a>
                    </div>
                    <div className={styles.link}>
                        <div className={styles.linkImg}>
                            <img src={linkedin} alt="linkedin" />
                        </div>
                        <a href="https://www.linkedin.com/in/sitaramaiahp/">LinkedIn</a>
                    </div>
                    <div className={styles.link}>
                        <div className={styles.linkImg}>
                            <img src={github} alt="github" />
                        </div>
                        <a href="https://github.com/Sitaramaiahp">GitHub</a>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Contact