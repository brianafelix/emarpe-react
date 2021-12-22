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
            <div className="row"></div>
          </div>
        </div>
      </div>
    </>
  );
}
