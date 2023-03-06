import Head from "next/head";
import styles from "../styles/Socials.module.scss";

const Socials = ({ socials }) => {

    socials = socials.socials

    if (!socials) {
        return null;
    }

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
            </Head>
            <ul className={styles.socials}>
                {socials && socials.map((item) => (
                    <li key={item.id}>
                        <a href={item.path} target="_blank" rel="noopener noreferrer">
                            <i className={`fab fa-${item.icon}`} aria-hidden="true" />
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Socials;