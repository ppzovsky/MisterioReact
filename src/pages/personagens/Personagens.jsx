import styles from './personagens.module.css';
import { seletor } from '../../functions/seletorpersonagens.js';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Personagens = () => {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        seletor();
    }, []);

    useEffect(() => {
        axios.get('/personagens.json')
            .then(response => {
                setDados(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }, []);

    const suspeitos = dados.slice(1);

    return (
        <>
            <div>
                <main className={styles['selecao-de-personagens']}>
                    <section className={styles.personagens}>
                        <ul className={styles['lista-de-personagens']}>
                            {suspeitos.map(personagem => (
                                <li
                                    key={personagem.id}
                                    className={`${styles.personagem} ${styles.selecionado}`}
                                    id={personagem.id}
                                    data-name={personagem.nome}
                                    data-description={personagem.lore}
                                >
                                    <img src= {`../src/assets/img/cards/${personagem.id}.png`} className= {styles.cardPersonagem} alt={`Personagem ${personagem.nome}`} />
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className={styles['personagem-selecionado']}>
                        <div className={styles.titulo}>
                            <h2 className={styles['nome-personagem']} id="nome-personagem">Bruxa</h2>
                        </div>
                        <img className={styles['personagem-grande']} src="./src/imagens/card-ciclope.png" alt="Personagem Selecionado" />
                        <div className={styles['informacoes-personagem']}>
                            <p className={styles['descricao-personagem']} id="descricao-personagem">Ele tem pode de disparar rajadas ópticas, por um acidente que aconteceu com ele quando criança, mas não consegue controlá-los</p>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Personagens;