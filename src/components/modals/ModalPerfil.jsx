import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './modalPerfil.module.css';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const ModalPerfil = ({ isOpen, onClose }) => {
  const [perfil, setPerfil] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const dados = localStorage.getItem('login');
    if (dados) {
      setPerfil(JSON.parse(dados));
    }
    else{
      setPerfil(null);
    }
  }, []);

  return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <div className={styles.modalOverlay}>
              <div className={styles.modalContent}>
              {perfil ? (
                <>
                <div className={styles.imageGrid}>
                  <img
                    src={perfil.imageSrc}
                    alt="Foto Perfil"
                    className={styles.imageOption}
                  />
                </div>
                <h1 className={styles.titulo} id={styles.username}>
                  {perfil.username}
                </h1>
                <h2 className={styles.titulo}>{perfil.email}</h2>
                <button onClick={onClose} className={styles.botao}>
                  Sair
                </button>
              </>
                ) : (
                  <>
                  <h2 className={styles.titulo}>Você não fez login ainda</h2>
                  <button onClick={() => navigate('/login')} className={styles.botaoLogin}>
                    Login
                  </button>
                  <button onClick={onClose} className={styles.botao}>
                    Sair
                  </button>
                </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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