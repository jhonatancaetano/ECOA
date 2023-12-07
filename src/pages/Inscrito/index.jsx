import styles from "./Inscrito.module.css"; 

function Inscrito() {

  return (
        <div className={styles.index}>
          <div className={styles.div}>
            <div className={styles.overlap}>
            <a href="http://localhost:3000/inscricao">
              <img
                className={styles.arrowleftcircle}
                alt="Arrow left circle"
                src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/655fc39084f33ca76ac7e557/img/arrow-left-circle-1.svg"
              />
            </a>
              <div className={styles.overlapgroup}>
                <img
                  className={styles.image}
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/6567883e613e980d0630389d/img/image-8.png"
                />
              </div>
              <p className={styles.detalhesreacincia}>
                <span className={styles.textwrapper}>
                  Detalhes
                  <br />
                </span>
                <span className={styles.span}>
                  Área: Ciência e Tecnologia | Ano: 2023
                  <br />
                </span>
                <span className={styles.textwrapper2}>
                  <br />
                </span>
                <span className={styles.textwrapper3}>
                  Neste episódio do Som das Ideias,  Manuela Trindade Viana e Luciana Badin discutem o uso das tecnologias
                  digitais e seus possíveis desdobramentos, efeitos e implicações, como a questão da vigilância de dados,
                  tecno-controle, práticas de cibersegurança.   
                  <br />
                  Manuela Trindade Viana e Luciana Badin são organizadoras do o e-book “A vida política das tecnologias
                  digitais”, que está disponível gratuitamente no site da Editora PUC-Rio. A obra, da Coleção Diálogos, é
                  fruto das pesquisas da Rede de Pesquisa sobre Dados, Tecno-controle, Autoridade e Subjetividade (Rede
                  DATAS), que reúne autores de diferentes departamentos da PUC-Rio.
                </span>
              </p>
              <div className={styles.overlap2}>
                <div className={styles.group}>
                  <div className={styles.textwrapper4}>Tags</div>
                  <div className={styles.textwrapper5}>Assista também</div>
                  <div className={styles.overlapgroupwrapper}>
                    <div className={styles.divwrapper}>
                      <div className={styles.textwrapper6}>tecnologia</div>
                    </div>
                  </div>
                  <div className={styles.overlapwrapper}>
                    <div className={styles.overlap3}>
                      <div className={styles.textwrapper7}>dados</div>
                    </div>
                  </div>
                  <img
                    className={styles.img}
                    alt="Image"
                    src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/65655560a24be33f7e19ce47/img/image-9@2x.png"
                  />
                  <img
                    className={styles.image2}
                    alt="Image"
                    src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/65655560a24be33f7e19ce47/img/image-10@2x.png"
                  />
                </div>
                <img
                  className={styles.capturadetela}
                  alt="Captura de tela"
                  src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/65678e7e708628359b9ec7ad/img/captura-de-tela-2023-10-24-a-s-21-45-1.png"
                />
                <div className={styles.group2}>
                  <div className={styles.overlap4}>
                    <div className={styles.textwrapper8}>digital</div>
                  </div>
                  <div className={styles.overlap5}>
                    <div className={styles.textwrapper9}>internet</div>
                  </div>
                </div>
              </div>
              <div className={styles.groupwrapper}>
                <div className={styles.group3}>
                  <div className={styles.textwrapper10}>Ver código</div>
                  <img
                    className={styles.lock}
                    alt="Lock"
                    src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/65678e7e708628359b9ec7ad/img/lock.svg"
                  />
                </div>
              </div>
              <img
                className={styles.helpcircle}
                alt="Help circle"
                src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/65678e7e708628359b9ec7ad/img/help-circle.svg"
              />
              <div className={styles.group4}>
                <div className={styles.group5}>
                  <div className={styles.textwrapper11}>Inscrito</div>
                  <img
                    className={styles.img2}
                    alt="Check"
                    src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/65678e7e708628359b9ec7ad/img/check.svg"
                  />
                </div>
              </div>
              <div className={styles.group6}>
                <div className={styles.group7}>
                  <div className={styles.textwrapper12}>Cancelar inscrição</div>
                  <a href="http://localhost:3000/inscricao">
                    <button className={styles.button1}></button>
                  </a>
                  <img
                    className={styles.img2}
                    alt="X"
                    src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/65678e7e708628359b9ec7ad/img/x.svg"
                  />
                </div>
              </div>
              <p className={styles.p}>Som das Ideias: Podcast da Editora PUC-Rio | Tecnologia e vigilância de dados</p>
              <img
                className={styles.star}
                alt="Star"
                src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/65655560a24be33f7e19ce47/img/star.svg"
              />
            </div>
          </div>
        </div>
   
  );
}
export default Inscrito;
