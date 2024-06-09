import folha from '../../assets/img/scrolls/folha.png'
import bruxa from '../../assets/img/personas/card-bruxa.png'
import card from '../../assets/img/cards/bruxa.png'
import style from './Crime.module.css'
import { motion } from 'framer-motion'

function Crime() {

  return (
    <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, x: 0 }} 
        exit={{ opacity: 0, x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }} 
        >
      <div className={style.container}>
        <div className={style.folha}>
          <img src={folha} alt=""/>
        </div>
        <div className={style.vitma}>
          <img src={bruxa} alt="" className={style.bruxa} />
          <img src={card} alt="" className={style.card} />
        </div>
      </div>
    </motion.div>
  )
}

export default Crime
