import AppGrid from "./AppGrid.js"
import React, { useRef } from "react";
import styles from "../css/Dropdown.module.css"

const Dropdown = () => {
  const rubyRef = useRef(null)
  const nodeRef = useRef(null)
  const djangoRef = useRef(null)

  const handleSelect = (selected) => {
    const dropdownValue = selected.target.value
    const refs = { "Node/Express": nodeRef, "Ruby on Rails": rubyRef, "Django": djangoRef }

    Object.entries(refs).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.style.display = key === dropdownValue ? "grid" : "none";
        ref.current.style.padding = key === dropdownValue ? "20px" : "";
      }
    })
  }

  return (
    <>
      <div className={[styles.selectBox]}>
        <select className={[styles.projectPulldown]} id="projects" defaultValue={"undefined"} onChange={selected => handleSelect(selected)}>
          <option value={"undefined"} className={styles.projects} disabled>Select a stack</option>
          <option value="Node/Express" className={styles.projects}>Node/Express</option>
          <option value="Django" className={styles.projects}>Django</option>
          <option value="Ruby on Rails" className={styles.projects}>Ruby on Rails</option>
        </select>
      </div>
      <AppGrid
        rubyRef={rubyRef}
        nodeRef={nodeRef}
        djangoRef={djangoRef}
      ></AppGrid>
    </>
  )
}

export default Dropdown
