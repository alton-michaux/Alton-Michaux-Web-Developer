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
        text: "Optimize/Maintain API infrastructure",
        key: 1
      }, {
        text: "Develop new features",
        key: 2
      }, {
        text: "Write tests using RSPEC and Capybara",
        key: 3
      }, {
        text: "Write documentation",
        key: 4
      }, {
        text: "Work with the team to implement/debug features",
        key: 5
      }, {
        text: "Actively contribute to QA process",
        key: 6
      }, {
        text: "Perform code reviews",
        key: 7
      }, {
        text: "Perform developer evaluations",
        key: 8
      }, {
        text: "Mentor junior developers",
        key: 9
      }, {
        text: "Collaborate with management to meet deadlines",
        key: 10
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
