import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.navigate}>
        <div className={styles.section_title}>Navigate</div>
        <br />
        <ul className={styles.navbar}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/events.html">Events</a>
          </li>
          <li>
            <a href="/join.html">Join</a>
          </li>
        </ul>
      </div>
      <div className={styles.contact}>
        <div className={styles.section_title}>Contact Us</div>
        <br />
        <a href="mailto:ieee.nyuad@nyu.edu">ieee.nyuad@nyu.edu</a>
        <br />
        <a
          href="https://join.slack.com/t/ieeenyuad/shared_invite/zt-p65jdubp-Z8GqctFqPDvHBqcoPbv8_A"
          target="blank"
        >
          Slack group
        </a>
      </div>
      <div className={styles.logo}>
        <div>
          <img width="60px" height="60px" src="/global/ieeenyuadlogo.png" />
        </div>
        <div>
          IEEE Student Branch
          <br />
          New York University, Abu Dhabi
          <br />
          <span className={styles.copyright}>
            &copy; Copyright 2021 NYUAD IEEE Student Branch
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
