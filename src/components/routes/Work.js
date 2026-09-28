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
        problem: "A public data API was running on a single droplet with cron jobs and a staging setup nobody had fully mapped. It needed a real production home without a real production budget.",
        work: "Audited the existing infra first, which turned up an open firewall and an app that wasn't where the plan assumed. Then split the move into small tickets: private networking, managed Postgres with connection pooling, CI that tags every image by commit, scheduled ingestion with failure alerts, a backfill, and a DNS cutover.",
        result: "Production is on track to land around $160 to $180 a month. Any deploy can roll back to a known image in one step, and the container registry got cut roughly in half.",
        ongoing: true,
        key: 1
      }, {
        title: "Production hardening for a Django API",
        stack: ["Django", "DRF", "Gunicorn"],
        problem: "The API was built for development and quietly shipped that way. There was a public endpoint that accepted writes without auth, and settings that behaved differently per worker.",
        work: "Locked down the write path, made the app refuse to boot without a real secret key (a missing one was generating a different key per worker and breaking CSRF), turned on HSTS and TLS database connections, added throttling and health checks, and capped the CSV export behind a streamed response.",
        result: "No unauthenticated writes, predictable config across environments, and endpoints a load balancer can actually health check.",
        ongoing: true,
        key: 2
      }, {
        title: "Dependency triage that doesn't eat a sprint",
        stack: ["Rails", "Django", "Dependabot"],
        problem: "Dozens of open Dependabot PRs across two apps, all conflicting on the same lockfiles, and no clear read on which advisories actually mattered.",
        work: "Grouped bumps into merge batches that don't fight each other, checked whether each advisory was reachable from our code, and caught a coupled pin that was holding a whole chain of security fixes back.",
        result: "Closed 8+ advisories in one planned pass, and turned up 25 open vulnerabilities on a dev branch before they got to production.",
        key: 3
      }, {
        title: "Keeping a Heroku Rails app healthy",
        stack: ["Rails", "Heroku", "Elasticsearch", "AWS"],
        problem: "A stack upgrade blew past Heroku's slug size limit, search indices were disappearing from a self-hosted Elasticsearch box, and a security scan flagged missing headers.",
        work: "Traced the slug bloat to a 200MB+ test-only buildpack and moved it out of the production build. Wrote scripts to log, recreate and expire search indices. Tracked the missing headers to files served straight from S3 and fixed them at the CDN.",
        result: "Deploys under the limit again, search that recovers instead of paging someone, and a clean header scan.",
        key: 4
      }, {
        title: "AI tooling for an engineering team",
        stack: ["Claude Code", "Python", "GitHub API", "cron"],
        problem: "Code review, dependency triage, standups and ticket writing were eating a lead dev's week.",
        work: "Built a set of Claude Code skills tuned to specific codebases: a reviewer with peer and senior modes that drafts inline comments for a human to triage, a dependency reviewer that writes merge plans, a standup drafter that runs on cron off real commits and PRs, and Jira access for an org with no API access.",
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
