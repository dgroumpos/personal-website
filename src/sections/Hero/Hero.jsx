import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
// import { useTheme } from '../../common/ThemeContext';

function Hero() {
  // const { theme, toggleTheme } = useTheme();
  // const themeIcon = theme === 'light' ? sun : moon;
  // const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  // const githubIcon = theme === 'light' ? githubLight : githubDark;
  // const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const twitterIcon = twitterDark;
  const githubIcon = githubDark;
  const linkedinIcon = linkedinDark;
  return (
    <section id='hero' className=''>
      <div className=''>
        <img
          className=''
          src={heroImg}
          alt='Profile picture of Dimitris Groumpos'
        />
        <img
          className=''
          // src={themeIcon}
          alt='Color mode icon'
          // onClick={toggleTheme}
        />
      </div>
      <div className=''>
        <h1>
          Dimitris <br />
          Groumpos
        </h1>
        <h2>Full-Stack Developer</h2>
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
        <p className=''>
          Passionate Developer and QA engineer. A jack of all trades, and
          aspiring master of all!
        </p>
        <a href={CV} download>
          <button className=''>Resume</button>
        </a>
      </div>
    </section>
  );
}
export default Hero;
