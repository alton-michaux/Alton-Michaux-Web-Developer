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
            I'm a backend lead developer at Code The Dream Labs, where I've been since 2021. I work mostly in Ruby on Rails and Django with React on the front end, and I spend a good chunk of my time on the stuff around the code: releases, infrastructure, reviews, and helping newer devs level up.
          </p>
          <p>
            I didn't start in tech. Before this I was working an outbound dock at Target. I went through Code The Dream's classes and practicum, started at Labs as a backend intern, and worked my way up to leading the team I joined.
          </p>
          <p>
            What I'm good at is taking a production app that's a little held together with tape and making it boring. Hardened configs, CI that can roll back, dependencies that don't rot, and releases that ship on a schedule.
          </p>
          <p>
            Lately I've been building AI into how I work, not just into what I ship. That means custom Claude Code tooling for code review, dependency triage and standups, tuned to the codebases I actually work in.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

About.propTypes = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired
}

export default About
