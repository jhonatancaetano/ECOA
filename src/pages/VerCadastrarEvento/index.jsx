import styles from "./VerCadastrarEvento.module.css"; 

function VerCadastrarEvento() {

  return (
    <div className={styles.index}>
      <div className={styles.div}>
        <div className={styles.overlapgroup}>
          <div className={styles.textwrapper}>Meus eventos</div>
          <div className={styles.group}>
            <a href="http://localhost:3000/eventocadastrado">
              <img
                className={styles.image}
                alt="Image"
                src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/655fc39084f33ca76ac7e557/img/image-4@2x.png"
              />
            </a>
            <img
              className={styles.img}
              alt="Image"
              src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/655fc39084f33ca76ac7e557/img/image-6@2x.png"
            />
            <img
              className={styles.image2}
              alt="Image"
              src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/655fc39084f33ca76ac7e557/img/image-5@2x.png"
            />
            <img
              className={styles.image3}
              alt="Image"
              src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/655fc39084f33ca76ac7e557/img/image-7@2x.png"
            />
          </div>
          <img
            className={styles.arrowleftcircle}
            alt="Arrow left circle"
            src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/655fc39084f33ca76ac7e557/img/arrow-left-circle-1.svg"
          />
          <div className={styles.group2}>
            <div className={styles.divwrapper}>
              <div className={styles.textwrapper2}>Cadastrar novo evento</div>
              <a href="http://localhost:3000/evento">
                <button className={styles.button1}></button>
              </a>
            </div>
            <img
              className={styles.pluscircle}
              alt="Plus circle"
              src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/655fc39084f33ca76ac7e557/img/plus-circle.svg"
            />
          </div>
        </div>
      </div>
    </div>

   
  );
}
export default VerCadastrarEvento;
