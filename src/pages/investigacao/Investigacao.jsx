import { useState, useEffect } from 'react';
import styles from './Investigacao.module.css';
import image from '../../assets/img/logo/logoInvestigacao.png';

function Investigacao() {
  const [choice, setChoice] = useState('option1');
  const [reason, setReason] = useState('');
  const [how, setHow] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (choice === 'option1' || reason === '' || how === '') {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [choice, reason, how]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Opção escolhida: ${choice}\nMotivo: ${reason}\nComo: ${how}`);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.papel}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.imageContainer}>
              <img src={image} alt="logo" className={styles.logo} />
            </div>
            <label htmlFor="choices" className={styles.label}>QUEM É O ASSASSINO?</label>
            <select 
              id="choices" 
              name="choices" 
              value={choice} 
              onChange={(e) => setChoice(e.target.value)}
              className={`${styles.select} ${choice === 'option1' ? styles.selectDefault : styles.selectNormal}`}
            >
              <option value="option1" className={styles.default}></option>
              <option value="option2">Morgana Shadowveil</option>
              <option value="option3">Vladislav Darkthorn</option>
              <option value="option4">XR-47</option>
              <option value="option5">Bart Blackbeard</option>
              <option value="option6">Emberflame</option>
            </select>
            <label htmlFor="porque" className={styles.label}>POR QUAL MOTIVO?</label>
            <input 
              type="text" 
              value={reason} 
              onChange={(e) => setReason(e.target.value)}
              placeholder="Por inveja?"
              className={styles.input}
            />
            <label htmlFor="como" className={styles.label}>COMO?</label>
            <input 
              type="text" 
              value={how} 
              onChange={(e) => setHow(e.target.value)}
              placeholder="Com uma faca?"
              className={styles.input}
            />
            <div className={styles.botao}>
              <button 
                type="submit" 
                disabled={isButtonDisabled}
                className={`${isButtonDisabled ? styles.buttonDisabled : styles.buttonEnabled}`}
              >
                ENVIAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
  
}

export default Investigacao;
