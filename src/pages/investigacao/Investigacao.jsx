import { useState, useEffect } from 'react';
import styles from './Investigacao.module.css';
import image from '/assets/img/logo/logoInvestigacao.png';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Investigacao() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [assassino, setAssassino] = useState('option1')
  const [motivo, setMotivo] = useState('')
  const [modo, setModo] = useState('')
  const [id, setId] = useState('')
  const [usuario, setUsuario] = useState(null)
  const [palpiteSucesso, setPalpiteSucesso] = useState(false)
  const [ganhou, setGanhou] = useState()
  const [botao, setBotao] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const dados = localStorage.getItem('login');
    if (dados) {
      setUsuario(JSON.parse(dados));
    }
    else{
      setUsuario(null);
    }
  }, []);

  useEffect(() => {
    if (assassino === 'option1' || motivo === '' || modo === '') {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [assassino, motivo, modo]);

  const botaoClicado = () => {
    setBotao(true)
  }

  const handlePalpite = async (event) => {
    event.preventDefault();

    const resultado = "Emberflame"
    if(botaoClicado){
      if(assassino == resultado){
        navigate('/vitoria')
      }else{
        setGanhou(false)
        navigate('/derrota')
      }
    }

    const novoPalpite = {
      assassino: assassino,
      motivo: motivo,
      modo: modo,
      id: id,
      usuario: usuario.username,
    };

    try {
      const response = await axios.post('https://6661b2b363e6a0189feb2481.mockapi.io/cadastros/api/palpites', novoPalpite);
      console.log("Palpite feito com sucesso", response.data);
      setPalpiteSucesso(true);
    } catch (error) {
      console.error('Erro ao cadastrar palpite:', error)
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <div className={styles.container}>
        <div className={styles.papel}>
          <form className={styles.form} onSubmit={handlePalpite}>
            <div className={styles.imageContainer}>
              <img src={image} alt="logo" className={styles.logo} />
            </div>
            <label htmlFor="choices" className={styles.label}>QUEM É O ASSASSINO?</label>
            <select
              id="choices"
              name="choices"
              value={assassino}
              onChange={(e) => setAssassino(e.target.value)}
              className={`${styles.select} ${assassino === 'option1' ? styles.selectDefault : styles.selectNormal}`}
            >
              <option value="option1" className={styles.default}></option>
              <option value="Morgana Shadowveil">Morgana Shadowveil</option>
              <option value="Vladislav Darkthorn">Vladislav Darkthorn</option>
              <option value="XR-47">XR-47</option>
              <option value="Bart Blackbeard">Bart Blackbeard</option>
              <option value="Emberflame">Emberflame</option>
            </select>
            <label htmlFor="porque" className={styles.label}>POR QUAL MOTIVO?</label>
            <input
              type="text"
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
              placeholder="Por inveja?"
              className={styles.input}
            />
            <label htmlFor="como" className={styles.label}>COMO?</label>
            <input
              type="text"
              value={modo}
              onChange={(e) => setModo(e.target.value)}
              placeholder="Com uma faca?"
              className={styles.input}
            />
            <div className={styles.botao}>
              <button
                type="submit"
                disabled={isButtonDisabled}
                className={`${isButtonDisabled ? styles.buttonDisabled : styles.buttonEnabled}`}
                onClick={botaoClicado}>
                ENVIAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Investigacao;
