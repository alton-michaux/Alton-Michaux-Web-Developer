import React from "react";
import NavBar from "../Nav";
import Footer from "../Footer";
import PropTypes from "prop-types";
import globalStyles from "../../css/App.module.css"
import { useEffect } from "react";
import styles from "../../css/About.module.css"

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
            I'm a fullstack developer with a focus on Ruby on Rails and Django, currently working at Code The Dream Labs across two projects: Vamos, a field operations platform serving social impact organizations, and Datos, a data management tool built to support it.
          </p>
          <p>
            On Vamos I own the release cycle from branching through production deployment, design and maintain RESTful APIs, and manage a mid sized team of developers. On Datos I work across the stack — building UI components in React, writing Docker deployment scripts, and managing staging environments on DigitalOcean.
          </p>
          <p>
            Outside of shipping code, I review PRs, mentor junior developers, and help keep our deployment infrastructure running across Heroku and DigitalOcean.
          </p>
        </div>
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
