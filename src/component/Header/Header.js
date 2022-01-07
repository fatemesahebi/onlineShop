import styles from "./header.styles.module.css";

function Header(){
    return(
        <div>
            <header>
                <div className={styles.headerBody}>
                    <div className={styles.headerBody__text}>
                        <h2>every thing that you need</h2>
                        <button className={'btn__gray'}>LOG IN</button>
                    </div>

                </div>
            </header>
        </div>
    )
}
export default Header