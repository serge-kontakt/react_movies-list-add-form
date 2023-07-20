(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var a=i(6),s=i.n(a),c=(i(14),i(9)),n=i(2),l=i(1),r=(i(15),i(16),i(17),i(0)),d=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(r.jsxs)("div",{className:"content",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(d,{movie:e},e.imdbId)}))})},m=i(7),b=i.n(m);var j=function(e){var t=e.name,i=e.value,a=e.label,s=void 0===a?t:a,c=e.placeholder,d=void 0===c?"Enter ".concat(s):c,o=e.required,m=void 0!==o&&o,j=e.onChange,u=void 0===j?function(){}:j,h=e.setIsValidImg,g=e.setIsValidImdb,O=Object(l.useState)((function(){return"".concat(t,"-").concat(Math.random().toFixed(16).slice(2))})),p=Object(n.a)(O,1)[0],v=Object(l.useState)(!1),f=Object(n.a)(v,2),w=f[0],x=f[1],I=w&&m&&!i,M=!1,N=new RegExp(/^([A-Za-z]{3,9}:(?:\/\/)?)/.source+/(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|/.source+/(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+/.source+/(?:\/[+~%/.\w-_]*)?\??/.source+/(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*)?$/.source),U=N.test(i);U||!i||"imgUrl"!==t&&"imdbUrl"!==t||(M=!0);var V=function(e){!(U=N.test(e))&&e&&"imgUrl"===t&&h(!1),!U&&e&&"imdbUrl"===t&&g(!1),U&&e&&"imgUrl"===t&&h(!0),U&&e&&"imdbUrl"===t&&g(!0),u(e)};return Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:p,children:s}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{type:"text",id:p,"data-cy":"movie-".concat(t),className:b()("input",{"is-danger":I||M}),placeholder:d,value:i,onChange:function(e){return V(e.target.value)},onBlur:function(){return x(!0)}})}),I&&Object(r.jsx)("p",{className:"help is-danger",children:"".concat(s," is required")}),M&&Object(r.jsx)("p",{className:"help is-danger",children:"".concat(s," is not valid")})]})},u=function(e){var t=e.onAdd,i=Object(l.useState)(0),a=Object(n.a)(i,2),s=a[0],c=a[1],d=Object(l.useState)(""),o=Object(n.a)(d,2),m=o[0],b=o[1],u=Object(l.useState)(""),h=Object(n.a)(u,2),g=h[0],O=h[1],p=Object(l.useState)(""),v=Object(n.a)(p,2),f=v[0],w=v[1],x=Object(l.useState)(""),I=Object(n.a)(x,2),M=I[0],N=I[1],U=Object(l.useState)(""),V=Object(n.a)(U,2),y=V[0],T=V[1],B=Object(l.useState)(!0),_=Object(n.a)(B,2),S=_[0],k=_[1],z=Object(l.useState)(!0),A=Object(n.a)(z,2),D=A[0],C=A[1];function Y(e){return function(t){e(t)}}var F=!0;m&&f&&M&&y&&S&&D&&(F=!1);return Object(r.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),t({title:m,description:g,imgUrl:f,imdbUrl:M,imdbId:y}),b(""),O(""),w(""),N(""),T(""),k(!0),C(!0),c((function(e){return e+1}))},children:[Object(r.jsx)("h2",{className:"title",children:"Add a movie"}),Object(r.jsx)(j,{name:"title",label:"Title",value:m,setIsValidImg:k,setIsValidImdb:C,onChange:Y(b),required:!0}),Object(r.jsx)(j,{name:"description",label:"Description",value:g,setIsValidImg:k,setIsValidImdb:C,onChange:Y(O)}),Object(r.jsx)(j,{name:"imgUrl",label:"Image URL",value:f,setIsValidImg:k,setIsValidImdb:C,onChange:Y(w),required:!0}),Object(r.jsx)(j,{name:"imdbUrl",label:"Imdb URL",value:M,setIsValidImg:k,setIsValidImdb:C,onChange:Y(N),required:!0}),Object(r.jsx)(j,{name:"imdbId",label:"Imdb ID",value:y,setIsValidImg:k,setIsValidImdb:C,onChange:Y(T),required:!0}),Object(r.jsx)("div",{className:"field is-grouped",children:Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:F,children:"Add"})})})]},s)},h=i(8),g=function(){var e=Object(l.useState)(h),t=Object(n.a)(e,2),i=t[0],a=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(o,{movies:i})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(u,{onAdd:function(e){a((function(t){return[].concat(Object(c.a)(t),[e])}))}})})]})};s.a.render(Object(r.jsx)(g,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.2764368a.chunk.js.map