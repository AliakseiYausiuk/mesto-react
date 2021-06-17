
const PopupWithForm = (props) => {
    return (
    <div id={props.name} className={props.isOpen ? 'pop-up pop-up_active' : 'pop-up'}>
    <div className="pop-up__container pop-up__container_background">
      <button className="pop-up__btn-close" type="button" aria-label="Close" onClick={props.onClose}></button>
      <h2 className="pop-up__title">
        {props.title}
      </h2>
      <form id="edit-form" className="pop-up__form" action="#" name={props.name} noValidate>
        {props.children}
        <button className="pop-up__btn-save" type="submit">
          {props.textBtn}
        </button>
      </form>
    </div>
  </div>
    )
}

export default PopupWithForm
