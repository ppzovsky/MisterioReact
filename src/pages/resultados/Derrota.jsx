import styles from "./derrota.module.css"
import { motion } from "framer-motion";
import perdeu from '/assets/img/mensagem/derrota.png'
import { useNavigate } from "react-router-dom";

function Derrota(){
    const navigate = useNavigate();

    return(
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ ease: "easeOut", duration: 3 }}>
            <div className={styles.derrota}>
                <img src={perdeu} alt="" />
                <button className={styles.botaoVoltar} onClick={() => navigate('/crime')}>Voltar</button>
            </div>
        </motion.div>
    )
}

export default Derrota