import { useState, useEffect } from 'react';
import styles from '../login/Login.module.css'
import logo from '../../assets/logo.png'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [botaoDesativado, setBotaoDesativado] = useState(true);
    const [dadosUsuario, setDadosUsuario] = useState(false);
    const [listaUsers, setListaUsers] = useState([]);
    const [loginSucess, setLoginSucess] = useState(true);

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
  
    const fazerLogin = (event) => {
      event.preventDefault();
  
      const userExiste = listaUsers.find(
          (user) => user.username === username && user.password === password
        );
        if (userExiste){
          const usuario = {
            username : userExiste.username,
            password : userExiste.password,
            imageSrc : userExiste.imageSrc,
            email : userExiste.email,
          }
          setDadosUsuario(true);
          setPassword('');
          setUsername ('');
          setLoginSucess(true);
          localStorage.setItem('login', JSON.stringify(usuario));
          navigate('/crime');
          console.log(dadosUsuario); 
        }
        else{
          setDadosUsuario(false);
          setLoginSucess(false);
        }
    };
  
    useEffect(()=>{
      if(username!='' && password!=''){
          setBotaoDesativado(false);
      }
      else setBotaoDesativado(true);
    }, [username, password])

  return (
    <div className={styles.corpo}>
      <div className={styles.container}>
              <form onSubmit={fazerLogin}>
                <div className= {styles.containerLogo}>
                  <img className= {styles.logo} src={logo} alt="" />
                </div>

                <div className= {styles.username}>
                  <input type="text" placeholder='Nome do Detetive'
                  id="username" value={username}
                  onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className= {styles.password}>
                  <input type="password" placeholder='Senha'
                  id="password" value={password}
                  onChange={(e) => setPassword(e.target.value)} />
                </div>
              </form>
              <div className={styles.botoes}>
                <button type='submit' onClick={fazerLogin} className= {styles.embarcar}  disabled = {botaoDesativado}>Embarcar</button>
                <Link to='/cadastro'><button className= {styles.registrar}>Registrar</button></Link>
              </div>      
                {!loginSucess ? <p>Usuário ou senha incorretos</p> : null}
      </div>
    
      </div>
    
  )
}

export default Login