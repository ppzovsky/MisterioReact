import { useEffect, useState } from 'react';
import styles from './Vagoes.module.css';
import axios from 'axios';
import seletor from '../../functions/seletorpersonagens';
import { IoIosArrowDropleft } from 'react-icons/io';
import { IoIosArrowDropright } from 'react-icons/io';

const Vagoes = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
      seletor();
  }, []);

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

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : vagoes.length - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide < vagoes.length - 1 ? prevSlide + 1 : 0));
  };

  return (
    <div className={styles.carousel}>
      <button onClick={handlePrev} className={styles.navButton}><IoIosArrowDropleft/></button>
      <div className={styles.carouselContent}>
        {vagoes.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          >
            <h1>{slide.title}</h1>
            <img src={slide.imgSrc} alt={slide.title} />
            <div className={styles.comentario}>{slide.description}</div>
          </div>
        ))}
      </div>
      <button onClick={handleNext} className={styles.navButton}><IoIosArrowDropright/></button>
    </div>
  );
};

export default Vagoes;