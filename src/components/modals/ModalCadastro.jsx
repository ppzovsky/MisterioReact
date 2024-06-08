import styles from './modalCadastro.module.css';
import PropTypes from 'prop-types';
import detetive1 from '../../assets/img/detetives/detetive1.jpg'
import detetive2 from '../../assets/img/detetives/detetive2.jpg'
import detetive3 from '../../assets/img/detetives/detetive3.jpg'
import detetive4 from '../../assets/img/detetives/detetive4.jpg'
import detetive5 from '../../assets/img/detetives/detetive5.jpg'
import detetive6 from '../../assets/img/detetives/detetive6.jpg'
import detetive7 from '../../assets/img/detetives/detetive7.jpg'
import detetive8 from '../../assets/img/detetives/detetive8.jpg'
import detetive9 from '../../assets/img/detetives/detetive9.jpg'

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
