import React, {useState, useEffect, useContext} from 'react';
// import avatar from '../../images/avatar.jpg';
import vector from '../../images/Vector.svg';
import plus from '../../images/plus.svg';
import Card from '../card/Card.js';
import api from '../../utils/Api.js';
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';
import {CardsContext} from '../../contexts/CardsContext.js';

const Main = (props) => {

  const currentUser = useContext(CurrentUserContext);
  // const data = useContext(CardsContext);
  const [cards, setCards] = useState(useContext(CardsContext));

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if (isLiked) {
      api.decrementLike(card._id)
      .then(res => console.log(res))
    } else {
      api.incrementLike(card._id)
      .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
      
    }
    
  } 

  const handleCardDelete = (card) => {
    // const isOwn = card.owner._id === currentUser._id;

    api.deleteCard(card._id)
    .then(res => setCards(el => el.filter((c) => c._id !== currentUser._id)));
  }
  

    return (
      <main className="main">
        <section className="profile">
        <div className="profile__avatar-hover">
        <img className="profile__avatar" src={currentUser ? currentUser.avatar : ''} alt="Аватар" onClick={props.onEditAvatar}/>
        </div>
        <div className="profile__list">
          <h1 className="profile__info">{currentUser ? currentUser.name : 'Жак-Ив Кусто'}</h1>
          <div>
            <button className="profile__edit-button" type="button" aria-label="btn-edit" onClick={props.onEditProfile}>
              <img src={vector} alt="Кнопка редактировать"/>
            </button>
          </div>
          <div>
            <p className="profile__text">{currentUser ? currentUser.about : 'Исследователь океана'}</p>
          </div>
      </div>
      <button className="profile__add-Button" type="button" aria-label="btn-add" onClick={props.onAddPlace}>
        <img className="profile__add-Btn-img" src={plus} alt="Кнопка плюс"/>
      </button>
        </section>
      <section className="elements">
      <ul className="cards">
        {/* {cards.map(el => <Card key={el._id} card={el} onCardClick={props.onCardClick}/>)} */}
        <Card onCardClick={props.onCardClick} currentUser={currentUser} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
      </ul>
      </section>
      </main>
    )
}

export default Main

