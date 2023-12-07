import styles from "./ConfirmacaoPresenca.module.css"; 
import React, { useRef } from 'react';

const ConfirmacaoPresenca = () => {
  const handleClick = () => {
    alert('Botão clicado! Verificao de Código');
  };

  const handleClick1 = () => {
    alert('Botão clicado! Cancelar');
  };

  const inputRef = useRef(null);


  return( 
    <div className={styles.index}>
      <div className={styles.div}>
        <div className={styles.overlap}>
          <p className={styles.meuseventos}>
            <span className={styles.textwrapper}>Meus eventos &gt;</span>
            <span className={styles.span}> Confirmação de Presença</span>
          </p>
          <img
            className={styles.arrowleftcircle}
            alt="Arrow left circle"
            src="https://cdn.animaapp.com/projects/655fc369c485099130b690f9/releases/655fc39084f33ca76ac7e557/img/arrow-left-circle-1.svg"
          />
          <div className={styles.textwrapper2}>Validação 1</div>
          <p className={styles.p}>Digite o código do evento</p>
          <input className={styles.rectangle} type="text" ref={inputRef} placeholder="Digite aqui o código do evento" />
          <div className={styles.group}>
            <div className={styles.overlapgroup}>
              <div className={styles.textwrapper3}>Verificar código</div>
              <button className={styles.button1} onClick={handleClick}></button>
            </div>
          </div>
          <div className={styles.overlapwrapper}>
            <div className={styles.divwrapper}>
              <div className={styles.textwrapper4}>Cancelar</div>
              <button className={styles.button2} onClick={handleClick1}></button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default ConfirmacaoPresenca;
