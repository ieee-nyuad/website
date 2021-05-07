import styles from "./Header.module.css";

const Header = () => {
  return (
    <header
      id="site-header"
      className={styles.header}
    >
      <div className={styles.logo}>
        <div>
          <img width="60px" height="60px" src="/global/ieeenyuadlogo.png" />
        </div>
        <div className={styles.header_title}>IEEE @ NYUAD</div>
      </div>

      <nav>
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
      </nav>
    </header>
  );
};

export default Header;
