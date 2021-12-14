import { useContext, useRef, useEffect, useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import CardsEmpresa from "../../componentes/CardsEmpresa";

export default function Empresas() {
  //criar as referenças
  const nome = useRef();
  const email = useRef();
  const endereco = useRef();
  //------------------------------------

  //usestate variaveis
  const [ficheiro, setficheiro] = useState(null);
  const [empresa, setempresa] = useState([]);
  const [allempresa, setallempresa] = useState([]);
  const [loading, setloading] = useState("jlk");

  useEffect(() => {
    const buscarEmpresa = async () => {
      try {
        const res = await axios.get("empresa/");
        setallempresa(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    buscarEmpresa();
  }, [loading]);

  // funcoes de varias notificações
  var toaststate;
  const aguarde = () => {
    toaststate = toast.loading("aguarde...");
  };
  const successo = () => {
    toast.update(toaststate, {
      render: "Guardado com successo",
      type: "success",
      isLoading: false,
      autoClose: 1300,
    });
  };

  const erro = () => {
    toast.update(toaststate, {
      render: "Houve um erro",
      type: "error",
      isLoading: false,
      autoClose: 1300,
    });
  };

  //criar funcao para enviar para a base de dados
  const Enviar = async () => {
    if (
      ficheiro &&
      nome.current.value &&
      email.current.value &&
      endereco.current.value
    ) {
      aguarde();
      const data = new FormData();
      const fileName = Date.now() + ficheiro.name;
      data.append("file", ficheiro);
      data.append("name", fileName);
      data.append("empresa", nome.current.value);
      data.append("email", email.current.value);
      data.append("endereco", endereco.current.value);
      try {
        const res = await axios.post("uploadexcel/informacoes", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        successo();
        setloading("j");
      } catch (err) {
        erro();
        console.log(err);
      }
    } else {
      toast.error("Preenche todos os campos", {
        position: "top-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  //-----------------------------

  return (
    <>
      <ToastContainer />
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Empersas</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="info-box">
                  <button
                    type="button"
                    className="btn btn-block btn-outline-success "
                    data-toggle="modal"
                    data-target="#novaempresa"
                  >
                    <i className="fa fa-plus"></i>
                  </button>

                  <div className="info-box-content">
                    <span className="info-box-text">
                      Adicionar Nova Empresa
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              {allempresa.map((n) => (
                <div className="col-md-4">
                  {" "}
                  <CardsEmpresa
                    empresas={n}
                    saude="mal"
                    class="callout-success"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="novaempresa"
        tabindex="-1"
        role="dialog"
        aria-labelledby="novaempresaTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="novaempresaTitle">
                Adicionar Nova empresa
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4">
                  {" "}
                  <div className="form-group">
                    <label for="">Empresa</label>
                    <input
                      className="form-control"
                      placeholder="Nome da Empresa"
                      type="text"
                      ref={nome}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  {" "}
                  <div className="form-group">
                    <label for="">Email</label>
                    <input
                      className="form-control"
                      placeholder="email"
                      type="text"
                      ref={email}
                    />
                  </div>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-2"></div>

                <div className="col-md-8">
                  <label for="">Endereço</label>
                  <textarea
                    className="form-control"
                    name=""
                    id=""
                    ref={endereco}
                  ></textarea>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-2"></div>
                <div className="col-md-4">
                  <div className="form-group mt-3">
                    <label for="">Carregar Balancete (ficheiro Excel)</label>
                    <div className="input-group">
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="exampleInputFile"
                          accept=".xlsx"
                          onChange={(e) => setficheiro(e.target.files[0])}
                        />
                        <label
                          className="custom-file-label"
                          for="exampleInputFile"
                        >
                          {ficheiro ? ficheiro.name : " "} --Choose file
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => Enviar()}
                className="btn btn-primary"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
