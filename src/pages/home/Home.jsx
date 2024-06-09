import style from './Home.module.css'
import logo from '../../assets/img/logo/logo.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

function Home() {

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: 100 }}
      transition={{ ease: "easeOut", duration: 2 }} 
    >
      <form className={style.containerzao}>
        <div className={style.container}>
          <img src={logo} alt="Logo Misterio React" className={style.logo}/>
        </div>
        <div className={style.butaoContainer}>
          <Link to='/login'>
            <button className={style.butao}>COMECE A INVESTIGAÇÃO</button>
          </Link>
        </div>
      </form>
      
      </motion.div>
  )
}

export default Home
