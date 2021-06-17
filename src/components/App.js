import React, {useState} from 'react';
import Header from './header/Header.js';
import Main from './main/Main.js';
import Footer from './footer/Footer.js';
import PopupWithForm from './popupWithForm/PopupWithForm.js';
import ImagePopup from '../components/imagePopup/ImagePopup.js';


function App() {

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
  

  // const handleDeleteCardClick = () => {
  //   setIsDeleteCardPopupOpen(true);
  // }
  
  
  

  return (
    <>
     <Header/>
     <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
     <PopupWithForm title='Редактировать профиль' name='profile-popup' textBtn='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
       <input id='nameInput' type="text" className="pop-up__text" name="content-name" defaultValue="" placeholder="Ваше имя" minLength="2" maxLength="40"  required/>
       <span id="nameInput-error" className="pop-up__span-error"></span>
       <input id='jobInput' type="text" className="pop-up__text" name="content-job" defaultValue="" placeholder="О себе" minLength="2" maxLength="200" required/>
       <span id="jobInput-error" className="pop-up__span-error"></span>
     </PopupWithForm>
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

    </>
  );
}

export default App;
