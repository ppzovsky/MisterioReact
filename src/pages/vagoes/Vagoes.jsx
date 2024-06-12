import { useEffect, useState } from 'react';
import styles from './Vagoes.module.css';
import axios from 'axios';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { motion } from 'framer-motion';

const Vagoes = () => {
  const [dados, setDados] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    axios.get('/vagoes.json')
      .then(response => {
        setDados(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  const vagoes = dados.slice(0);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : vagoes.length - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide < vagoes.length - 1 ? prevSlide + 1 : 0));
  };

  const openModal = (imgSrc) => {
    setModalImage(imgSrc);
    setIsModalOpen(true);
    setIsZoomed(false); // Reset zoom state when opening a new image
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleZoom = () => {
    setIsZoomed((prevZoom) => !prevZoom);
  };

  return (
    <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, x: 0 }} 
        exit={{ opacity: 0, x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }} 
        >
      <div className={styles.carousel}>
        <button onClick={handlePrev} className={styles.navButton}><IoIosArrowDropleft /></button>
        <div className={styles.carouselContent}>
          {vagoes.map((slide, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            >
              <h1>{slide.title}</h1>
              <img
                src={`${slide.imageSrc}`}
                alt={slide.title}
                onClick={() => openModal(slide.imgSrc)}
                className={styles.carouselImage}
              />
              <div className={styles.comentario}>{slide.description}</div>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className={styles.navButton}><IoIosArrowDropright /></button>

        {isModalOpen && (
          <div className={styles.modal} onClick={closeModal}>
            <span className={styles.close} onClick={closeModal}>&times;</span>
            <img
              className={`${styles.modalContent} ${isZoomed ? styles.zoomed : ''}`}
              src={modalImage}
              alt="Ampliada"
              onClick={(e) => {
                e.stopPropagation(); // Prevent closing the modal when clicking the image
                toggleZoom();
              }}
            />
          </div>
        )}
      </div>
     </motion.div>
  );
};

export default Vagoes;
