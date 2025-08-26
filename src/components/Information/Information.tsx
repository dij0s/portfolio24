import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileDownload,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

import "./Information.css";

function Information() {
  return (
    <div id="information-wrapper">
      <div id="information-catch">
        <h2>Hi, I'm Dion Osmani.</h2>
        <h1>
          I <span className="accent">solve problems</span> using data.
        </h1>
      </div>
      <div id="information-extra">
        <h4>Based in Sion, Switzerland.</h4>
        <div id="information-icons-wrapper">
          <div id="information-icons-links">
            <FontAwesomeIcon
              icon={faFileDownload}
              onClick={() =>
                window.open(
                  "https://github.com/dij0s/cv/releases/download/v1.1.0/OsmaniDion_CV_EN.pdf",
                  "_blank",
                )
              }
            />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/dion-osmani-60478720b/",
                  "_blank",
                )
              }
            />
            <FontAwesomeIcon
              icon={faGithub}
              onClick={() => window.open("https://github.com/dij0s", "_blank")}
            />
          </div>
          <div id="information-icons-contact">
            <h6>Reach out to me</h6>
            <FontAwesomeIcon
              icon={faPaperPlane}
              onClick={() =>
                (window.location.href = "mailto:dion.08osmani@gmail.com")
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
