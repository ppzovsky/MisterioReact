import styles from './modalCadastro.module.css';
import PropTypes from 'prop-types';
import detetive1 from '/assets/img/detetives/detetive1.png'
import detetive2 from '/assets/img/detetives/detetive2.png'
import detetive3 from '/assets/img/detetives/detetive3.png'
import detetive4 from '/assets/img/detetives/detetive4.png'
import detetive5 from '/assets/img/detetives/detetive5.png'
import detetive6 from '/assets/img/detetives/detetive6.png'
import detetive7 from '/assets/img/detetives/detetive7.png'
import detetive8 from '/assets/img/detetives/detetive8.png'
import detetive9 from '/assets/img/detetives/detetive9.png'

const images = [
  detetive1,
  detetive2,
  detetive3,
  detetive4,
  detetive5,
  detetive6,
  detetive7,
  detetive8,
  detetive9,
];

const ModalCadastro = ({ isOpen, onClose, onSelectImage }) => {
  if (!isOpen) return null;

  ModalCadastro.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSelectImage: PropTypes.func.isRequired,
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.titulo}>ESCOLHA SEU PERSONAGEM</h2>
        <div className={styles.imageGrid}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Opção ${index + 1}`}
              onClick={() => {
                onSelectImage(image);
                onClose();
              }}
              className={styles.imageOption}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalCadastro;
