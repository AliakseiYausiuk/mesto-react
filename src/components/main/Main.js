import avatar from '../../images/avatar.jpg';
import vector from '../../images/Vector.svg';
import plus from '../../images/plus.svg';

const Main = (props) => {

    return (
      <main className="main">
        <section className="profile">
        <div className="profile__avatar-hover">
        <img className="profile__avatar" src={avatar} alt="Аватар" onClick={props.onEditAvatar}/>
        </div>
        <div className="profile__list">
          <h1 className="profile__info">Жак-Ив Кусто</h1>
          <div>
            <button className="profile__edit-button" type="button" aria-label="btn-edit" onClick={props.onEditProfile}>
              <img src={vector} alt="Кнопка редактировать"/>
            </button>
          </div>
          <div>
            <p className="profile__text">Исследователь океана</p>
          </div>
      </div>
      <button className="profile__add-Button" type="button" aria-label="btn-add" onClick={props.onAddPlace}>
        <img className="profile__add-Btn-img" src={plus} alt="Кнопка плюс"/>
      </button>
        </section>
      <section className="elements">
      <ul className="cards"></ul>
      </section>
      </main>
    )
}

export default Main

