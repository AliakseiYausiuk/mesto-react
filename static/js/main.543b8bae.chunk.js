(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(6),r=n.n(s),o=(n(14),n(9)),i=n(2),l=n.p+"static/media/logo.6129e9de.svg",u=n(0);function d(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("img",{className:"logo",src:l,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})})}var p=n.p+"static/media/Vector.f0dd9c51.svg",j=n.p+"static/media/plus.d5d6f8af.svg",b=c.a.createContext(),h=function(e){var t=e.card,n=e.onCardClick,c=e.onCardLike,s=e.onCardDelete,r=Object(a.useContext)(b);var o=t.owner._id===r._id,i=o?"cards__btn-delete":"",l=t.likes.some((function(e){return e._id===r._id}))?"cards__like cards__like_active":"cards__like";return Object(u.jsxs)("li",{id:t._id,className:"cards__card",children:[o&&Object(u.jsx)("button",{className:i,type:"button","aria-label":"btn-delete",onClick:function(){return function(e){s(e)}(t)}}),Object(u.jsxs)("figure",{className:"cards__list",children:[Object(u.jsx)("img",{className:"cards__foto",src:t.link,alt:t.name,onClick:function(){return function(e){n(e)}(t)}}),Object(u.jsx)("figcaption",{className:"cards__text",children:t.name}),Object(u.jsxs)("ul",{className:"cards__item",children:[Object(u.jsx)("li",{children:Object(u.jsx)("button",{className:l,type:"button","aria-label":"btn-like",onClick:function(){return function(e){c(e)}(t)}})}),Object(u.jsx)("li",{children:Object(u.jsx)("span",{className:"cards__like-number",children:t.likes.length})})]})]})]})},f=function(e){var t=e.cards,n=e.onCardLike,c=e.onCardDelete,s=e.onEditAvatar,r=e.onEditProfile,o=e.onAddPlace,i=e.onCardClick,l=Object(a.useContext)(b);return Object(u.jsxs)("main",{className:"main",children:[Object(u.jsxs)("section",{className:"profile",children:[Object(u.jsx)("div",{className:"profile__avatar-hover",children:Object(u.jsx)("img",{className:"profile__avatar",src:l?l.avatar:"",alt:"\u0410\u0432\u0430\u0442\u0430\u0440",onClick:s})}),Object(u.jsxs)("div",{className:"profile__list",children:[Object(u.jsx)("h1",{className:"profile__info",children:l?l.name:"\u0416\u0430\u043a-\u0418\u0432 \u041a\u0443\u0441\u0442\u043e"}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"profile__edit-button",type:"button","aria-label":"btn-edit",onClick:r,children:Object(u.jsx)("img",{src:p,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})}),Object(u.jsx)("div",{children:Object(u.jsx)("p",{className:"profile__text",children:l?l.about:"\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u043a\u0435\u0430\u043d\u0430"})})]}),Object(u.jsx)("button",{className:"profile__add-Button",type:"button","aria-label":"btn-add",onClick:o,children:Object(u.jsx)("img",{className:"profile__add-Btn-img",src:j,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u043f\u043b\u044e\u0441"})})]}),Object(u.jsx)("section",{className:"elements",children:Object(u.jsx)("ul",{className:"cards",children:t.map((function(e){return Object(u.jsx)(h,{card:e,onCardClick:i,onCardLike:n,onCardDelete:c},e._id)}))})})]})},m=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("p",{className:"footer__text",children:"\xa9 2020 Mesto Russia"})})},_=function(e){var t=e.card,n=e.onClose;return Object(u.jsx)("div",{id:"pop-up-foto",className:t?"pop-up pop-up_active":"pop-up",children:Object(u.jsxs)("div",{className:"pop-up__foto-container",children:[Object(u.jsx)("button",{id:"pop-up-foto__btn-close",className:"pop-up__btn-close",type:"button","aria-label":"Close",onClick:n}),Object(u.jsxs)("figure",{className:"pop-up__block-figure",children:[Object(u.jsx)("img",{className:"pop-up__img",src:t?t.link:"",alt:"\u0412\u0438\u0434 \u043d\u0430 \u0433\u043e\u0440\u044b \u0447\u0435\u0440\u0435\u0437 \u0434\u0435\u0440\u0435\u0432\u044c\u044f"}),Object(u.jsx)("figcaption",{className:"pop-up__text-img",children:t?t.name:""})]})]})})},O=n(7),x=n(8),v=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(O.a)(this,e),this._baseUrl=n,this._headers=a}return Object(x.a)(e,[{key:"getFullInfo",value:function(){return Promise.all([this.getInitialCards(),this.getUserData()])}},{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"userEdit",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._getResponseData(e)}))}},{key:"newCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"upgradeAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)}))}},{key:"incrementLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"decrementLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.decrementLike(e):this.incrementLike(e)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-24",headers:{authorization:"af9c4ef2-e2ab-4c32-9f5d-4c36de022449","Content-Type":"application/json"}}),g=function(e){var t=e.isOpen,n=e.onClose,a=e.name,c=e.onSubmit,s=e.textBtn,r=e.children,o=e.title;return Object(u.jsx)("div",{id:a,className:t?"pop-up pop-up_active":"pop-up",children:Object(u.jsxs)("div",{className:"pop-up__container pop-up__container_background",children:[Object(u.jsx)("button",{className:"pop-up__btn-close",type:"button","aria-label":"Close",onClick:n}),Object(u.jsx)("h2",{className:"pop-up__title",children:o}),Object(u.jsxs)("form",{id:"edit-form",className:"pop-up__form",action:"#",name:a,noValidate:!0,onSubmit:c,children:[r,Object(u.jsx)("button",{className:"pop-up__btn-save",type:"submit",children:s})]})]})})},C=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,s=Object(a.useContext)(b),r=Object(a.useState)(""),o=Object(i.a)(r,2),l=o[0],d=o[1],p=Object(a.useState)(""),j=Object(i.a)(p,2),h=j[0],f=j[1];Object(a.useEffect)((function(){d(s.name),f(s.about)}),[s]);return Object(u.jsxs)(g,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile-popup",textBtn:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:l,about:h})},children:[Object(u.jsx)("input",{id:"nameInput",type:"text",className:"pop-up__text",value:l||"",onChange:function(e){d(e.target.value)},name:"content-name",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",minLength:"2",maxLength:"40",required:!0}),Object(u.jsx)("span",{id:"nameInput-error",className:"pop-up__span-error"}),Object(u.jsx)("input",{id:"jobInput",type:"text",className:"pop-up__text",value:h||"",onChange:function(e){f(e.target.value)},name:"content-job",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",required:!0}),Object(u.jsx)("span",{id:"jobInput-error",className:"pop-up__span-error"})]})},k=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,s=Object(a.useRef)();return Object(u.jsxs)(g,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"pop-up-upgred-avatar",textBtn:"\u0414\u0430",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({avatar:s.current.value})},children:[Object(u.jsx)("input",{id:"linkFotoAvatar",type:"url",className:"pop-up__text",ref:s,name:"contentFotoAvatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(u.jsx)("span",{id:"linkFotoAvatar-error",className:"pop-up__span-error"})]})},N=function(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,s=Object(a.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1],d=Object(a.useState)(""),p=Object(i.a)(d,2),j=p[0],b=p[1];return Object(u.jsxs)(g,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"pop-up-supplement-foto",textBtn:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:o,link:j})},children:[Object(u.jsx)("input",{id:"NameFoto",type:"text",className:"pop-up__text",value:o||"",onChange:function(e){l(e.target.value)},name:"content-name-foto",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0}),Object(u.jsx)("span",{id:"NameFoto-error",className:"pop-up__span-error"}),Object(u.jsx)("input",{id:"linkFoto",type:"url",className:"pop-up__text",value:j||"",onChange:function(e){b(e.target.value)},name:"content-foto",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(u.jsx)("span",{id:"linkFoto-error",className:"pop-up__span-error"})]})};var y=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),r=Object(i.a)(s,2),l=r[0],p=r[1];Object(a.useEffect)((function(){v.getFullInfo().then((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];c(a),p(n)})).catch((function(e){return console.log(e)}))}),[]);var j=Object(a.useState)(!1),h=Object(i.a)(j,2),O=h[0],x=h[1],g=Object(a.useState)(!1),y=Object(i.a)(g,2),S=y[0],D=y[1],L=Object(a.useState)(!1),U=Object(i.a)(L,2),A=U[0],E=U[1],P=Object(a.useState)(null),F=Object(i.a)(P,2),R=F[0],I=F[1],T=function(){E(!1),x(!1),D(!1),I(null)};return Object(u.jsxs)(b.Provider,{value:n,children:[Object(u.jsx)(d,{}),Object(u.jsx)(f,{cards:l,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===n._id}));v.changeLikeCardStatus(e._id,t).then((function(t){p((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){v.deleteCard(e._id).then((function(t){var n=l.filter((function(t){return t._id!==e._id}));p(n)})).catch((function(e){return console.log(e)}))},onEditAvatar:function(){E(!0)},onEditProfile:function(){x(!0)},onAddPlace:function(){D(!0)},onCardClick:function(e){I(e)}}),Object(u.jsx)(C,{isOpen:O,onClose:T,onUpdateUser:function(e){v.userEdit(e).then((function(e){c(e),T()})).catch((function(e){return console.log(e)}))}}),Object(u.jsx)(N,{isOpen:S,onClose:T,onAddPlace:function(e){v.newCard(e).then((function(e){p([e].concat(Object(o.a)(l))),T()})).catch((function(e){return console.log(e)}))}}),Object(u.jsx)(k,{isOpen:A,onClose:T,onUpdateAvatar:function(e){v.upgradeAvatar(e.avatar).then((function(e){c(e),T()})).catch((function(e){return console.log(e)}))}}),Object(u.jsx)(_,{card:R,onClose:T}),Object(u.jsx)(m,{})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),S()}},[[16,1,2]]]);
//# sourceMappingURL=main.543b8bae.chunk.js.map