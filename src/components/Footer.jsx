import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="row justify-content-center mt-5">
        <div className="col col-6">
          <div className="row">
            <div className="col mb-2">
              <i className="bi bi-facebook footer-icon me-2"></i>
              <i className="bi bi-instagram footer-icon me-2"></i>
              <i className="bi bi-twitter-x footer-icon me-2"></i>
              <i className="bi bi-youtube footer-icon"></i>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p><button className="link-button">Audio and Subtitles</button></p>
                  <p><button className="link-button">Media Center</button></p>
                  <p><button className="link-button">Privacy</button></p>
                  <p><button className="link-button">Contact us</button></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p><button className="link-button">Audio Description</button></p>
                  <p><button className="link-button">Investor Relations</button></p>
                  <p><button className="link-button">Legal Notices</button></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p><button className="link-button">Help Center</button></p>
                  <p><button className="link-button">Jobs</button></p>
                  <p><button className="link-button">Cookie Preferences</button></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p><button className="link-button">Gift Cards</button></p>
                  <p><button className="link-button">Terms of Use</button></p>
                  <p><button className="link-button">Corporate Information</button></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col mb-2">
              <button type="button" className="btn btn-sm footer-button rounded-0 mt-3">
                Service Code
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col mb-2 mt-2 copyright">
              © 1997-2023 Netflix, Inc.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;