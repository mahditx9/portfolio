import {
  faCodepen,
  faDraft2digital,
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faContactBook,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { color, motion } from "framer-motion";

function App() {
  return (
    <Navbar />
    // <div className="container">
    //   <button className="btn">Hi</button>
    //   <br />
    //   <input type="text" placeholder="name" />
    // </div>
  );
}
function Navbar() {
  return (
    <div className="navbar">
      <h1 className="logo">
        <a href="/">Tx9</a>
      </h1>
      <nav className="nav-menu">
        <motion.a href="/" whileHover={{ animation: "menuIcon 1s" }}>
          <FontAwesomeIcon icon={faHome} className="icon"></FontAwesomeIcon>
        </motion.a>
        <motion.a href="/" whileHover={{ animation: "menuIcon 1s" }}>
          <FontAwesomeIcon icon={faUser} className="icon"></FontAwesomeIcon>
        </motion.a>
        <motion.a href="/" whileHover={{ animation: "menuIcon 1s" }}>
          <FontAwesomeIcon
            icon={faDraft2digital}
            className="icon"
          ></FontAwesomeIcon>
        </motion.a>
        <motion.a href="/" whileHover={{ animation: "menuIcon 1s" }}>
          <FontAwesomeIcon
            icon={faContactBook}
            className="icon"
          ></FontAwesomeIcon>
        </motion.a>
      </nav>
      <ul className="social-media">
        <li>
          <motion.a
            href="/"
            whileHover={{ color: "#0c0c", animation: "socialIcon 1s" }}
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="icon github"
            ></FontAwesomeIcon>
          </motion.a>
        </li>
        <li>
          <motion.a
            href="/"
            whileHover={{
              color: "#0c0c",
              animation: "socialIcon 1s",
            }}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="icon linkedin"
            ></FontAwesomeIcon>
          </motion.a>
        </li>
        <li>
          <motion.a
            href="/"
            whileHover={{ color: "#0c0c", animation: "socialIcon 1s" }}
          >
            <FontAwesomeIcon
              icon={faCodepen}
              className="icon codepen"
            ></FontAwesomeIcon>
          </motion.a>
        </li>
        <li>
          <motion.a
            href="/"
            whileHover={{ color: "#0c0c", animation: "socialIcon 1s" }}
          >
            <FontAwesomeIcon
              icon={faTelegram}
              className="icon telegram"
            ></FontAwesomeIcon>
          </motion.a>
        </li>
      </ul>
    </div>
  );
}

export default App;
