import React from "react";
import "../estilos/login.css";
const Login = () => {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <body id="body" className="hold-transition login-page">
            <div className="row">
              <div className="login-box">
                <div className="card card-outline card-primary">
                  <div className="card-header text-center">
                    <a href="#" className="h1">
                      <b>Emarpe</b>
                    </a>
                  </div>
                  <div id="div" className="card-body">
                    <p className="h4"> Faça login para iniciar sessao</p>

                    <form action="" method="post">
                      <div className="input-group mb-2">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-envelope"></span>
                          </div>
                        </div>
                      </div>
                      <div className="input-group mb-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Senha"
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-lock"></span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-8">
                          <div className="icheck-primary">
                            <input type="checkbox" id="remember" />
                            <label for="remember"> Lembrar</label>
                          </div>
                        </div>

                        <div className="col-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                          >
                            Entar
                          </button>
                        </div>
                      </div>
                    </form>
                    <p className="mb-1">
                      <a href="forgot-password.html"> Esquici a minha senha</a>
                    </p>
                    <p className="mb-0">
                      <a href="register.html" className="text-center">
                        Registre uma nova assinatura
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </div>
      </div>
    </div>
  );
};
export default Login;
