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

  const listItems =
    [
      {
        text: "Develop new features across the full stack",
        key: 1
      }, {
        text: "Optimize and maintain API infrastructure",
        key: 2
      }, {
        text: "Write and maintain tests using RSpec and Capybara",
        key: 3
      }, {
        text: "Manage the full release lifecycle — branching, release notes, staging and production deployments, and hotfixes",
        key: 4
      }, {
        text: "Triage and resolve production incidents including Elasticsearch outages and database migration failures",
        key: 5
      }, {
        text: "Perform code reviews and uphold code quality standards",
        key: 6
      }, {
        text: "Mentor junior developers and lead apprentice evaluations",
        key: 7
      }, {
        text: "Integrate LLM APIs (Google Gemini) to build AI-powered features",
        key: 8
      }, {
        text: "Document APIs using Swagger and manage deployment infrastructure across Heroku and DigitalOcean",
        key: 9
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
          <p className={[globalStyles.greet, globalStyles.text].join(' ')}><a href="https://labs.codethedream.org/portfolios/alton-michaux" target="blank">Backend Developer</a> on the <a href="https://sites.google.com/codethedream.org/vamos-project-wiki/" target="none">Vamos app</a></p>
          <ul className={[styles.taskList, globalStyles.greet].join(' ')}> A short list of my duties and contributions to Vamos include:
            {listItems.map((item) => {
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
