import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import React from "react";

function MyFooter() {
  return (
    <footer>
      <div className="container text-muted">
        <div className="row justify-content-center">
          <div className="col-8">
          <div className="mb-3" style={{ fontSize: "1.4rem" }}>
          <FontAwesomeIcon icon={faFacebook} className="me-3" />
          <FontAwesomeIcon icon={faInstagram} className="me-3" />
          <FontAwesomeIcon icon={faTwitter} className="me-3" />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
            <div className="row mb-3">
              <div className="col-12 col-md-3">
                <small>
                  <ul className="list-unstyled">
                    <li className="mb-2">Audio and Subtitles</li>
                    <li className="mb-2">Media Center</li>
                    <li className="mb-2">Privacy</li>
                    <li className="mb-2">Contact Us</li>
                  </ul>
                </small>
              </div>
              <div className="col-12 col-md-3">
                <small>
                  <ul className="list-unstyled">
                    <li className="mb-2">Audio Description</li>
                    <li className="mb-2">Investor Relations</li>
                    <li className="mb-2">Legal Notices</li>
                  </ul>
                </small>
              </div>
              <div className="col-12 col-md-3">
                <small>
                  <ul className="list-unstyled">
                    <li className="mb-2">Jobs</li>
                    <li className="mb-2">Help Center</li>
                    <li className="mb-2">Cookie</li>
                  </ul>
                </small>
              </div>
              <div className="col-12 col-md-3">
                <small>
                  <ul className="list-unstyled">
                    <li className="mb-2">Gift Card</li>
                    <li className="mb-2">Terms Of Use</li>
                    <li className="mb-2">Informations</li>
                  </ul>
                </small>
              </div>
            </div>
            <button className="btn btn-sm border-secondary text-muted ">
              <small>Service code</small>
            </button>
            
           
          </div>
        </div>
      </div>
    </footer>
    
  );
}

export default MyFooter;
