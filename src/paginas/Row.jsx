import React from "react";

export default function Row() {
  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col-sm-3">
                <h1 className="m-0">Emarpe</h1>
              </div>
              <div className="col-sm-3">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Starter Page</li>
                </ol>

                <form>
                  <div className="card-body">
                    <div className="form-group">
                      <label for="exampleInputEmpresas1">Empresas</label>
                      <input
                        type="texts"
                        className="form-control"
                        id="exampleInputEmpresas1"
                        placeholder="empresas"
                      />
                    </div>
                    <div className="form-group">
                      <label for="exampleInputPassword1">Endereço</label>
                      <input
                        type="url"
                        className="form-control"
                        id="exampleInputEnderço1"
                        placeholder="Endereço"
                      />
                    </div>

                    <div className="form-group">
                      <label for="exampleInputContacto1">Contacto</label>
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputContacto1"
                        placeholder="Contacto"
                      />
                    </div>
                  </div>
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
