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
            I'm a back-end developer with a focus on Ruby on Rails, currently working on the Vamos app at Code The Dream Labs — a field operations platform serving social impact organizations.
          </p>
          <p>
            Day-to-day I own the release cycle from branching through production deployment, design and maintain RESTful APIs, write RSpec and Capybara test suites, and have recently been integrating Google Gemini to power AI features within the app. I also contribute on the frontend using React and JavaScript.
          </p>
          <p>
            Outside of shipping code, I review PRs, mentor junior developers, and help keep our deployment infrastructure running across Heroku and DigitalOcean.
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
