import React from 'react';
import { useState, useEffect } from 'react';
import styles from '../login/Login.module.css'
import logo from '../../assets/logo.png'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Envio");
  };

    useEffect(() => {
      console.log("username", username);
      console.log("password", password);      
    },[]);
  

  return (
    <div className={styles.corpo}>
  
      <div className={styles.container}>
              <form onSubmit={handleSubmit}>
                
                <div className= {styles.containerLogo}>
                  <img className= {styles.logo} src={logo} alt="" />
                </div>

                <div className= {styles.username}>
                <input type="username" placeholder='Nome do Detetive'
                onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className= {styles.password}>
                <input type="password" placeholder='Senha'
                onChange={(e) => setPassword(e.target.value)} />
                </div>

                
                <button className= {styles.embarcar}>Embarcar</button>
                <button className= {styles.registrar}>Registrar</button>

              </form>
      </div>
    
      </div>
    
  )
}

export default Login