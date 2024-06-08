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
import { Link } from 'react-router-dom';
import ModalPerfil from '../modals/ModalPerfil';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalAberto, setModalAberto] = useState(false);

    const handleToggleSidebar = () => {
        setIsOpen(!isOpen);
    };


    return (
        <nav className={`${styles.sidebar} ${isOpen ? styles.openSidebar : ''}`}>
            <div className={styles.sidebarContent}>
                <div className={styles.logo}>
                    <Link to='/'>
                        <img
                            src={isOpen ? logo : lupa}
                            alt="Logo"
                            style={{ width: 'auto', height: isOpen ? '100px' : '60px' }}
                             className={styles.logoImage}
                        />
                    </Link>
                </div>
                <ul className={styles.sideItems}>
                    <li className={`${styles.sideItem} ${styles.active}`}>
                        <Link to="/crime">
                            <FaSkull />
                            <span className={styles.itemDescription}>Crime</span>
                        </Link>
                    </li>
                    <li className={`${styles.sideItem} ${styles.active}`}>
                        <Link to="/suspeitos">
                        <RiFootprintFill />
                            <span className={styles.itemDescription}>Suspeitos</span>
                        </Link>
                    </li>
                    <li className={`${styles.sideItem} ${styles.active}`}>
                        <Link to="/vagoes">
                        <FaTrainSubway />
                            <span className={styles.itemDescription}>Vagões</span>
                        </Link>
                    </li>
                    <li className={`${styles.sideItem} ${styles.active}`}>
                        <Link to="/investigacao">
                            <FaUserSecret />
                            <span className={styles.itemDescription}>Investigação</span>
                        </Link>
                    </li>
                    <li className={`${styles.sideItem} ${styles.active}`}>
                        <Link to="/sobre">
                        <FaQuestion />
                            <span className={styles.itemDescription}>Quem somos?</span>
                        </Link>
                    </li>
                </ul>
                <button className={styles.openBtn} onClick={handleToggleSidebar}>
                <IoIosArrowForward />
                </button>
            </div>
            <div className={styles.logout}>
                <ul className={styles.sideItemsLog}>                
                    <li className={`${styles.sideItem} ${styles.perfilBtn}`}
                    onClick={() => setModalAberto(true)}>
                        <FaUser />
                        <span className={styles.itemDescription}>Perfil</span>
                    </li>
                    <Link to='/'>
                        <li className={`${styles.sideItem} ${styles.logoutBtn}`}>
                        <MdLogout />
                        <span className={styles.itemDescription}>Logout</span>
                    </li>
                    </Link>
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