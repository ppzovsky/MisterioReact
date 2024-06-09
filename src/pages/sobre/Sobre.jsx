import { useEffect, useState } from 'react';
import styles from './sobre.module.css';
import logo from '../../assets/img/logo.png'
import axios from 'axios';
import { motion } from 'framer-motion';

const Sobre = () => {

    const [dados, setDados] = useState([]);

    useEffect(() => {
        axios.get('/pessoas.json')
            .then(response => {
                setDados(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }, []);

    const listaPessoas = dados.slice(0);

    return (
        <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, x: 0 }} 
        exit={{ opacity: 0, x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }} 
        >
            <div className={styles.body}>
                <div className={styles.logo}><img src={logo} alt="Descrição da Imagem" /></div>
                <ul className={styles.card}>
                        {listaPessoas.map(pessoas => (
                            <li key={pessoas.nome} className={styles.lista}>
                                <div className={styles.imagem}><img src={pessoas.imagem} className={styles.foto} alt="Descrição da Imagem" /></div>
                                <div className={styles.nome}>{pessoas.nome}</div>
                                <div className={styles.calsse}>{pessoas.classe}</div>
                            </li>
                        ))}
                </ul>
            </div>
        </motion.div>
    );
}

export default Sobre;