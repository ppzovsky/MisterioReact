import { useState, useEffect } from 'react';
import styles from './modalPerfil.module.css';
import PropTypes from 'prop-types';

const ModalPerfil = ({ isOpen, onClose }) => {

  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    const dados = localStorage.getItem('login');
    if (dados) {
        setPerfil(JSON.parse(dados));
    }
  }, []);

  if (!isOpen) return null; 

  return (
    <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
            <div className={styles.imageGrid}>
                <img
                src={perfil.imageSrc}
                alt='Foto Perfil'
                className={styles.imageOption}
                />
            </div>
            <h1 className={styles.titulo} id={styles.username}>{perfil.username}</h1>
            <h2 className={styles.titulo}>{perfil.email}</h2>
            <button onClick={() => {
                    onClose();
                }} className={styles.botao}>Sair</button>
        </div>
    </div>
  );
};

ModalPerfil.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    userData: PropTypes.shape({
        username: PropTypes.string,
        email: PropTypes.string,
        imageSrc: PropTypes.string,
    }),
  };    

export default ModalPerfil;