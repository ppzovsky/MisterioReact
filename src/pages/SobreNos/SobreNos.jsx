import styles from './sobreNos.module.css';
//import back from '../../components/fundo/background.css';
import logo from '../../assets/img/logo.png'
import dragao from '../../assets/img/dragao.jpg'


const SobreNos = () => {
   
    return (
   <body className={styles.body}>
       
       <div className={styles.logo}><img src={logo} alt="Descrição da Imagem" /></div>

       <ul className={styles.card}>
        <li className={styles.lista}>
            <div className={styles.imagem}><img src={dragao} className={styles.foto} alt="Descrição da Imagem" /></div>
            <div className={styles.nome}>EMANUEL F.</div>
            <div className={styles.calsse}>MAGO</div>
        </li>
        <li className={styles.lista}>
            <div className={styles.imagem}><img src={dragao} className={styles.foto} alt="Descrição da Imagem" /></div>
            <div className={styles.nome}>EMANUEL F.</div>
            <div className={styles.calsse}>MAGO</div>
        </li>  
        <li className={styles.lista}>
            <div className={styles.imagem}><img src={dragao} className={styles.foto} alt="Descrição da Imagem" /></div>
            <div className={styles.nome}>EMANUEL F.</div>
            <div className={styles.calsse}>MAGO</div>
        </li>  
        <li className={styles.lista}>
            <div className={styles.imagem}><img src={dragao} className={styles.foto} alt="Descrição da Imagem" /></div>
            <div className={styles.nome}>EMANUEL F.</div>
            <div className={styles.calsse}>MAGO</div>
        </li>  
        <li>
            <div className={styles.imagem}><img src={dragao} className={styles.foto} alt="Descrição da Imagem" /></div>
            <div className={styles.nome}>EMANUEL F.</div>
            <div className={styles.calsse}>MAGO</div>
        </li>
       </ul>
    </body>
    )
}

export default SobreNos;