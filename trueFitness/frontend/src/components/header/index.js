import style from './style.module.scss';
import { Link } from "react-router-dom";

export default () => {
    return (
        <header className={style.header}>
            <div className={style.header__logo}>
                <Link to="/" className={style.header__logo_text}>tf</Link>
            </div>
            <ul className={style.header__list}>
                <li className={style.header__list_item}>
                    <Link to="/trainings">Тренировки</Link>
                </li>
                <li className={style.header__list_item}>
                    <a href="#aboutUS" >О нас</a>
                </li>
                <li className={style.header__list_item}>
                    <Link to="/recipes">Рецепты</Link>
                </li>
                <li className={style.header__list_item}>
                    <a href="#contacts" >Контакты</a>
                </li>
                <li className={style.header__list_item}>
                    <Link to="/account" >Личный кабинет</Link>
                </li>
            </ul>
        </header>
    )
}
