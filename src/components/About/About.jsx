
import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <section id='about' className={styles.about}>
        <div className={styles.container}>
            <h2>About Me</h2>
            <p>I'm a passionate Full Stack Developer with expertise in building modern, scalable web applications. I love turning complex problems into simple, beautiful solutions that make a real impact.
            </p>
            <div className={styles.content}>
                <div className={styles.skills}>
                    <h3>Tech Stack</h3>
                    <div className={styles.skillBox}>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>Node.js</p>
                        <p>Express.js</p>
                        <p>Python</p>
                        <p>SQL</p>
                        <p>Django</p>
                        <p>MySQL</p>
                        <p>MongoDB</p>
                        <p>REST APIs</p>
                    </div>
                </div>
                <div className={styles.experience}>
                    <h3>Experience Timeline</h3>
                    <div className={styles.job}>
                        <h4 className={styles.year}>2025</h4>
                        <div className={styles.details}>
                            <h4>Junior Full Stack Developer</h4>
                            <p>Leading development of scalable web applications</p>
                        </div>
                    </div>
                    <div className={styles.job}>
                        <h4 className={styles.year}>2025</h4>
                        <div className={styles.details}>
                            <h4>Junior Full Stack Developer</h4>
                            <p>Leading development of scalable web applications</p>
                        </div>
                    </div>
                    <div className={styles.job}>
                        <h4 className={styles.year}>2025</h4>
                        <div className={styles.details}>
                            <h4>Junior Full Stack Developer</h4>
                            <p>Leading development of scalable web applications</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About