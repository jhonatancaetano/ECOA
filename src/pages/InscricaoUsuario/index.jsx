import styles from "./InscricaoUsuario.module.css"; 

function Home() {

  return (
    <div className={styles.index}>
        <div className={styles.div}>
            <div className={styles.overlap}>
            <a href="http://localhost:3000/videos">
                <img
                        className={styles.arrowleftcircle}
                    alt="Arrow left circle"
                    src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/655fc39084f33ca76ac7e557/img/arrow-left-circle-1.svg"
                />
            </a>
            <img
                className={styles.image}
                alt="Image"
                src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/6567883e613e980d0630389d/img/image-8.png"
            />
            <p className={styles.textwrapper}>Som das Ideias: Podcast da Editora PUC-Rio | Tecnologia e vigilância de dados</p>
            <img
                className={styles.star}
                alt="Star"
                src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/65655560a24be33f7e19ce47/img/star.svg"
            />
            <p className={styles.detalhesreacincia}>
                <span className={styles.span}>
                Detalhes
                <br />
                </span>
                <span className={styles.textwrapper2}>
                Área: Ciência e Tecnologia | Ano: 2023
                <br />
                </span>
                <span className={styles.textwrapper3}>
                <br />
                </span>
                <span className={styles.textwrapper4}>
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
            <div className={styles.overlapgroup}>
                <div className={styles.group}>
                <div className={styles.textwrapper5}>Tags</div>
                <div className={styles.textwrapper6}>Assista também</div>
                <div className={styles.overlapgroupwrapper}>
                    <div className={styles.divwrapper}>
                    <div className={styles.textwrapper7}>tecnologia</div>
                    </div>
                </div>
                <div className={styles.overlapwrapper}>
                    <div className={styles.overlap2}>
                    <div className={styles.textwrapper8}>dados</div>
                    </div>
                </div>
                <div className={styles.group2}>
                    <div className={styles.overlap3}>
                    <div className={styles.textwrapper9}>digital</div>
                    </div>
                    <div className={styles.overlap4}>
                    <div className={styles.textwrapper10}>internet</div>
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
                src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/6567883e613e980d0630389d/img/captura-de-tela-2023-10-24-a-s-21-45-1.png"
                />
            </div>
            <div className={styles.groupwrapper}>
                <div className={styles.group3}>
                <div className={styles.textwrapper11}>Inscrever-se</div>
                <a href="http://localhost:3000/inscrito">
                    <button className={styles.button1}></button>
                </a>
                <a href="http://localhost:3000/inscricao">
                <img
                    className={styles.plussquare}
                    alt="Plus square"
                    src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/6567883e613e980d0630389d/img/plus-square.svg"
                />
                </a>
                </div>
            </div>
            </div>
        </div>
        </div>
   
  );
}
export default Home;
