import { useState, useEffect } from 'react';
import styles from './modalPerfil.module.css';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

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
    <motion.div
    initial={{ opacity: 0, x: '-50vw', y: '-50vh' }} 
    animate={{ opacity: 1, x: 0, y: 0 }} 
    exit={{ opacity: 0, x: '50vw', y: '-50vh' }}
    transition={{ ease: "easeOut", duration: 2 }}
    style={{
      position: 'absolute',
      top: '50%',
      left: '335%',
      transform: 'translate(-50%, -50%)'
    }}
      >
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
    </motion.div>
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