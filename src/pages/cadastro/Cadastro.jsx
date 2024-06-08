import { useState, useEffect } from 'react';
import styles from '../cadastro/Cadastro.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ModalCadastro from '../../components/modals/ModalCadastro'

const Cadastro = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [imageSrc, setImageSrc] = useState('');
    const [id, setId] = useState('');
    const [cadastroSucesso, setCadastroSucesso] = useState(false);
    const [usuarioExistente, setUsuarioExistente] = useState(false);
    const [modalAberto, setModalAberto] = useState(false);
    const [listaUsers, setListaUsers] = useState([]);

    const navigate = useNavigate();
      
    useEffect(() => {
      axios.get('https://6661b2b363e6a0189feb2481.mockapi.io/cadastros/api/usuarios')
          .then(response => {
              setListaUsers(response.data);
          })
          .catch(error => {
              console.error('Erro ao buscar dados:', error);
          });
    }, []);

    useEffect(() => {
      console.log("username", username);
      console.log("password", password);
      console.log("email", email);      
      
    }, []);

    const handleCadastro = async (event) => {
      event.preventDefault();
  
      const usuarioExistente = listaUsers.some((user) => user.username === username);
      if (usuarioExistente) {
        setUsuarioExistente(true);
        console.log('Selecione outro nickname');
        return;
      }
      const novoUsuario = {
        username: username,
        password: password,
        email: email,
        imageSrc: imageSrc,
        id: id
      };
      
      try {
        const response = await axios.post('https://6661b2b363e6a0189feb2481.mockapi.io/cadastros/api/usuarios', novoUsuario);
        console.log('Cadastro realizado com sucesso:', response.data);
        setCadastroSucesso(true);
        navigate('/login');

      } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
      }
    };
  
  return (
    <div className={styles.corpo}>
      
      <div className={styles.container}>
      <form onSubmit={handleCadastro} className={styles.formulario}>
          <div 
          className={styles.icone}
          onClick={() => setModalAberto(true)} 
          style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
          </div>

          <div className={styles.nomeDetetive}>
              <input type="text"
              className = {styles.input}  
              placeholder='Nome do Detetive'
              id="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div className={styles.email}>
              <input type="email"
              className = {styles.input}  
              placeholder='Email'
              id = "email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className={styles.password}>
              <input type="password"
              className = {styles.input} 
              placeholder='Senha'
              id = "password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className= {styles.botaoContainer}>
              <button className= {styles.registrar}>Registrar</button>
          </div>

          <ModalCadastro 
            isOpen={modalAberto}
            onClose={() => setModalAberto(false)}
            onSelectImage={setImageSrc}
          />
          {cadastroSucesso ? <p>Cadastro realizado com sucesso!</p> : null}
          {usuarioExistente ? <p>Nickname ja esta em uso!</p> : null }    

        </form>
      </div>
    
     </div>
    
  )
}

export default Cadastro