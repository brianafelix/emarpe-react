import React from "react";
import LineH from "../components/recharts/LineH";
const IndicadorA = () => {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div>
            <h1>Indicador Anual</h1>
          </div>
          <LineH />
        </div>
      </div>
    </div>
  );
};
export default IndicadorA;
