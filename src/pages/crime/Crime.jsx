import folha from '/assets/img/scrolls/folha.png'
import bruxa from '/assets/img/personas/card-bruxa.png'
import card from '/assets/img/cards/bruxa.png'
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
                Em um destes vagões, a vítima chamada Morgana Shadowveil foi encontrada. Morgana é uma bruxa sombria e cruel que vive em uma cabana escondida na floresta amaldiçoada. Conhecida por seus sinistros conhecimentos em feitiçaria, livros e poções mágicas, ela aterroriza os aldeões em segredo, cultivando o medo e o caos. Sua natureza traiçoeira a mantém isolada dos outros, e sua maldade é evidente para todos que têm a infelicidade de cruzar seu caminho.
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
