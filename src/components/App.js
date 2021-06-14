import React, {useState} from 'react';
import Header from './header/Header.js';
import Main from './main/Main.js';
import Footer from './footer/Footer.js';
import PopupWithForm from './popupWithForm/PopupWithForm.js';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }
  

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const formEditProfile = () => {
    return '<input id="nameInput" type="text" class="pop-up__text" name="content-name" value="" placeholder="Ваше имя" minlength="2" maxlength="40"  required/> <span id="nameInput-error" class="pop-up__span-error"></span> <input id="jobInput type="text" class="pop-up__text" name="content-job" value="" placeholder="О себе" minlength="2 maxlength="200" required/> <span id="jobInput-error" class="pop-up__span-error"></span>'
  }
  
  
  
  

  return (
    <>
     <Header/>
     <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>
     <PopupWithForm title='Редактировать профиль' name='profile-popup' textBtn='Сохранить' isOpen={isEditProfilePopupOpen} children={formEditProfile}/>
     <PopupWithForm title='Новое место' name='pop-up-supplement-foto' textBtn='Создать' isOpen={isAddPlacePopupOpen}/>
     <PopupWithForm title='Обновить аватар' name='pop-up-upgred-avatar' textBtn='Да' isOpen={isEditAvatarPopupOpen}/>
     <Footer/>

     {/* <PopupWithForm title='Вы уверены?' name={'profile-popup'} textBtn='Да'/> */}

  {/* <div id='profile-popup' class="pop-up" tabindex="0">
    <div class="pop-up__container pop-up__container_background">
      <button class="pop-up__btn-close" type="button" aria-label="Close"></button>
      <h2 class="pop-up__title">
        Редактировать профиль
      </h2>
      <form id="edit-form" class="pop-up__form" action="#" name="popup-form" novalidate>
        <input id='nameInput' type="text" class="pop-up__text" name="content-name" value="" placeholder="Ваше имя" minlength='2' maxlength="40"  required/>
        <span id="nameInput-error" class="pop-up__span-error"></span>
        <input id='jobInput' type="text" class="pop-up__text" name="content-job" value="" placeholder="О себе" minlength='2' maxlength="200" required/>
        <span id="jobInput-error" class="pop-up__span-error"></span>
        <button class="pop-up__btn-save" type="submit">
          Сохранить
        </button>
      </form>
    </div>
  </div>
  <div id="pop-up-supplement-foto" class="pop-up" tabindex="0">
    <div class="pop-up__container pop-up__container_background">
      <button id="pop-up-supplement-foto__btn-close" class="pop-up__btn-close" type="button" aria-label="Close"></button>
      <h2 class="pop-up__title">
        Новое место
      </h2>
      <form id="pop-up-supplement-foto__form" class="pop-up__form" action="#" name="popup-form" novalidate>
        <input id='NameFoto' type="text" class="pop-up__text" name="content-name-foto" value="" placeholder='Название' minlength='2' maxlength="30" required/>
        <span id="NameFoto-error" class="pop-up__span-error"></span>
        <input id='linkFoto' type="url" class="pop-up__text" name="content-foto" value="" placeholder='Ссылка на картинку' required/>
        <span id="linkFoto-error" class="pop-up__span-error"></span>
        <button class="pop-up__btn-save" type="submit" >
          Создать
        </button>
      </form>
    </div>
  </div>
  <div id="pop-up-foto" class="pop-up" tabindex="0">
    <div class="pop-up__foto-container">
      <button id="pop-up-foto__btn-close" class="pop-up__btn-close" type="button" aria-label="Close"></button>
      <figure class="pop-up__block-figure">
        <img class="pop-up__img" src="<%=require('./images/foto_4.jpg')%>" alt="Вид на горы через деревья"/>
        <figcaption class="pop-up__text-img">
          Карачаево-Ч...
        </figcaption>
      </figure>
    </div>
  </div>
  <div id="pop-up-delete-foto" class="pop-up">
    <div class="pop-up__container pop-up__container_background">
      <button class="pop-up__btn-close" type="button" aria-label="Close"></button>
      <h2 class="pop-up__title">
        Вы уверены?
      </h2>
      <form id="pop-upDeleteFoto" class="pop-up__form" action="#" name="popup-form" novalidate>
        <button class="pop-up__btn-save pop-up__btn-save_size" type="submit" >
          Да
        </button>
      </form>
    </div>
  </div>
  <div id="pop-up-upgred-avatar" class="pop-up">
    <div class="pop-up__container pop-up__container_background">
      <button class="pop-up__btn-close" type="button" aria-label="Close"></button>
      <h2 class="pop-up__title">
        Обновить аватар
      </h2>
      <form id="pop-upUpgredAvatar" class="pop-up__form" action="#" name="popup-form" novalidate>
        <input id="linkFotoAvatar" type="url" class="pop-up__text" name="contentFotoAvatar" value="" placeholder='Ссылка на картинку' required/>
        <span id="linkFotoAvatar-error" class="pop-up__span-error"></span>
        <button class="pop-up__btn-save" type="submit" >
          Да
        </button>
      </form>
    </div>
  </div> */}
    </>
  );
}

export default App;
