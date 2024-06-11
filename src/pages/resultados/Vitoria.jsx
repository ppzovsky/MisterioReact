import styles from "./vitoria.module.css"
import { motion } from "framer-motion";
import venceu from '../../assets/img/mensagem/vitoria.png'
import { useNavigate } from "react-router-dom";

function Vitoria(){
    const navigate = useNavigate();

    return(
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ ease: "easeOut", duration: 3 }}>
            <div className={styles.vitoria}>
                <img src={venceu} alt="" />
                <button className={styles.botaoVoltar} onClick={() => navigate('/')}>Voltar</button>
            </div>
        </motion.div>
    )
}

export default Vitoria