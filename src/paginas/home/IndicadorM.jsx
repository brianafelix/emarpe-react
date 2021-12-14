import React from "react";
import AreChart from "../../components/recharts/AreChart";
import RadChar from "../../components/recharts/RadChar";
const IndicadorM = () => {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="content-header">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h1>Indicador Mensal</h1>
                </div>
              </div>
            </div>
          </div>
          <AreChart />
          <RadChar />
        </div>
      </div>
    </div>
  );
};
export default IndicadorM;
