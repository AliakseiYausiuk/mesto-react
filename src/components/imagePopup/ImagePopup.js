

const ImagePopup = (props) => {
    return (
      <div id="pop-up-foto" className={props.card ? "pop-up pop-up_active" : "pop-up"} tabindex="0">
        <div className="pop-up__foto-container">
          <button id="pop-up-foto__btn-close" className="pop-up__btn-close" type="button" aria-label="Close" onClick={props.onClose}></button>
          <figure className="pop-up__block-figure">
            <img className="pop-up__img" src="../../images/foto_4.jpg" alt="Вид на горы через деревья"/>
            <figcaption className="pop-up__text-img">
             Карачаево-Ч...
            </figcaption>
          </figure>
        </div>
      </div>
    )
}

export default ImagePopup
