
import React from 'react'
import styles from './Projects.module.css'
import pro1 from "/assets/projects/project.png"

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
                <h4>E-Commerce Platform</h4>
                <p>Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard
                </p>
                <ul>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>JavaScript</li>
                </ul>
                <div className={styles.btn}>
                    <button className={styles.glass}>Code</button>
                    <button className={styles.dark}>Live Demo</button>
                </div>
            </div>
            <div className={styles.pro}>
                <img src={pro1} alt="pro1" />
                <h4>E-Commerce Platform</h4>
                <p>Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard
                </p>
                <ul>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>JavaScript</li>
                </ul>
                <div className={styles.btn}>
                    <button className={styles.glass}>Code</button>
                    <button className={styles.dark}>Live Demo</button>
                </div>
            </div>
            <div className={styles.pro}>
                <img src={pro1} alt="pro1" />
                <h4>E-Commerce Platform</h4>
                <p>Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard
                </p>
                <ul>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>JavaScript</li>
                </ul>
                <div className={styles.btn}>
                    <button className={styles.glass}>Code</button>
                    <button className={styles.dark}>Live Demo</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects