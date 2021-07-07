import React, {useContext} from 'react'
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

const Card = (props) => {

    const currentUser = useContext(CurrentUserContext);
    // console.log(currentUser);

    function handleClick(card) {
        props.onCardClick(card);
      }  

    const handleLikeClick  = (card) => {
        props.onCardLike(card);
    }

    const handleDeleteClick = (card) => {
        props.onCardDelete(card);
    }

    // console.log(props.card.owner._id);
    // console.log(currentUser._id, 'user');

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = props.card.owner._id === currentUser._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = isOwn ? 'cards__btn-delete' : 'cards__btn-delete_active'; 
    // const cardDeleteButtonClassName = ''; 

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName =  isLiked ? 'cards__like_active' : 'cards__like';
    
      

    return (
        <li id={props.card._id} className="cards__card">
            <button className={cardDeleteButtonClassName} type="button" aria-label="btn-delete" onClick={() => handleDeleteClick(props.card)}></button>
            <figure className="cards__list">
            <img className="cards__foto" src={props.card.link} alt={props.card.name} onClick={() => handleClick(props.card)}/>
            <figcaption className="cards__text">
                {props.card.name}
            </figcaption>
            <ul className="cards__item">
                <li>
                  <button className={cardLikeButtonClassName} type="button" aria-label="btn-like" onClick={() => handleLikeClick(props.card)}></button>
                </li>
                <li>
                    <span className="cards__like-number"></span>
                </li>
            </ul>
            </figure>
        </li>
    )
}

export default Card
