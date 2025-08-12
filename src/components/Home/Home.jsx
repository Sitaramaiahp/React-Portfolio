
import React from 'react'
import styles from './Home.module.css'
import resume from '/assets/resume.pdf'

const Home = () => {
  return (
    <section id='home' className={styles.home}>
        <div className={styles.container}>
            <h1>Hi, I'm Sitaramaiah</h1>
            <h2>Full Stack Developer</h2>
            <p>Building scalable web applications with modern technologies</p>
            <div className={styles.btn}>
                <a href="#projects"><button className={styles.dark}>View Projects</button></a>
                <a href={resume} download><button className={styles.glass}>Download Resume</button></a>
            </div>
        </div>
    </section>
  )
}

export default Home