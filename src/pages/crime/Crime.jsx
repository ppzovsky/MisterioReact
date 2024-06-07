import folha from '../../assets/img/scrolls/folha.png'
import bruxa from '../../assets/img/personas/card-bruxa.png'
import card from '../../assets/img/cards/bruxa.png'
import style from './Crime.module.css'

function Crime() {

  return (
    <>
      <div className={style.container}>
        <div className={style.folha}>
          <img src={folha} alt=""/>
        </div>
        <div className={style.vitma}>
          <img src={bruxa} alt="" className={style.bruxa} />
          <img src={card} alt="" className={style.card} />
        </div>
      </div>
    </>
  )
}

export default Crime
