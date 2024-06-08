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
            <h2 className={styles.titulo}>{perfil.email}</h2>
            <h2 className={styles.titulo}>{perfil.username}</h2>
            <div className={styles.imageGrid}>
                <img
                src={perfil.imageSrc}
                alt='Foto Perfil'
                className={styles.imageOption}
                />
            </div>
            <button onClick={() => {
                    onClose();
                }}></button>
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