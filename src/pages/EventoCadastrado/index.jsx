import styles from "./EventoCadastrado.module.css"; 
import React from 'react';

const Home = () => {

  return (
    <div className={styles.index}>
      <div className={styles.div}>
        <div className={styles.overlap}>
          <a href="http://localhost:3000/ver">
            <img
              className={styles.arrowleftcircle}
              alt="Arrow left circle"
              src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/655fc39084f33ca76ac7e557/img/arrow-left-circle-1.svg"
            />
          </a>
          <img
            className={styles.image}
            alt=""
            src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/65655560a24be33f7e19ce47/img/image-8.png"
          />
          <p className={styles.textwrapper}>Bate papo: A inteligência artificial e as ferramentas da indústria 4.0</p>
          <img
            className={styles.star}
            alt="Star"
            src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/65677f91e7d09df59d5da12c/img/star.svg"
          />
          <p className={styles.detalhesgestoe}>
            <span className={styles.span}>
              Detalhes
              <br />
            </span>
            <span className={styles.textwrapper2}>
              Gestão e Negócios | Ano: 2023
              <br />
            </span>
            <span className={styles.textwrapper3}>
              <br />
            </span>
            <span className={styles.textwrapper4}>
              A palestra pretende apresentar os conceitos sobre as aplicabilidades e premissas para a aplicação da
              tecnologia, demonstrando casos práticos de aplicação da tecnologia. Como exemplos: Analytics – softwares
              de manipulação e tratamento de dados; Big Data e Claud – Bancos de dados; Cyber Physical Systems – CPS –
              Sistemas Ciber Físicos; IA – Inteligência Artificial; IoT – Internet of Things – Internet das coisas,
              utilizados na área industrial para melhorar a confiabilidade dos equipamentos.
            </span>
          </p>
          <div className={styles.group}>
            <div className={styles.textwrapper5}>Tags</div>
            <div className={styles.textwrapper6}>Assista também</div>
            <div className={styles.overlapgroupwrapper}>
              <div className={styles.overlapgroup}>
                <div className={styles.textwrapper7}>engenharia</div>
              </div>
            </div>
            <div className={styles.overlapwrapper}>
              <div className={styles.divwrapper}>
                <div className={styles.textwrapper8}>big data</div>
              </div>
            </div>
            <div className={styles.group2}>
              <div className={styles.overlap2}>
                <div className={styles.textwrapper9}>inteligência artificial</div>
              </div>
            </div>
            <img
              className={styles.img}
              alt=""
              src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/65655560a24be33f7e19ce47/img/image-9@2x.png"
            />
            <img
              className={styles.image2}
              alt=""
              src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/65655560a24be33f7e19ce47/img/image-10@2x.png"
            />
          </div>
          <div className={styles.group3}>
            <div className={styles.overlap3}>
              <img
                className={styles.edit}
                alt="Edit"
                src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/65677f91e7d09df59d5da12c/img/edit.svg"
              />
              <div className={styles.textwrapper10}>Editar evento</div>
              <a href="http://localhost:3000/evento">
                <button className={styles.button1}></button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    );
}
export default Home;
