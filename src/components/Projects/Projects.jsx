
import React from 'react'
import styles from './Projects.module.css'
import pro1 from "/assets/projects/project1.png"
import pro2 from "/assets/projects/project.png"

const Projects = () => {
  return (
    <section id='projects' className={styles.projects}>
        <div className={styles.container}>
            <h2>Featured Projects</h2>
            <p>Here are some of my recent projects that showcase my skills in full-stack development</p>
        </div>
        <div className={styles.content}>
            <div className={styles.pro}>
                <img src={pro1} alt="pro1" />
                <h3>E-Commerce Platform</h3>
                <p>Developed a fully responsive e-commerce web application featuring a modern landing page, a detailed single product page, and an intuitive add-to-cart system.</p>
                <ul>
                    <li>React</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
                <div className={styles.btn}>
                    <a href="https://github.com/Sitaramaiahp/doctor-appointment-booking"><button className={styles.glass}>Code</button></a>
                    <a href="https://stalwart-blini-dbe001.netlify.app/"><button className={styles.dark}>Live Demo</button></a>
                </div>
            </div>
            <div className={styles.pro}>
                <img src={pro2} alt="pro2" />
                <h3>E-Commerce Platform</h3>
                <p>Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard
                </p>
                <ul>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>JavaScript</li>
                </ul>
                <div className={styles.btn}>
                    <a href=""><button className={styles.glass}>Code</button></a>
                    <a href=""><button className={styles.dark}>Live Demo</button></a>
                </div>
            </div>
            <div className={styles.pro}>
                <img src={pro2} alt="pro3" />
                <h3>E-Commerce Platform</h3>
                <p>Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard
                </p>
                <ul>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>JavaScript</li>
                </ul>
                <div className={styles.btn}>
                    <a href=""><button className={styles.glass}>Code</button></a>
                    <a href=""><button className={styles.dark}>Live Demo</button></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects