import React, {useState, useEffect} from 'react';
import Header from './header/Header.js';
import Main from './main/Main.js';
import Footer from './footer/Footer.js';
import PopupWithForm from './popupWithForm/PopupWithForm.js';
import ImagePopup from '../components/imagePopup/ImagePopup.js';
import api from '../utils/Api.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';
import {CardsContext} from '../contexts/CardsContext.js';
import EditProfilePopup from '../components/editProfilePopup/EditProfilePopup.js';


function App() {

  const [currentUser, setCurrentUser] = useState('');

  const [cards, setCard] = useState([]);


  useEffect(() => {
    api.getFullInfo()
    .then(([arrCards, userData]) => {
      setCurrentUser(userData);
      setCard(arrCards);
    })
    .catch(err => console.log(err));
  }, []);

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
  

  return (
    <CurrentUserContext.Provider value={currentUser}>
     <CardsContext.Provider value={cards}>
     <Header/>
     <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
     <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
     
     <PopupWithForm title='Новое место' name='pop-up-supplement-foto' textBtn='Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
       <input id='NameFoto' type="text" className="pop-up__text" name="content-name-foto" defaultValue="" placeholder='Название' minLength='2' maxLength="30" required/>
       <span id="NameFoto-error" className="pop-up__span-error"></span>
       <input id='linkFoto' type="url" className="pop-up__text" name="content-foto" defaultValue="" placeholder='Ссылка на картинку' required/>
       <span id="linkFoto-error" className="pop-up__span-error"></span>
     </PopupWithForm>
     <PopupWithForm title='Обновить аватар' name='pop-up-upgred-avatar' textBtn='Да' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
       <input id="linkFotoAvatar" type="url" className="pop-up__text" name="contentFotoAvatar" defaultValue="" placeholder='Ссылка на картинку' required/>
       <span id="linkFotoAvatar-error" className="pop-up__span-error"></span>
     </PopupWithForm>
     <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
     <Footer/>

     {/* <PopupWithForm title='Вы уверены?' name='pop-up-delete-foto' textBtn='Да' isOpen={isDeleteCardPopupOpen}/> */}
     </CardsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
