import Nav from 'react-bootstrap/Nav';
import PropTypes from "prop-types";
import styles from "../css/Nav.module.css";

const NavBar = ({ page }) => {
  const listItems =
    [
      {
        href: "/",
        text: "Home",
        key: 1
      }, {
        href: "/experience",
        text: "Experience",
        key: 2
      }, {
        href: "/about",
        text: "About",
        key: 3
      }, {
        href: "/contact",
        text: "Contact",
        key: 4
      }, {
        href: "../assets/Docs/Alton_Michaux_Resume.docx",
        text: "Resume",
        key: 5
      }
    ]

  const filteredItems = listItems.filter((item) => {
    return (
      item.text !== page
    )
  })
  return (
    <div className={styles.navBar}>
      <span className={styles.brand}>Alton Michaux</span>
      <ul className={styles.navList}>
        {filteredItems.map((item) => {
          return (
            item.key === 5 ?
              <li key={item.key} className={styles.listItems}><a href={item.href} download>{item.text}</a></li> :
              <li key={item.key} className={styles.listItems}><a href={item.href} >{item.text}</a></li>
          )
        })}
      </ul>
    </div>
  )
}

Nav.propTypes = {
  page: PropTypes.string.isRequired
}

export default NavBar
