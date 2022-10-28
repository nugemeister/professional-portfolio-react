import ContactForm from '../components/ContactForm';
import styles from './styles.css';

const Contact = () => {
    return (
        <div className={styles.Page}>
            <h3 className={styles.Header}>Contact Me</h3>
            <ContactForm />
        </div>
    )
}

export default Contact;