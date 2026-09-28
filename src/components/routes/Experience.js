import { useEffect } from "react";
import PropTypes from "prop-types";
import Nav from "../Nav";
import Footer from "../Footer";
import globalStyles from "../../css/App.module.css"
import styles from "../../css/Experience.module.css"

const Experience = ({ page, setPage }) => {
  useEffect(() => {
    setPage("Experience")
  }, [setPage, page])

  const h2dataItems =
    [
      {
        text: "Lead developer on the rewrite, from data ingestion through the public API",
        key: 1
      }, {
        text: "Planning and running the production move to DigitalOcean: private networking, managed Postgres with connection pooling, and a DNS cutover",
        key: 2
      }, {
        text: "Built CI that tags every image by commit so any deploy can roll back in one step",
        key: 3
      }, {
        text: "Hardening the Django app for production: secret handling, HSTS and TLS, auth gaps, throttling, and health checks",
        key: 4
      }, {
        text: "Track down data bugs in the DOL feeds, from misspelled source fields to wage values losing their cents",
        key: 5
      }, {
        text: "Put together hosting cost estimates for leadership before we committed to the new setup",
        key: 6
      }
    ]

  const listItems =
    [
      {
        text: "Own the release cycle end to end: 40+ releases since 2024, from release branch to production, hotfixes and rollbacks included",
        key: 1
      }, {
        text: "Senior reviewer on a codebase with 100+ contributors over its lifetime",
        key: 2
      }, {
        text: "Run the team's scrum, backlog refinement and sprint planning",
        key: 3
      }, {
        text: "Keep production healthy on Heroku: stack upgrades, slug size limits, Elasticsearch recovery, and email deliverability",
        key: 4
      }, {
        text: "Security and privacy work: dependency and CVE triage, security headers, and encryption reviews",
        key: 5
      }, {
        text: "Develop features across the full stack, with RSpec and Capybara tests and Swagger API docs",
        key: 6
      }
    ]

  const mentorItems =
    [
      {
        text: "Regular 1:1s and quarterly evidence-based evaluations for the apprentices on my team",
        key: 1
      }, {
        text: "Interview and assess apprenticeship candidates, and sit on staff hiring panels",
        key: 2
      }, {
        text: "Run group mock interviews and taught a practicum course in 2026",
        key: 3
      }, {
        text: "Built AI tooling for code review, dependency triage and standups",
        key: 4
      }
    ]

  return (
    <div className={globalStyles.parentDiv}>
      <Nav
        page={page}
      ></Nav>
      <div className={globalStyles.mainPage}>
        <div className={globalStyles.mainPageGreetBox}>
          <h1 className={globalStyles.greet}>
            Professional Experience
          </h1>
          <p className={globalStyles.greet}>Code The Dream Labs (<i>October 2021 - present</i>)</p>
          <p className={[globalStyles.greet, globalStyles.text].join(' ')}><a href="https://labs.codethedream.org/portfolios/alton-michaux" target="blank">Backend Lead Developer</a> (<i>October 2022 - present</i>)</p>
          <p className={[globalStyles.greet, globalStyles.text].join(' ')}>Apprentice (<i>October 2021 - October 2022</i>)</p>
          <p className={globalStyles.greet} style={{ marginTop: '32px' }}>Vamos</p>
          <p className={[globalStyles.greet, globalStyles.text].join(' ')}><a href="https://sites.google.com/codethedream.org/vamos-project-wiki/" target="none">Vamos</a> is a field operations platform for social impact organizations. Rails, React, Postgres and Elasticsearch.</p>
          <ul className={[styles.taskList, globalStyles.greet].join(' ')}>
            {listItems.map((item) => {
              return (
                <li key={item.key} className={styles.taskItem}>{item.text}</li>
              )
            })}
          </ul>
          <p className={globalStyles.greet} style={{ marginTop: '32px' }}>H2Data (<i>2024 - present</i>)</p>
          <p className={[globalStyles.greet, globalStyles.text].join(' ')}><a href="https://hammerhead-app-sl9sl.ondigitalocean.app/app/search/" target="blank">H2Data</a> ingests U.S. Department of Labor H-2A and H-2B visa data and makes it searchable. Django, DRF, Postgres and DigitalOcean.</p>
          <ul className={[styles.taskList, globalStyles.greet].join(' ')}>
            {h2dataItems.map((item) => {
              return (
                <li key={item.key} className={styles.taskItem}>{item.text}</li>
              )
            })}
          </ul>
          <p className={globalStyles.greet} style={{ marginTop: '32px' }}>Team lead and mentoring</p>
          <ul className={[styles.taskList, globalStyles.greet].join(' ')}>
            {mentorItems.map((item) => {
              return (
                <li key={item.key} className={styles.taskItem}>{item.text}</li>
              )
            })}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

Experience.propTypes = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired
}

export default Experience
