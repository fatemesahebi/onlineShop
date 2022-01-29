import styles from './footer.styles.module.css'
import faceBookLogo from './../../images/facebook.png'
import linkedinLogo from './../../images/linkedin.png'
import instagramLogo from './../../images/instagram.png'
import twitterLogo from './../../images/twitter.png'

function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.footer_body}>
                <div className={styles.footer_body_icons} >
                    <img className={styles.footer_socialLogo} src={instagramLogo}/>
                    <img className={styles.footer_socialLogo} src={faceBookLogo}/>
                    <img className={styles.footer_socialLogo} src={linkedinLogo}/>
                    <img className={styles.footer_socialLogo} src={twitterLogo}/>
                </div>
                <p>info@online-shop.com</p>
                <p>09456-773445</p>
                <p>ONLINE FORMS</p>
                <p>TERMS & CONDITION | PRIVACY POLICY</p>
                <p>DESIGN AND DEVELOP BY FATEME SAHEBI</p>

            </div>

        </div>
    )
}
export default Footer