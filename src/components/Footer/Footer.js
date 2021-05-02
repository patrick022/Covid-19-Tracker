import React from "react";
import "./Footer.css";
import Link from '@material-ui/core/Link';

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Links</h4>
            <ui className="list-unstyled">
              <li>
                  <Link href="https://disease.sh/docs/" color="Blue" style={{ fontSize: 20 }}>
                    Covid-19-API
                  </Link>
              </li>
              <li></li>
              <li></li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <ui className="list-unstyled">
              <li></li>
              <li></li>
              <li></li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row" align="center">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} | Covid-19-Tracker
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;