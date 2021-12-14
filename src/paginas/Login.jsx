import React from "react";
const Login = () => {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div class="login-box">
            <div class="card card-outline card-primary">
              <div class="card-header text-center">
                <a href="#" class="h1">
                  <b>Emarpe</b>
                </a>
              </div>
              <div class="card-body">
                <p class="login-box-msg">Faça login para iniar sessao</p>

                <form action="../../index3.html" method="post">
                  <div class="input-group mb-2">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                    />
                    <div class="input-group-append">
                      <div class="input-group-text">
                        <span class="fas fa-envelope"></span>
                      </div>
                    </div>
                  </div>
                  <div class="input-group mb-3">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                    />
                    <div class="input-group-append">
                      <div class="input-group-text">
                        <span class="fas fa-lock"></span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div className="col-8">
                      <div class="icheck-primary">
                        <input type="checkbox" id="remember" />
                        <label for="remember"> Lembra de mim</label>
                      </div>
                    </div>

                    <div class="col-4">
                      <button type="submit" class="btn btn-primary btn-block">
                        Entar
                      </button>
                    </div>
                  </div>
                </form>

                <div class="social-auth-links text-center mt-2 mb-3">
                  <a href="#" class="btn btn-block btn-primary">
                    <i class="fab fa-facebook mr-2"></i> Faça login usando
                    Facebook
                  </a>
                  <a href="#" class="btn btn-block btn-danger">
                    <i class="fab fa-google-plus mr-2.."></i> Faça login usando
                    Google+
                  </a>
                </div>

                <p class="mb-1">
                  <a href="forgot-password.html"> Esquici a minha senha</a>
                </p>
                <p class="mb-0">
                  <a href="register.html" class="text-center">
                    Registre uma nova assinatura
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
