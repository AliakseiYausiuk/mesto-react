import React, {useContext} from 'react'
import {CardsContext} from '../../contexts/CardsContext.js';

const Card = (props) => {

    const cards = useContext(CardsContext);

    function handleClick(card) {
        props.onCardClick(card);
      }  

    const handleLikeClick  = (card) => {
        props.onCardLike(card);
    }

    const handleDeleteClick = (card) => {
        props.onCardDelete(card);
    }
    
      

    return (
        cards.map(el => {
           // Определяем, являемся ли мы владельцем текущей карточки
           const isOwn = el.owner._id === props.currentUser._id;

           // Создаём переменную, которую после зададим в `className` для кнопки удаления
           const cardDeleteButtonClassName = isOwn ? 'cards__btn-delete' : 'cards__btn-delete_active'; 

            return <li key={el._id} id={el._id} className="cards__card">
            <button className={cardDeleteButtonClassName} type="button" aria-label="btn-delete" onClick={() => handleDeleteClick(el)}></button>
            <figure className="cards__list">
            <img className="cards__foto" src={el.link} alt={el.name} onClick={() => handleClick(el)}/>
            <figcaption className="cards__text">
                {el.name}
            </figcaption>
            <ul className="cards__item">
                <li>
                  <button className="cards__like" type="button" aria-label="btn-like" onClick={() => handleLikeClick(el)}></button>
                </li>
                <li>
                    <span className="cards__like-number"></span>
                </li>
            </ul>
            </figure>
        </li>
        })
    )
}

export default Card
