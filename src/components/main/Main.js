import React, {useState, useEffect} from 'react';
// import avatar from '../../images/avatar.jpg';
import vector from '../../images/Vector.svg';
import plus from '../../images/plus.svg';
import api from '../../utils/Api.js';
import Card from '../card/Card.js';

const Main = (props) => {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  // получаем с сервера данные пользователя
  const handlerRequestUser = () => {
    api.getUserData()
    .then(res => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    })
    .catch(err => console.log(err));
  }

  // получаем с сервера карточки 
  const handlerReequestCards = () => {
    api.getInitialCards()
    .then(res => {
      setCards(res)
    })
    .catch(err => console.log(err))
  }
  
  

  useEffect(() => {
    handlerRequestUser();
    handlerReequestCards();
  }, []);

    return (
      <main className="main">
        <section className="profile">
        <div className="profile__avatar-hover">
        <img className="profile__avatar" src={userAvatar} alt="Аватар" onClick={props.onEditAvatar}/>
        </div>
        <div className="profile__list">
          <h1 className="profile__info">{userName}</h1>
          <div>
            <button className="profile__edit-button" type="button" aria-label="btn-edit" onClick={props.onEditProfile}>
              <img src={vector} alt="Кнопка редактировать"/>
            </button>
          </div>
          <div>
            <p className="profile__text">{userDescription}</p>
          </div>
      </div>
      <button className="profile__add-Button" type="button" aria-label="btn-add" onClick={props.onAddPlace}>
        <img className="profile__add-Btn-img" src={plus} alt="Кнопка плюс"/>
      </button>
        </section>
      <section className="elements">
      <ul className="cards">
        {/* <Card card={cards}/> */}
        {cards.map(el => {
          return (
            <li key={el.id} id={el.id} className="cards__card">
              <button className="cards__btn-delete" type="button" aria-label="btn-delete"></button>
              <figure className="cards__list">
              <img className="cards__foto" src={el.link} alt={el.name} />
              <figcaption className="cards__text">
                {el.name}
              </figcaption>
              <ul className="cards__item">
                <li>
                  <button className="cards__like" type="button" aria-label="btn-like"></button>
                </li>
                <li>
                  <span className="cards__like-number"></span>
                </li>
              </ul>
              </figure>
            </li>
          )
        })}
      </ul>
      </section>
      </main>
    )
}

export default Main

