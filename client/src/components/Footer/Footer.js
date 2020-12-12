import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import styles from '../../assets/scss/footer.module.scss'


export default function Footer() {


  return (
    <div className={styles.footer_Container}>
    <a href="https://github.com/PelosiTech/Rubiks-World-Site" className={styles.smallContainer}><GitHubIcon  fontSize="large" className={styles.logos}/></a>
    <a href="https://www.linkedin.com/in/carlopelosi/" className={styles.smallContainer}><LinkedInIcon  fontSize="large" className={styles.logos}/></a>
    <a href="http://carlopelosi.com/#about-me" className={styles.smallContainer}><img height="60px" src="https://www.shareicon.net/data/128x128/2016/06/20/606409_angellist_4096x4096.png" className={styles.logos} alt='url'/></a>
    </div>
  )
}
