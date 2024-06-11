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
            <p>O crime aconteceu em um trem mágico que tem como objetivo transportar vilões entre qualquer época e lugar do multiverso. Os vagões são a prova de som, e se adaptam aos gostos e hábitos do passageiro. 
                Em um destes vagões, a vítima chamada Morgana Shadowveil foi encontrada. Morgana é uma bruxa sábia e reclusa que vive em uma cabana escondida na floresta encantada. Conhecida por seus profundos conhecimentos em feitiçaria e poções, ela ajuda os aldeões em segredo, embora muitos a temam. Sua natureza reservada a mantém distante dos outros, mas sua bondade é evidente para aqueles que a conhecem verdadeiramente.
                Durante a investigação existe um feitiço onde os suspeitos não conseguem mentir, porém alguém burlou esta regra, e este que consegue mentir, também consegue ferir outros passageiros.</p>
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
