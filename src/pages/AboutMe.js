// PLACEHOLDER FOR STYLING
import styles from './styles.css';

const AboutMe = () => {
    return (
        <div className={styles.Page}>
            <img className={styles.Img} src={process.env.PUBLIC_URL + '/assets/images/ProfilePic.jpg'} alt='Ali Nugen Profile' title='Ali Nugen Profile' />
            <h3 className={styles.Header}>About Me</h3>
            <p className={styles.Text}>
                Welcome to my page! I'm Ali - a technologist who enjoys building new solutions to challenging problems.👋✋👋
                <br />
                Currently, I am working towards completion of the University of Washington's Full Stack Application Development Bootcamp. Outside of bootcamp, I work at a fintech startup in the Web3 space, where I am loving the complexity and opportunity this space presents. My formal background is in Finance and Accounting from the Kelley School of Business at Indiana University. I've worked my whole career in tech - it's safe to say I've been bit by the tech bug and don't plan on turning back anytime soon. 

                <br />
                My strengths come from the unique experiences I've had since early in my career - working as an international strategy consultant, building tech solutions for some of the world's largest companies. I am particularily passionate about enabling organizational anticipation and adoption of the emerging digital asset economy.

                <br />
                I began to take development more seriously the closer I got to the core of the tech stack over time. I am energized by the build process and love nothing more than an abstract challenge to tackle with code.

                <br />

                Outside of work or coding, you can find me chasing my dog on a hike or enjoying travel with family and friends.
            </p>
        </div>
    )
}

export default AboutMe;