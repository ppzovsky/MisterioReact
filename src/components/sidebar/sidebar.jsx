import { useState } from 'react';
import styles from './sidebar.module.css';
import { FaUserSecret } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaSkull } from "react-icons/fa6";
import { RiFootprintFill } from "react-icons/ri";
import { FaTrainSubway } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import lupa from '../../assets/img/lupa.png';
import logo from '../../assets/img/logo.png';
import { useNavigate, Link } from 'react-router-dom';
import ModalPerfil from '../modals/ModalPerfil';
import { motion } from 'framer-motion';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalAberto, setModalAberto] = useState(false);
    const navigate = useNavigate();

    const handleToggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const logout = () => {
        localStorage.clear();
        navigate('/');
    }


    return (
        <nav className={`${styles.sidebar} ${isOpen ? styles.openSidebar : ''}`}>
            <div className={styles.sidebarContent}>
                <div className={styles.logo}>
                    <Link to='/crime'>
                        <img
                            src={isOpen ? logo : lupa}
                            alt="Logo"
                            style={{ width: 'auto', height: isOpen ? '100px' : '60px' }}
                             className={styles.logoImage}
                        />
                    </Link>
                </div>
                <ul className={styles.sideItems}>
                    <li className={`${styles.sideItem} ${styles.active}`} onClick={() =>navigate('/crime')}>
                            <FaSkull />
                            <span className={styles.itemDescription}>Crime</span>
                    </li>
                    <li className={`${styles.sideItem} ${styles.active}`} onClick={() =>navigate('/suspeitos')}>
                        <RiFootprintFill />
                            <span className={styles.itemDescription}>Suspeitos</span>
                    </li>
                    <li className={`${styles.sideItem} ${styles.active}`} onClick={() =>navigate('/vagoes')}>
                        <FaTrainSubway />
                            <span className={styles.itemDescription}>Vagões</span>
                    </li>
                    <li className={`${styles.sideItem} ${styles.active}`} onClick={() =>navigate('/investigacao')}>
                            <FaUserSecret />
                            <span className={styles.itemDescription}>Investigação</span>
                    </li>
                    <li className={`${styles.sideItem} ${styles.active}`} onClick={() =>navigate('/sobre')}>
                        <FaQuestion />
                            <span className={styles.itemDescription}>Quem somos?</span>
                    </li>
                </ul>
                <button className={styles.openBtn} onClick={handleToggleSidebar}>
                <IoIosArrowForward />
                </button>
            </div>
            <div className={styles.logout}>
                <ul className={styles.sideItemsLog}>
                    <motion.div> 
                        <motion.li className={`${styles.sideItem} ${styles.perfilBtn}`}
                            onClick={() => setModalAberto(true)}>
                            <FaUser />
                            <motion.span className={styles.itemDescription}>Perfil</motion.span>
                        </motion.li>
                    </motion.div>
                    <li className={`${styles.sideItem} ${styles.logoutBtn}`} onClick={logout}>
                    <MdLogout />
                    <span className={styles.itemDescription}>Logout</span>
                    </li>
                </ul>
            </div>
            <ModalPerfil
                isOpen={modalAberto}
                onClose={() => setModalAberto(false)}
            />
        </nav>
    );
};

export default Sidebar;