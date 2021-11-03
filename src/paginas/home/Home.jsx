import { useContext, useRef, useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  //criar as referenças
  const nome = useRef();
  const email = useRef();
  const tel = useRef();
  //------------------------------------

  //usestate variaveis

  const [ficheiro, setficheiro] = useState(null);

  //-------------------

  //criar funcao para enviar para a base de dados
  const Enviar = async () => {
    if (ficheiro) {
      const data = new FormData();
      const fileName = Date.now() + ficheiro.name;
      data.append("file", ficheiro);
      data.append("name", fileName);
      try {
        const res = await axios.post("uploadexcel/informacoes", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } catch (err) {
        console.log(err);
      }
    }
  };
  //-----------------------------

  //funcao para mudar ficheiro

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <h1>Seja bemvindo!</h1>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>150</h3>

                    <p>New Orders</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                  <a href="#" className="small-box-footer">
                    Mais info <i className="fas fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>
                      53<sup style={{ fontSize: "20px" }}>%</sup>
                    </h3>

                    <p>Bounce Rate</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars"></i>
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>44</h3>

                    <p>User Registrations</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-user-plus"></i>
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label for="exampleInputFile">
                    Carregar ficheiro em Excel
                  </label>
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
                    <button
                      className="btn btn-success"
                      onClick={() => Enviar()}
                    >
                      {" "}
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
