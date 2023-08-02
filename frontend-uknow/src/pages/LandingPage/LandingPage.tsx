import { Link } from 'react-router-dom'
import { ButtonP } from '../../components/ButtonP'
import { ButtonS } from '../../components/ButtonS'
import styles from './LandingPage.module.css'
import Logo from '../../assets/LogoGris.png'

export const LandingPage = () => {
  return (
    <>
      {/* <div className={styles.interrogantes}>
        <div className={styles.i1}>?</div><div className={styles.i2}>?</div><div className={styles.i3}>?</div>
      </div> */}
      <div className={styles.container}>
        <section className={styles.logo}>
          <img src={Logo} alt='logo' className={styles.logoImg} />
          <h1 className={styles.textLogoAnimation}>
            <span className={styles.u}>u</span>
            <span className={styles.guion}>-</span>
            <span className={styles.k}>k</span><span className={styles.n}>n</span><span className={styles.o}>o</span><span className={styles.w}>w</span>
          </h1>
        </section>
        <section className='{styles.buttons'>
          <Link to='/auth'>
            <ButtonP className={styles.button} text='Get Started' />
          </Link>
          <br /><br />
          <Link to='/home'>
            <ButtonS text='Explore'/>
          </Link>
        </section>
      </div>
    </>
  )
}
