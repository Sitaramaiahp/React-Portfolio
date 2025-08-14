
import React from 'react'
import styles from './Resume.module.css'
import resume from '/assets/resume.pdf'

const Resume = () => {
  return (
    <section id='resume' className={styles.resume}>
        <div className={styles.container}>
            <h2>Resume</h2>
            <p>Download my resume or view it below</p>
            <div className={styles.btn}>
              <a href={resume} download><button className={styles.dark}>Download Resume PDF</button></a>
            </div>
            <div className={styles.content1}>
                <h3>Resume Preview</h3>
                <iframe src={resume}></iframe>
            </div>
        </div>
    </section>
  )
}

export default Resume