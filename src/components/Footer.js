import styles from "../css/Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer id="footer-text">Alton Michaux {new Date().getFullYear()}</footer>
    </div>
  )
}

export default Footer
