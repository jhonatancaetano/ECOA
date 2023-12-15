import styles from "./Home.module.css";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [eventos, setDados] = useState(null);

  useEffect(() => {
    // Função para fazer a requisição ao endpoint
    async function fetchData() {
      try {
        const response = await axios.get("http://172.105.154.34:3009/evento");
        setDados(response.data); // Define os dados recebidos no estado
      } catch (error) {
        console.error("Erro ao obter dados:", error);
      }
    }

    fetchData(); // Chama a função para fazer a requisição ao carregar o componente
  }, []);

  const handleSubmit = async () => {
    const novoEvento = {
      titulo: titulo.current.value,
      palestrante: palestrante.current.value,
      // Adicione os outros campos do formulário aqui
    };

    try {
      const response = await axios.post(
        "http://172.105.154.34:3009/evento",
        novoEvento
      );
      console.log("Novo evento criado:", response.data);
      // Faça algo com a resposta, se necessário
    } catch (error) {
      console.error("Erro ao criar novo evento:", error);
    }
  };

  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const dateRef1 = useRef(null);
  const timeRef1 = useRef(null);
  const titulo = useRef(null);
  const palestrante = useRef(null);
  const local = useRef(null);
  const detalhes = useRef(null);
  const link = useRef(null);
  const video = useRef(null);
  const codigoi = useRef(null);
  const codigof = useRef(null);

  const handleDateTimeChange = () => {
    const selectedDate = dateRef.current.value;
    const selectedTime = timeRef.current.value;

    const selectedDateTime = new Date(`${selectedDate}T${selectedTime}`);
    alert("Data e hora de início selecionadas!", selectedDateTime);
  };

  const handleDateTimeChange1 = () => {
    const selectedDate1 = dateRef1.current.value;
    const selectedTime1 = timeRef1.current.value;

    const selectedDateTime1 = new Date(`${selectedDate1}T${selectedTime1}`);
    alert("Data e hora de fim selecionadas!", selectedDateTime1);
  };

  const handleClick1 = () => {
    dateRef.current.value = "";
    timeRef.current.value = "";
    dateRef1.current.value = "";
    timeRef1.current.value = "";
    inputRef.current.value = "";
    titulo.current.value = "";
    palestrante.current.value = "";
    local.current.value = "";
    detalhes.current.value = "";
    link.current.value = "";
    video.current.value = "";
    codigoi.current.value = "";
    codigof.current.value = "";
  };

  const inputRef = useRef(null);

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    console.log("Opção selecionada:", selectedOption);
    // Faça algo com a opção selecionada, como enviar para uma função ou componente pai
  };

  const handleSelectChange1 = (event) => {
    const selectedOption = event.target.value;
    console.log("Opção selecionada:", selectedOption);
    // Faça algo com a opção selecionada, como enviar para uma função ou componente pai
  };

  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];
    // Faça o que for necessário com o arquivo selecionado (por exemplo, enviar para um servidor)
    console.log("Arquivo selecionado:", selectedFile);
  };

  return (
    <header>
      <div className={styles.index}>
        <div className={styles.div}>
          <div className={styles.overlap}>
            <p className={styles.meuseventosnovo}>
              <span className={styles.textwrapper}>Meus eventos &gt;</span>
              <span className={styles.span}> Novo evento</span>
            </p>
            <a href="http://localhost:3000/ver">
              <img
                className={styles.arrowleftcircle}
                alt="Arrow left circle"
                src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/655fc39084f33ca76ac7e557/img/arrow-left-circle-1.svg"
              />
            </a>
            <select
              className={styles.overlapgroup}
              onChange={handleSelectChange1}
            >
              <option value="">Selecione</option>
              <option value="option1">1</option>
              <option value="option2">2</option>
              <option value="option3">3</option>
            </select>

            <div className={styles.textwrapper3}>Título</div>
            <div className={styles.textwrapper4}>Palestrante(s)</div>
            <div className={styles.textwrapper5}>Local</div>
            <div className={styles.textwrapper6}>Nome da Validação 1</div>
            <div className={styles.textwrapper7}>Nome da Validação 2</div>
            <div className={styles.textwrapper8}>Categoria</div>
            <div className={styles.textwrapper9}>Detalhes</div>
            <div className={styles.textwrapper10}>Tags</div>
            <div className={styles.textwrapper11}>Link do Evento</div>
            <p className={styles.p}>Link do Vídeo Associado ao Evento</p>
            <div className={styles.textwrapper12}>Imagem de capa</div>
            <div className={styles.textwrapper13}>Início</div>
            <div className={styles.textwrapper14}>Fim</div>
            <div className={styles.textwrapper15}>Número de validações</div>

            <input
              className={styles.rectangle}
              type="text"
              ref={titulo}
              placeholder="Digite aqui o título do evento"
            />

            <input
              className={styles.rectangle1}
              type="text"
              ref={palestrante}
              placeholder="Nome do(s) palestrante(s)"
            />

            <input
              className={styles.rectangle2}
              type="text"
              ref={local}
              placeholder="RDC"
            />

            <input
              className={styles.rectangle6}
              type="text"
              ref={codigoi}
              placeholder="Código de entrada"
            />

            <input
              className={styles.rectangle7}
              type="text"
              ref={codigof}
              placeholder="Código de saída"
            />

            <input
              className={styles.rectangle3}
              type="text"
              ref={link}
              placeholder="ecoa.puc-rio.br/eventos/21102023"
            />

            <input
              className={styles.rectangle4}
              type="text"
              ref={video}
              placeholder="ecoa.puc-rio.br/video/24102023"
            />

            <select className={styles.overlap8} onChange={handleSelectChange}>
              <option value="">Selecione uma opção</option>
              <option value="option1">Comunidade de Prática</option>
              <option value="option2">Arte e Cultura</option>
              <option value="option3">Ciência e Tecnologia</option>
              <option value="option4">Comunicação & Design </option>
              <option value="option5">Educação</option>
              <option value="option6">Fé & Espiritualidade</option>
              <option value="option7">Gestão e Negócios</option>
              <option value="option8">Humanidades</option>
              <option value="option9">Meio Ambiente</option>
              <option value="option10">Saúde e Bem-Estar</option>
              <option value="option11">Sociedade e Política</option>
              <option value="option12">Conteúdos Educacionais - Química</option>
              <option value="option13">Semana PUC</option>
            </select>

            <input
              className={styles.rectangle8}
              type="text"
              ref={detalhes}
              placeholder="Descrição do evento..."
            />

            <input
              className={styles.rectangle5}
              type="text"
              ref={inputRef}
              placeholder="Separe as tags com vírgula"
            />

            <input
              className={styles.imgfinal}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />

            <div className={styles.overlap12}>
              <input type="date" ref={dateRef} />

              <input type="time" ref={timeRef} />

              <button onClick={handleDateTimeChange}>Selecionar</button>
            </div>

            <div className={styles.overlap13}>
              <input type="date" ref={dateRef1} />

              <input type="time" ref={timeRef1} />

              <button onClick={handleDateTimeChange1}>Selecionar</button>
            </div>

            <div className={styles.group}>
              <div className={styles.overlapgroup2}>
                <div className={styles.textwrapper26}>
                  Adicionar novo evento
                </div>
                <a href="http://172.105.154.34:3009/evento">
                  <button
                    className={styles.button1}
                    onClick={handleSubmit}
                  ></button>
                </a>
              </div>
            </div>
            <div className={styles.overlapwrapper}>
              <div className={styles.overlap16}>
                <div className={styles.textwrapper27}>Cancelar</div>
                <button
                  className={styles.button2}
                  onClick={handleClick1}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Home;
