import navStyles from "../css/Nav.module.css"
import styles from "../css/AppGrid.module.css"
import globalStyles from "../css/App.module.css"
import PropTypes from "prop-types"

const AppGrid = ({ rubyRef, nodeRef, djangoRef }) => {
  const nodeListItems =
    [
      {
        href: "https://playlist-ly.netlify.app/",
        text: "Playlist_me",
        key: 1
      }
    ]

  const nextListItems =
    [
      {
        href: "https://work-smarter-mu.vercel.app",
        text: "Work Smarter",
        key: 1
      }
    ]

  const rubyListItems =
    [
      {
        href: "https://chorbee.onrender.com/",
        text: "Chorbee",
        key: 1
      }
    ]

  const renderCards = (items, ref, id) => (
    <div className={styles.canvasDiv}>
      <div className={styles.projectDisplay} id={id} ref={ref}>
        {items.map((item) => (
          <a
            className={styles.projectLink}
            href={item.href}
            target="blank"
            key={item.key}
          >
            <div className={styles.appBlock}>
              <div className={[globalStyles.text, navStyles.listItems].join(' ')}>{item.text}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )

  return (
    <div className={styles.canvasGrid}>
      {renderCards(nodeListItems, nodeRef, "nodeDiv")}
      {renderCards(nextListItems, djangoRef, "nextDiv")}
      {renderCards(rubyListItems, rubyRef, "rubyDiv")}
    </div>
  )
}

AppGrid.propTypes = {
  nodeRef: PropTypes.object.isRequired,
  rubyRef: PropTypes.object.isRequired,
  djangoRef: PropTypes.object.isRequired
}

export default AppGrid
