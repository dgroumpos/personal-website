import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import twitterIcon from '../../assets/twitter-light.svg';
import githubIcon from '../../assets/github-light.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';
import CV from '../../assets/cv.pdf';

function Hero() {
  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt='Profile picture of Dimitris Groumpos'
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt='Color mode icon'
        />
      </div>
      <div className={styles.info}>
        <h1>
          Dimitris <br />
          Groumpos
        </h1>
        <h2>iOS Developer</h2>
        <span>
          <a href='https://x.com/dimgroumpos' target='_blank'>
            <img src={twitterIcon} alt='Twitter icon' />
          </a>
          <a href='https://github.com/dgroumpos' target='_blank'>
            <img src={githubIcon} alt='Github icon' />
          </a>
          <a
            href='https://www.linkedin.com/in/dimitrios-groumpos-304b42153/'
            target='_blank'
          >
            <img src={linkedinIcon} alt='Linkedin icon' />
          </a>
        </span>
        <p>
          Passionate Developer and QA engineer. A jack of all trades, and future
          master of all!
        </p>
        <a href={CV} download>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  );
}
export default Hero;
