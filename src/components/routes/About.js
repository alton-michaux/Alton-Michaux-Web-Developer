import React from "react";
import NavBar from "../Nav";
import Footer from "../Footer";
import PropTypes from "prop-types";
import globalStyles from "../../css/App.module.css"
import { useEffect } from "react";
import styles from "../../css/About.module.css"
import LanguageContainer from "../LanguageContainer";

const About = ({ page, setPage }) => {
  useEffect(() => {
    setPage("About")
  }, [setPage, page])

  return (
    <div className={globalStyles.parentDiv}>
      <NavBar
        page={page}
      ></NavBar>
      <div className={styles.aboutMeGreetBox}>
        <div className={styles.aboutMeTextBox}>
          <p>
            I am an experienced back-end developer with expertise in Object-Oriented Programming (OOP), focusing on Ruby on Rails technologies.
          </p>
          <p>
            My knowledge includes MVC concepts, ORM, and RESTful APIs.
          </p>
          <p>
            Additionally, I have practical experience in front-end development using HTML, CSS, and JavaScript.
          </p>
          <p>
            As a self-motivated individual constantly eager to expand my skill set and enhance my existing strengths, I take great pride in delivering efficient business solutions to my clients and employers.
          </p>
        </div>
        <LanguageContainer></LanguageContainer>
      </div>
      <Footer></Footer>
    </div>
  )
}

About.prototype = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired
}

export default About
