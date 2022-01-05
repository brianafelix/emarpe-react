import React from "react";
import "../estilos/home.css";

export default function Aside() {
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="home" className="brand-link">
          <span className="brand-text font-weight-light"> EMARPE</span>
        </a>

        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="Usuario" className="d-block">
                Usuario
              </a>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <a href="Home" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt"></i>

                  <p>Dashboard</p>
                </a>
              </li>

              <li className="nav-item">
                <a href="balancetes" className="nav-link nav-link-active">
                  <i className="nav-icon fas fa-book"></i>
                  <p>Balancetes</p>
                </a>
              </li>

              <li className="nav-item">
                <a href="parametrizacao" className="nav-link">
                  <i className="nav-icon fas fa-copy"></i>

                  <p>Parametrizacao</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="ajudas" className="nav-link">
                  <i className="nav-icon bi  bi-hand-thumbs-up-fill"></i>

                  <p>Ajudas</p>
                </a>
              </li>

              <li className="nav-item">
                <a href="contabilidades" className="nav-link">
                  <i className="nav-icon fas fa-edit"></i>
                  <p>Contabilidades</p>
                </a>
              </li>

              <li className="nav-item">
                <a href="usuario" className="nav-link">
                  <i className="nav-icon bi bi-person-lines-fill"></i>

                  <p>Usuario</p>
                </a>
              </li>

              <li id="li" class="nav-item menu-open">
                <a id="a" href="#" class="nav-link active">
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Monitoramento
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li className="nav-item">
                    <a href="empresas" className="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Empresas</p>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a href="indicador_Mensal" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Indicador Mensal</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="indicador_Trimestral" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Indicador Trimestral</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="indicador_Anual" class="nav-link ">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Indicador Anual </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="planos" className="nav-link">
                      <i className="nav-icon fas fa-file"></i>

                      <p>Plano de Conta</p>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="variaveis" className="nav-link">
                      <i className="nav-icon fas fa-chart-pie"></i>
                      <p>DRE</p>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="variaveis" className="nav-link">
                      <i className="nav-icon bi bi-back"></i>
                      <p>Central de Relatorios</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
