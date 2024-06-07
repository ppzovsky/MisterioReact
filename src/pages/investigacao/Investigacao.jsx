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
          <form onSubmit={handleSubmit}>
            <div>
              <img src={image} alt="logo" />
            </div>
            <label htmlFor="choices">QUEM É O ASSASSINO?</label>
            <select 
              id="choices" 
              name="choices" 
              value={choice} 
              onChange={(e) => setChoice(e.target.value)}
              className={choice === 'option1' ? styles.selectDefault : styles.selectNormal}
            >
              <option value="option1" className={styles.default}>Default</option>
              <option value="option2">Bruxa</option>
              <option value="option3">Vampiro</option>
              <option value="option4">Ciborgue</option>
              <option value="option5">Pirata</option>
              <option value="option6">Demo</option>
            </select>
            <label htmlFor="porque">POR QUAL MOTIVO?</label>
            <input 
              type="text" 
              value={reason} 
              onChange={(e) => setReason(e.target.value)}
              placeholder="Por inveja?"
            />
            <label htmlFor="como">COMO?</label>
            <input 
              type="text" 
              value={how} 
              onChange={(e) => setHow(e.target.value)}
              placeholder="Com uma faca?"
            />
            <div className={styles.botao}>
              <button 
                type="submit" 
                disabled={isButtonDisabled}
                className={isButtonDisabled ? styles.buttonDisabled : styles.buttonEnabled}>
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
