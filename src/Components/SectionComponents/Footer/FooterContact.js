import React from "react";

function FooterContact() {
  return (
    <div className="container-footer">
      <div className="row footer-row">
        <div className="col-lg-3">
          <div>
            <h1>
              <b>CHICAGO</b>
            </h1>
            <p>@ 2022 CHICAGO ALL RIGHT RESERVED</p>
          </div>
        </div>
        <div className="col-lg-2 ">
          <div>
            <h5 className="m-0">
              <b>Contacts</b>
            </h5>
            <hr className="mt-0"></hr>
          </div>
          <div>
            <p>Contactl</p>
            <p>Contactl@yahoo.cpm</p>
          </div>
        </div>
        <div className="col-lg-2 ">
          <div>
            <h5 className="m-0">
              <b>Information</b>
            </h5>
            <hr className="mt-0"></hr>
          </div>
          <div>
            <p>Information</p>
            <p>Information@yahoo.cpm</p>
          </div>
        </div>
        <div className="col-lg-3 ">
          <div>
            <h5 className="m-0">
              <b>We are on Social Network</b>
            </h5>
            <hr className="mt-0"></hr>
          </div>
          <div>
            <p>Email</p>
            <p>email@yahoo.cpm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterContact;
