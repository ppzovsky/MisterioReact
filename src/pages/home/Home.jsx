import style from './Home.module.css'
import logo from '../../assets/img/logo/logo.png'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
      <form className={style.containerzao}>
        <div className={style.container}>
          <img src={logo} alt="" className={style.logo}/>
        </div>
        <div className={style.butaoContainer}>
          <Link to='/login'>
            <button className={style.butao}>COMECE A INVESTIGAÇÃO</button>
          </Link>
        </div>
      </form>
    </>
  )
}

export default Home
