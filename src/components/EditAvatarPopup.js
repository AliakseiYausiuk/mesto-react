import React, {useRef} from 'react';
import PopupWithForm from './PopupWithForm';

const EditAvatarPopup = (props) => {

    // const [value, setValue] = React.useState('');
    const avatar = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
          avatar: avatar.current.value,
        });
    }
    
    // const handleChange = (e) => {
    //   setValue(e.target.value);
    // }
    

    return (
      <PopupWithForm title='Обновить аватар' name='pop-up-upgred-avatar' textBtn='Да' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
        <input id="linkFotoAvatar" type="url" className="pop-up__text" ref={avatar} name="contentFotoAvatar" placeholder='Ссылка на картинку' required/>
        {/* <input id="linkFotoAvatar" type="url" className="pop-up__text" ref={avatar} value={value || ''} onChange={handleChange} name="contentFotoAvatar" placeholder='Ссылка на картинку' required/> */}
        <span id="linkFotoAvatar-error" className="pop-up__span-error"></span>
      </PopupWithForm>
    )
}

export default EditAvatarPopup
