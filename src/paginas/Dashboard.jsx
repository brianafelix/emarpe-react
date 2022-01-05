import React from "react";
import Scatte from "../components/recharts/Scatte";
import AreChart from "../components/recharts/AreChart";
import LineH from "../components/recharts/LineH";
import "../estilos/dashboard.css";
const Dashboard = () => {
  return (
    <div id="div" className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-0">
                  <div className="d-flex justify-content-between">
                    <p className="h2">Lucratividade</p>
                  </div>
                  <LineH />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-0">
                  <div className="d-flex justify-content-between">
                    <p class="h2">Lucratividade Acumulada</p>
                  </div>
                  <LineH />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-0">
                  <div className="d-flex justify-content-between">
                    <p class="h2">Fluxo de Caixa</p>
                  </div>

                  <LineH />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-0">
                  <div className="d-flex justify-content-between">
                    <p class="h2">Receita Bruta</p>
                  </div>
                  <LineH />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-0">
                  <div className="d-flex justify-content-between">
                    <p class="h2"> Deduçoes de Receita Bruta </p>
                  </div>

                  <LineH />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-0">
                  <div className="d-flex justify-content-between">
                    <p class="h2">Receita Liquida</p>
                  </div>
                  <LineH />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-0">
                  <div className="d-flex justify-content-between">
                    <p class="h2">Custos</p>
                  </div>

                  <LineH />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-0">
                  <div className="d-flex justify-content-between">
                    <p class="h2">Lucro Bruto</p>
                  </div>

                  <LineH />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-0">
                  <div className="d-flex justify-content-between">
                    <p class="h2">Outras Receitas Brutas</p>
                  </div>

                  <LineH />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-0">
                  <div className="d-flex justify-content-between">
                    <p class="h2">Despesas</p>
                  </div>
                  <LineH />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-0">
                  <div className="d-flex justify-content-between">
                    <p class="h2">Lucro Liquido</p>
                  </div>
                  <LineH />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-0">
                  <div className="d-flex justify-content-between">
                    <p class="h2">Distribuíçao dos Resultados</p>
                  </div>
                  <LineH />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-0">
                  <div className="d-flex justify-content-between">
                    <p class="h2">Markup</p>
                  </div>

                  <LineH />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-0">
                  <div className="d-flex justify-content-between">
                    <p class="h2">Ponto de Equilíbrio</p>
                  </div>

                  <LineH />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="info-box">
              <span className="info-box-icon bg-info elevation-1">
                <i className="bi bi-bank2"></i>
              </span>

              <div className="info-box-content">
                <span className="info-box-text">Empresas</span>

                <span className="info-box-number">45</span>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="info-box mb-4">
              <span className="info-box-icon bg-warning elevation-1">
                <i className="fas fa-users"></i>
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Clientes</span>
                <span className="info-box-number">2,000</span>
              </div>
            </div>
          </div>

          <div
            className="
               col-md-4"
          >
            <div className="info-box mb-2">
              <span className="info-box-icon bg-warning elevation-1">
                <i className="bi bi-person-fill"></i>
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Funcionarios</span>
                <span className="info-box-number">2,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
