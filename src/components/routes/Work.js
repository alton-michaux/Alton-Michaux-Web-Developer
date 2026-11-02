import { useEffect } from "react";
import PropTypes from "prop-types";
import Nav from "../Nav";
import Footer from "../Footer";
import globalStyles from "../../css/App.module.css"
import styles from "../../css/Work.module.css"

const Work = ({ page, setPage }) => {
  useEffect(() => {
    setPage("Work")
  }, [setPage, page])

  const caseStudies =
    [
      {
        title: "Moving a civic data API to production on a nonprofit budget",
        stack: ["Django", "DigitalOcean", "Postgres", "GitHub Actions"],
        problem: "A public data API had outgrown its original setup. It needed a real production home without a real production budget.",
        work: "Mapped the existing infrastructure first, then split the move into small tickets: private networking, managed Postgres with connection pooling, CI that tags every image by commit, scheduled ingestion with failure alerts, a backfill, and a DNS cutover.",
        result: "Any deploy can roll back to a known image in one step, and leadership had hosting cost estimates before committing to the new setup.",
        ongoing: true,
        key: 1
      }, {
        title: "Production hardening for a Django API",
        stack: ["Django", "DRF", "Gunicorn"],
        problem: "The API started out with development-friendly defaults and needed to be ready for real production traffic.",
        work: "Tightened the production configuration so the app fails fast when required settings are missing, enforced TLS, added throttling and health checks, and moved the CSV export to a streamed response.",
        result: "Predictable config across environments, and endpoints a load balancer can actually health check.",
        ongoing: true,
        key: 2
      }, {
        title: "Dependency triage that doesn't eat a sprint",
        stack: ["Rails", "Django", "Dependabot"],
        problem: "Dependabot PRs piling up across two apps, all conflicting on the same lockfiles, and no clear read on which updates to take first.",
        work: "Grouped bumps into merge batches that don't fight each other, checked whether each advisory was reachable from our code, and untangled version pins that were holding other upgrades back.",
        result: "Updates go out in planned passes, with the effort spent where it actually matters.",
        key: 3
      }, {
        title: "Keeping a Heroku Rails app healthy",
        stack: ["Rails", "Heroku", "Elasticsearch"],
        problem: "A stack upgrade blew past Heroku's slug size limit, and search on a self-hosted Elasticsearch box needed a reliable way to recover.",
        work: "Traced the slug bloat to a test-only buildpack and moved it out of the production build. Wrote scripts to log, recreate and expire search indices.",
        result: "Deploys under the limit again, and search that recovers instead of paging someone.",
        key: 4
      }, {
        title: "AI tooling for an engineering team",
        stack: ["Claude Code", "Python", "GitHub API", "cron"],
        problem: "Code review, dependency triage, standups and ticket writing were eating a lead dev's week.",
        work: "Built a set of Claude Code skills tuned to specific codebases: a reviewer with peer and senior modes that drafts inline comments for a human to triage, a dependency reviewer that writes merge plans, a standup drafter that runs on cron off real commits and PRs, and a Jira helper that works from CSV exports.",
        result: "Reviews and standups start from evidence instead of memory, and a human still signs off on everything that gets posted.",
        key: 5
      }
    ]

  return (
    <div className={globalStyles.parentDiv}>
      <Nav
        page={page}
      ></Nav>
      <div className={globalStyles.mainPage}>
        <div className={styles.workBox}>
          <h1 className={globalStyles.greet}>Selected Work</h1>
          <p className={styles.intro}>A few problems I've solved recently. Client details are left out on purpose.</p>
          <ul className={styles.caseList}>
            {caseStudies.map((item) => {
              return (
                <li key={item.key} className={styles.caseCard}>
                  {item.ongoing && <span className={styles.ongoingTag}>In progress</span>}
                  <h2 className={styles.caseTitle}>{item.title}</h2>
                  <ul className={styles.stackList}>
                    {item.stack.map((tech) => (
                      <li key={tech} className={styles.stackTag}>{tech}</li>
                    ))}
                  </ul>
                  <p className={styles.caseText}><b>Problem.</b> {item.problem}</p>
                  <p className={styles.caseText}><b>What I did.</b> {item.work}</p>
                  <p className={styles.caseText}><b>{item.ongoing ? "So far." : "Result."}</b> {item.result}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

Work.propTypes = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired
}

export default Work
