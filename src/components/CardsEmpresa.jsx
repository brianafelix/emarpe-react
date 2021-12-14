import React, { useState } from "react";

export default function CardsEmpresa(props) {
  return (
    <>
      <div className={`callout  ${props.class}`} style={{ marginTop: "15px" }}>
        <h5>
          <a href="#">{props.empresas ? props.empresas.empresa : ""}</a>
        </h5>
        <p>
          {props.empresas ? props.empresas.endereco : ""} <br></br>
          {props.empresas ? props.empresas.email : ""}
        </p>

        <div className="row">
          <div className="col-md-3">
            {" "}
            <div className="image">
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_813879-MLB40796811578_022020-O.webp"
                className="img-circle elevation-2"
                height="30px"
                alt="User Image"
              />{" "}
            </div>
          </div>
          {/* <div className="col-md-3">
            <span style={{ marginLeft: "8px" }}>
              {" "}
              <a href="">
                {" "}
                <i className="text-success fa fa-phone"></i>{" "}
              </a>{" "}
            </span>
          </div>
          <div className="col-md-3">
            <span style={{ marginLeft: "8px" }}>
              {" "}
              <a href="">
                {" "}
                <i className="text-info fa fa-video"></i>{" "}
              </a>{" "}
            </span>
          </div> */}

          <div className="col-md-3">
            <span style={{ marginLeft: "8px" }}>
              {" "}
              <a href="">
                {" "}
                <i className="text-warning fa fa-envelope"></i>{" "}
              </a>{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
