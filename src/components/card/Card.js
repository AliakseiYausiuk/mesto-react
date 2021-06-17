import React from 'react'

const Card = (props) => {

    function handleClick() {
        props.onCardClick(props.card);
      }  

    return (
        <li key={props.keyId} id={props.card.id} className="cards__card">
            <button className="cards__btn-delete" type="button" aria-label="btn-delete"></button>
            <figure className="cards__list">
            <img className="cards__foto" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
            <figcaption className="cards__text">
                {props.card.name}
            </figcaption>
            <ul className="cards__item">
                <li key={props.keyID}>
                  <button className="cards__like" type="button" aria-label="btn-like"></button>
                </li>
                <li key={props.keyID}>
                    <span className="cards__like-number"></span>
                </li>
            </ul>
            </figure>
        </li>
    )
}

export default Card
