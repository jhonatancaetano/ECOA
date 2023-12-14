import styles from "./VideosCadastrados.module.css"; 

function Home() {
  return (
    <header>
        <div className={styles.index}>
        <div className={styles.div}>
            <div className={styles.overlapgroup}>
            <div className={styles.textwrapper}>Meus eventos</div>
            <div className={styles.group}>
            <a href="http://localhost:3000/inscricao">
                <img
                className={styles.image}
                alt=""
                src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/655fc39084f33ca76ac7e557/img/image-4@2x.png"
                />
            </a>
                <img
                className={styles.img}
                alt=""
                src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/655fc39084f33ca76ac7e557/img/image-6@2x.png"
                />
                <img
                className={styles.image2}
                alt=""
                src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/655fc39084f33ca76ac7e557/img/image-5@2x.png"
                />
                <img
                className={styles.image3}
                alt=""
                src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/655fc39084f33ca76ac7e557/img/image-7@2x.png"
                />
            </div>
            <img
                className={styles.arrowleftcircle}
                alt="Arrow left circle"
                src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/655fc39084f33ca76ac7e557/img/arrow-left-circle-1.svg"
            />
            </div>
        </div>
        </div>
    </header>
  );
}
export default Home;
