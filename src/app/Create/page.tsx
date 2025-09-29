"use client";
import styles from "./Create.module.css";

const Create = () => {

  return (
    <>
      <main className={styles.main}>
        <div className={styles.leftPanel}>
          <img src="/Image-Photoroom.png" alt="" />
        </div>
        <div className={styles.rightPanel}>
          <div className={styles.containerForm}>
            <h1>Zero Treze</h1>
            <form className={styles.contentForm}>
              <input type="text" placeholder="Nome Completo"/>
              <input type="email" placeholder="Email"/>
              <input type="tel" placeholder="Telefone"/>
              <input type="password" placeholder="Senha"/>
              <input type="text" placeholder="Estado"/>
              <button>Cadastre-se</button>
            </form>
            <div className={styles.separatorForm}>
              <div></div>
              <p>OU</p>
              <div></div>
            </div>
            <p>Quer Solicitar nosso serviço? <a href="/Request">Clique aqui</a></p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Create;