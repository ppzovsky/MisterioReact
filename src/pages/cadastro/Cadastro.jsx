import React from 'react';
import { useState, useEffect } from 'react';
import styles from '../cadastro/Cadastro.module.css'
import logo from '../../assets/logo.png'


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
      
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Envio");
  };

    useEffect(() => {
      console.log("username", username);
      console.log("password", password);
      console.log("email", email);      
      
    }, []);
  
  return (
    <div className={styles.corpo}>
      
      <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.formulario}>

                <div className={styles.nomeDetetive}>
                    <input type="userName" placeholder='Nome do Detetive'
                    onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className={styles.email}>
                    <input type="email" placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className={styles.password}>
                    <input type="password" placeholder='Senha'
                    onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className= {styles.botaoContainer}>
                    <button className= {styles.registrar}>Registrar</button>
                </div>

            </form>
      </div>
    
     </div>
    
  )
}

export default Login