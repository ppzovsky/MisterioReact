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


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`${styles.sidebar} ${isOpen ? styles.openSidebar : ''}`}>
            <div className={styles.sidebarContent}>
                <div className={styles.logo}>
                    <img
                        src={isOpen ? logo : lupa}
                        alt="Logo"
                        style={{ width: 'auto', height: isOpen ? '100px' : '60px' }}
                    />
                </div>
                <ul className={styles.sideItems}>
                    <li className={`${styles.sideItem} ${styles.active}`}>
                        <a href="#">
                        <FaSkull />
                            <span className={styles.itemDescription}>Crime</span>
                        </a>
                    </li>
                    <li className={`${styles.sideItem} ${styles.active}`}>
                        <a href="#">
                        <RiFootprintFill />
                            <span className={styles.itemDescription}>Suspeitos</span>
                        </a>
                    </li>
                    <li className={`${styles.sideItem} ${styles.active}`}>
                        <a href="#">
                        <FaTrainSubway />
                            <span className={styles.itemDescription}>Vagões</span>
                        </a>
                    </li>
                    <li className={`${styles.sideItem} ${styles.active}`}>
                        <a href="#">
                            <FaUserSecret />
                            <span className={styles.itemDescription}>Investigação</span>
                        </a>
                    </li>
                    <li className={`${styles.sideItem} ${styles.active}`}>
                        <a href="#">
                        <FaUser />
                            <span className={styles.itemDescription}>Perfil</span>
                        </a>
                    </li>
                    <li className={`${styles.sideItem} ${styles.active}`}>
                        <a href="#">
                        <FaQuestion />
                            <span className={styles.itemDescription}>Quem somos?</span>
                        </a>
                    </li>
                </ul>
                <button className={styles.openBtn} onClick={handleToggleSidebar}>
                <IoIosArrowForward />
                </button>
            </div>
            <div className={styles.logout}>
                <button className={styles.logoutBtn}>
                <MdLogout />
                    <span className={styles.itemDescription}>Logout</span>
                </button>
            </div>
        </nav>
    );
};

export default Sidebar;