import React, {useState, useEffect, useContext} from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/api.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';
import {CardsContext} from '../contexts/CardsContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js'


function App() {

  const [currentUser, setCurrentUser] = useState('');

  const data = useContext(CardsContext);
  const [cards, setCards] = useState([]);


  useEffect(() => {
    api.getFullInfo()
    .then(([arrCards, userData]) => {
      setCurrentUser(userData);
      setCards(arrCards);
    })
    .catch(err => console.log(err));
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
    
  } 

  const handleCardDelete = (card) => {
    // const isOwn = card.owner._id === currentUser._id;

    api.deleteCard(card._id)
    .then(res => {
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
    });
  }


  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);


  // const [selectedCard, setSelectedCard] = useState({});
  const [selectedCard, setSelectedCard] = useState(null);


  // const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);

  // изменение сотояния при клике (открывает попап)
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }
  

  // изменение сотояния при клике (открывает попап)
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  // изменение сотояния при клике (открывает попап)
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  // // изменение сотояния при клике (закрывает попапы)
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);


    // setSelectedCard(false);
    setSelectedCard(null);
  }
  
  const handleCardClick = (card) => {
    setSelectedCard(card);
  }
  
  const handleUpdateUser = (data) => {
    api.userEdit(data)
    .then(res => {
      setCurrentUser(data);
      closeAllPopups();
    })
  }

  const handleUpdateAvatar = (data) => {
    api.upgradeAvatar(data.avatar)
    .then(res => {
      setCurrentUser(res);
      closeAllPopups();
    })
  }
  
  const handleAddPlaceSubmit = (newCard) => {
    api.newCard(newCard)
    .then(res => {
      setCards([res, ...cards]); 
      closeAllPopups();
    })
  }
  
  

  return (
    <CurrentUserContext.Provider value={currentUser}>
     <CardsContext.Provider value={data}>
     <Header/>
     <Main cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
     <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
     <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
     <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
     <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
     <Footer/>

     {/* <PopupWithForm title='Вы уверены?' name='pop-up-delete-foto' textBtn='Да' isOpen={isDeleteCardPopupOpen}/> */}
     </CardsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
