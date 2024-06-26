import styles from './personagens.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Personagens = () => {
    const [dados, setDados] = useState([]);
    const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

    useEffect(() => {
        axios.get('/personagens.json')
            .then(response => {
                setDados(response.data.slice(1));
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }, []);

    const handleMouseEnter = (personagem) => {
        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setPersonagemSelecionado(personagem);
    };

    return (
        <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, x: 0 }} 
        exit={{ opacity: 0, x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }} 
        >
            <div className={styles['selecao-de-personagens']}>
                <section className={styles.personagens}>
                    <ul className={styles['lista-de-personagens']}>
                        {dados.map(personagem => (
                            <li
                                key={personagem.id}
                                className={`${styles.personagem} ${personagemSelecionado?.id === personagem.id ? styles.selecionado : ''}`}
                                id={personagem.id}
                                data-name={personagem.nome}
                                data-description={personagem.lore}
                                onMouseEnter={() => handleMouseEnter(personagem)}
                            >
                                <img 
                                    src={`../src/assets/img/cards/${personagem.id}.png`} 
                                    className={styles.cardPersonagem} 
                                    alt={`Personagem ${personagem.nome}`} 
                                />
                            </li>
                        ))}
                    </ul>
                </section>
                {personagemSelecionado && (
                    <section className={styles['personagem-selecionado']}>
                        <div className={styles.titulo}>
                            <h2 className={styles['nome-personagem']}>{personagemSelecionado.nome}</h2>
                        </div>
                        <img className={styles['personagem-grande']} src={`../src/assets/img/personas/card-${personagemSelecionado.id}.png`} alt={`Personagem Selecionado`} />
                        <div className={styles['informacoes-personagem']}>
                            <p className={styles['descricao-personagem']}>{personagemSelecionado.lore}</p>
                        </div>
                    </section>
                )}
            </div>
        </motion.div>
    );
};

export default Personagens;
