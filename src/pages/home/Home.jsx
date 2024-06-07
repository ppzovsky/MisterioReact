import style from './Home.module.css'
import logo from '../../assets/img/logo/logo.png'

function Home() {

  return (
    <>
      <form className={style.containerzao}>
        <div className={style.container}>
          <img src={logo} alt="" className={style.logo}/>
        </div>
        <div className={style.butaoContainer}>
          <button className={style.butao}>COMECE A INVESTIGAÇÃO</button>
        </div>
      </form>
    </>
  )
}

export default Home
