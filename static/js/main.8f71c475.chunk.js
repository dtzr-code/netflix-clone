(this.webpackJsonpnetflix2=this.webpackJsonpnetflix2||[]).push([[0],{111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){"use strict";n.r(t);var c=n(3),i=n.n(c),s=n(27),a=n.n(s),r=(n(69),n(6)),o=(n(70),n(71),n(7)),l=n(45),d=l.a.initializeApp({apiKey:"AIzaSyCYj-nO_6jG-SudmEClm30fT6d6haqQPCM",authDomain:"netflix2-clone-e95d8.firebaseapp.com",projectId:"netflix2-clone-e95d8",storageBucket:"netflix2-clone-e95d8.appspot.com",messagingSenderId:"373441766595",appId:"1:373441766595:web:7839bae3756a7734856e76"}).firestore(),j=l.a.auth(),h=d,u=(n(75),n.p+"static/media/search--icon.7560b3eb.png"),b=n(1);var p=function(e){var t=e.value,n=e.handleChange,i=Object(o.f)(),s=Object(c.useState)(!1),a=Object(r.a)(s,2),l=a[0],d=a[1],h=Object(c.useState)(!1),p=Object(r.a)(h,2),m=p[0],f=p[1],x=Object(c.useState)(!1),O=Object(r.a)(x,2),g=O[0],v=O[1],_=Object(c.useState)(!1),N=Object(r.a)(_,2),w=N[0],y=N[1],S=Object(c.useState)(!0),k=Object(r.a)(S,2),A=k[0],C=k[1],P=function(){d(!l)},E=function(){window.scrollY>100?f(!0):f(!1)};return Object(c.useEffect)((function(){return window.addEventListener("scroll",E),function(){window.removeEventListener("scroll",E)}}),[]),Object(b.jsxs)("div",{className:"nav ".concat(m&&"nav__black"),children:[" ",Object(b.jsxs)("div",{className:"nav__contents",children:[Object(b.jsx)("img",{onClick:function(){return i.push("/home")},className:"nav__logo",src:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:"Netflix__logo"}),Object(b.jsx)("div",{className:"navbar__selection",children:Object(b.jsxs)("ul",{className:"navbar__ul",children:[Object(b.jsx)("li",{className:"navbar__li",children:"Home"}),Object(b.jsx)("li",{className:"navbar__li",children:"Series"}),Object(b.jsx)("li",{className:"navbar__li",children:"Films"}),Object(b.jsx)("li",{className:"navbar__li",children:"New and Popular"}),Object(b.jsx)("li",{className:"navbar__li",children:"My List"})]})}),Object(b.jsxs)("div",{className:"navbar__dropdown",children:[Object(b.jsx)("button",{onMouseOver:P,className:"dropbtn",children:" Browse "}),Object(b.jsxs)("div",{style:{display:l?"flex":"none"},onMouseMove:P,className:"dropdown__content",children:[Object(b.jsx)("option",{className:"dropdown__option",children:"Home"}),Object(b.jsx)("option",{className:"dropdown__option",children:"Series"}),Object(b.jsx)("option",{className:"dropdown__option",children:"Films"}),Object(b.jsx)("option",{className:"dropdown__option",children:"News and Popular"}),Object(b.jsx)("option",{className:"dropdown__option",children:"My List"})]})]}),Object(b.jsxs)("div",{className:"search__bar",children:[Object(b.jsx)("img",{onClick:function(){v(!g)},src:u,alt:""}),Object(b.jsx)("input",{style:{display:g?"inline-block":"none",transform:g?"scaleX(1)":"none"},placeholder:"Titles, people, genres",value:t,onChange:n})]}),Object(b.jsxs)("div",{className:"dropdown",children:[Object(b.jsx)("img",{onClick:function(){A?(C(!A),i.push("./home")):i.push("./profile")},onMouseEnter:function(){y(!w)},className:"nav__avatar",src:"https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcGt38lP6INwT06gZ5Nn1fi8zT7r-ad0GfCsiLhB6zibZZCCCq_0EdrPvh5_-xs-pNl0Bilexan-d2mjkdyUGLbcEgB7.png?r=8aa",alt:""}),Object(b.jsxs)("div",{style:{display:w?"inline-block":"none"},className:"settings__container",children:[Object(b.jsxs)("div",{className:"profiles__columns",children:[Object(b.jsxs)("div",{className:"profile__column",children:[Object(b.jsx)("img",{src:"https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYbN2li_u3UMH4coDfBhqybOKYFnffjNB-tZ4qANwBa5drVi9_-Wr3sHmibY6gxM_Uizr856wW0cFLkDdGBSRnwpo7ij.png?r=2ca",alt:""}),Object(b.jsx)("p",{children:"Christina"})]}),Object(b.jsxs)("div",{className:"profile__column",children:[Object(b.jsx)("img",{src:"https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeUqbfriC_pGWtwTa1KOx-ZSiQYa7ltLkOuduGxY_GRRc41ugYJNGYHe4LNcmshST4qkRSENvcs2xFomPc0rtX8wq2NG.png?r=b97",alt:""}),Object(b.jsx)("p",{children:"Alvin"})]}),Object(b.jsxs)("div",{className:"profile__column",children:[Object(b.jsx)("img",{src:"https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABff9GwVfmWtIhQBhZVLjKfT9MzvpJ99k4whm5tLNuu006c_wBrRuAiNJJIztprmSh-qB7GM5P70bOGOZHnewedP84pLe.png?r=3ce",alt:""}),Object(b.jsx)("p",{children:"Issac"})]}),Object(b.jsxs)("div",{className:"profile__column",children:[Object(b.jsx)("img",{src:"https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdm_-DEYu1y2T38LnXWSy-u7u24MbY361Zg2WziU3fOqSJy3w2j3-7E9f6FQVC_Rv3zj3xGZ1SQM7F6G8WjR4XFnHwDL.png?r=fcd",alt:""}),Object(b.jsx)("p",{children:"Children"})]})]}),Object(b.jsx)("h3",{onClick:function(){return i.push("./ManageProfiles")},className:"with_border_bottom",children:"Manage Profiles"}),Object(b.jsx)("h3",{className:"with_border_bottom",children:"Children"}),Object(b.jsxs)("div",{className:"account__settings",children:[Object(b.jsx)("h3",{children:"Account"}),Object(b.jsx)("h3",{children:"Help Centre"}),Object(b.jsx)("h3",{onClick:function(){return j.signOut()},children:"Sign out of Netflix"})]})]})]})]})]})},m=n(10),f=n.n(m),x=n(14),O=(n(82),n(58)),g=n.n(O).a.create({baseURL:"https://api.themoviedb.org/3"}),v=n(33),_="42eaaa59ab5be7034f6be8632db0d817",N={fetchTrending:"/trending/all/week?api_key=".concat(_,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(_,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(_,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(_,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(_,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(_,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(_,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(_,"&with_genres=99")};var w=function(e){var t=e.title,n=e.fetchUrl,i=e.isLargeRow,s=void 0!==i&&i,a=Object(c.useState)([]),o=Object(r.a)(a,2),l=o[0],d=o[1],j=Object(c.useState)(""),h=Object(r.a)(j,2),u=h[0],p=h[1];Object(c.useEffect)((function(){function e(){return(e=Object(x.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get(n);case 2:return t=e.sent,d(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);var m=function(){var e=Object(x.a)(f.a.mark((function e(t){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u){e.next=4;break}p(""),e.next=8;break;case 4:return e.next=6,g.get("/movie/".concat(t.id,"/videos?api_key=").concat(_));case 6:c=e.sent,p(null===(n=c.data.results[0])||void 0===n?void 0:n.key);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("div",{className:"row__posters",children:l.map((function(e){return(s&&e.poster_path||!s&&e.backdrop_path)&&Object(b.jsx)("img",{onClick:function(){return m(e)},className:"row__poster ".concat(s&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original").concat(s?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),u&&Object(b.jsx)(v.a,{videoId:u,opts:{height:"500",width:"100%",playerVars:{autoplay:1}}})]})};n(111);var y=function(e){var t=e.title,n=e.fetchUrl,i=void 0!==n&&n,s=Object(c.useState)([]),a=Object(r.a)(s,2),o=a[0],l=a[1],d=Object(c.useState)(""),j=Object(r.a)(d,2),h=j[0],u=j[1];Object(c.useEffect)((function(){function e(){return(e=Object(x.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get(i);case 2:return t=e.sent,l(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i]);var p=function(){var e=Object(x.a)(f.a.mark((function e(t){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h){e.next=4;break}u(""),e.next=8;break;case 4:return e.next=6,g.get("/movie/".concat(t.id,"/videos?api_key=").concat(_));case 6:c=e.sent,u(null===(n=c.data.results[0])||void 0===n?void 0:n.key);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"searchrow__container",children:Object(b.jsxs)("div",{className:"searchrow",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("div",{className:"searchrow__posters",children:o.map((function(e){return Object(b.jsx)("img",{onClick:function(){return p(e)},className:"searchrow__poster",src:"".concat("https://image.tmdb.org/t/p/original").concat(e.backdrop_path),alt:e.name},e.id)}))}),h&&Object(b.jsx)(v.a,{videoId:h,opts:{height:"500",width:"100%",playerVars:{autoplay:1}}})]})})};n(112);var S=function(){var e,t,n=Object(c.useState)([]),i=Object(r.a)(n,2),s=i[0],a=i[1];return Object(c.useEffect)((function(){function e(){return(e=Object(x.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get(N.fetchNetflixOriginals);case 2:return t=e.sent,a(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(b.jsx)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===s||void 0===s?void 0:s.backdrop_path,'")'),backgroundPosition:"center center"},children:Object(b.jsxs)("div",{className:"banner__contents",children:[Object(b.jsx)("h1",{className:"banner__title",children:(null===s||void 0===s?void 0:s.title)||(null===s||void 0===s?void 0:s.name)||(null===s||void 0===s?void 0:s.orginal_name)}),Object(b.jsxs)("div",{className:"banner__buttons",children:[Object(b.jsx)("button",{className:"banner__button",children:"Play"}),Object(b.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(b.jsx)("h1",{className:"banner__description",children:(e=null===s||void 0===s?void 0:s.overview,t=100,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]})})};var k,A,C,P,E,R,L,B,T,G,F,M,I=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],i=t[1],s="https://api.themoviedb.org/3/search/movie?api_key=".concat(_,"&query=").concat(n);return Object(b.jsxs)("div",{className:"homeScreen",children:[Object(b.jsx)(p,{value:n,handleChange:function(e){return function(e){i(e)}(e.target.value)}}),n?Object(b.jsx)(y,{title:"Search Results",fetchUrl:s}):Object(b.jsxs)("div",{children:[Object(b.jsx)(S,{}),Object(b.jsx)(w,{title:"NETFLIX ORIGINALS",fetchUrl:N.fetchNetflixOriginals,isLargeRow:!0}),Object(b.jsx)(w,{title:"Trending Now",fetchUrl:N.fetchTrending}),Object(b.jsx)(w,{title:"Top Rated",fetchUrl:N.fetchTopRated}),Object(b.jsx)(w,{title:"Action Movies",fetchUrl:N.fetchActionMovies}),Object(b.jsx)(w,{title:"Comedy Movies",fetchUrl:N.fetchComedyMovies}),Object(b.jsx)(w,{title:"Horror Movies",fetchUrl:N.fetchHorrorMovies}),Object(b.jsx)(w,{title:"Romance Movies",fetchUrl:N.fetchRomanceMovies}),Object(b.jsx)(w,{title:"Documentaries",fetchUrl:N.fetchDocumentaries})]})]})},U=n(28),V=(n(113),n.p+"static/media/home1.058a6091.png"),H=n.p+"static/media/home2.4df1a4ec.png",W=n.p+"static/media/home3.81b9d64b.png",J=n(20),z=n(21),Y=n(44),Z=z.a.div(k||(k=Object(J.a)(["\n  background-color: black;\n  color: #595959;\n  width: 100%;\n"]))),q=z.a.div(A||(A=Object(J.a)(["\n  display: grid;\n  flex-direction: column;\n  text-align: left;\n  margin-left: 250px;\n"]))),K=z.a.div(C||(C=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n"]))),D=z.a.p(P||(P=Object(J.a)(["\n  font-size: 18px;\n  font-weight: normal;\n  padding: 20px;\n"]))),Q=Object(z.a)(Y.Link)(E||(E=Object(J.a)(["\n  text-decoration: none;\n  font-size: 18px;\n  font-weight: normal;\n  cursor: pointer;\n\n  &:hover {\n    text-decoration: underline;\n    cursor: pointer;\n  }\n"]))),X=z.a.div(R||(R=Object(J.a)(["\n  display: flex;\n  flex-direction: row\n  justify-content: center;\n  align-items: center;\n"]))),$=z.a.div(L||(L=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  margin-right: 60px;\n"]))),ee=Object(z.a)(Y.Link)(B||(B=Object(J.a)(["\n  text-decoration: none;\n  font-size: 13px;\n  padding: 5px;\n\n  &:hover {\n    text-decoration: underline;\n    cursor: pointer;\n  }\n"]))),te=z.a.div(T||(T=Object(J.a)(["\n  margin-left: 20px;\n  padding: 0 20px 20px 20px;\n  align-items: center;\n  justify-content: center;\n"]))),ne=z.a.select(G||(G=Object(J.a)(["\n  padding: 10px 12px 12px 10px;\n  cursor: pointer;\n  background-color: transparent;\n  outline: white;\n  color: white;\n  font-size: 1rem;\n"]))),ce=z.a.option(F||(F=Object(J.a)(["\n  color: black;\n  cursor: pointer;\n"]))),ie=z.a.p(M||(M=Object(J.a)(["\n  font-size: 0.8rem;\n  margin-bottom: 5px;\n  margin-left: 20px;\n  padding-left: 20px;\n"]))),se=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(Z,{children:Object(b.jsxs)(q,{children:[Object(b.jsxs)(K,{children:[Object(b.jsxs)(D,{children:[" Questions? Call ",Object(b.jsx)(Q,{to:"/",children:" 800 852 6334 "})," "]}),Object(b.jsxs)(X,{children:[Object(b.jsxs)($,{children:[Object(b.jsx)(ee,{to:"/",children:"FAQ"}),Object(b.jsx)(ee,{to:"/",children:"Investor Relations"}),Object(b.jsx)(ee,{to:"/",children:"Privacy"}),Object(b.jsx)(ee,{to:"/",children:"Speed Test"})]}),Object(b.jsxs)($,{children:[Object(b.jsx)(ee,{to:"/",children:"Help Centre"}),Object(b.jsx)(ee,{to:"/",children:"Jobs"}),Object(b.jsx)(ee,{to:"/",children:"Cookie Preference"}),Object(b.jsx)(ee,{to:"/",children:"Legal Notices"})]}),Object(b.jsxs)($,{children:[Object(b.jsx)(ee,{to:"/",children:"Account"}),Object(b.jsx)(ee,{to:"/",children:"Ways to Watch"}),Object(b.jsx)(ee,{to:"/",children:"Corporate Information"}),Object(b.jsx)(ee,{to:"/",children:"Netflix Originals"})]}),Object(b.jsxs)($,{children:[Object(b.jsx)(ee,{to:"/",children:"Media Centre"}),Object(b.jsx)(ee,{to:"/",children:"Terms of Use"}),Object(b.jsx)(ee,{to:"/",children:"Contact Us"})]})]})]}),Object(b.jsx)(te,{children:Object(b.jsxs)(ne,{placeholder:"English",children:[Object(b.jsx)(ce,{value:"selected",hidden:!0,children:" Choose Your Language "}),Object(b.jsx)(ce,{children:"English"}),Object(b.jsx)(ce,{children:"Chinese"})]})}),Object(b.jsx)(ie,{children:"Netflix Singapoe"})]})})})},ae=(n(121),[{id:1,header:"What is Netflix?",body:"Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more \u2013 on thousands of internet-connected devices. \n\nYou can watch as much as you want, whenever you want, without a single advert \u2013 all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!"},{id:2,header:"How much does Netflix cost?",body:"Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one fixed monthly fee. Plans range from $11.98 to $19.98 a month. No extra costs, no contracts."},{id:3,header:"Where can I watch?",body:" Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. \n\n You can also download your favourite programmes with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."},{id:4,header:"How do I cancel?",body:"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees \u2013 start or stop your account at any time."},{id:5,header:"What can I watch on Netflix?",body:"Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals, and more. Watch as much as you want, any time you want."},{id:6,header:"Is Netflix good for children?",body:"The Netflix Children's experience is included in your membership to give parents control while children enjoy family-friendly TV programmes and films in their own space. \n\n Children's profiles come with PIN-protected parental controls that let you restrict the maturity rating of content children can watch and block specific titles you don\u2019t want children to see."}]),re=function(e){var t=e.header,n=e.body,i=(e.id,Object(c.useState)(!1)),s=Object(r.a)(i,2),a=s[0],o=s[1];return Object(b.jsxs)("div",{className:"question--container",children:[Object(b.jsxs)("button",{className:"accordion",onClick:function(){return o(!a)},children:[t,!a&&Object(b.jsx)("p",{children:"+"}),a&&Object(b.jsx)("p",{children:"x"})]}),a&&Object(b.jsx)("div",{className:"panel",children:Object(b.jsx)("p",{children:n})})]})};var oe=function(){return Object(b.jsxs)("div",{className:"accordion__container",children:[Object(b.jsx)("h1",{children:" Frequently Asked Questions "}),Object(b.jsx)(b.Fragment,{children:ae.map((function(e){var t=e.header,n=e.body,c=e.id;return Object(b.jsx)(re,{header:t,body:n},c)}))})]})};var le=function(){var e=Object(o.f)();return Object(b.jsxs)("div",{className:"loginScreen",children:[Object(b.jsx)("div",{className:"loginScreen__background",children:Object(b.jsx)("div",{className:"loginScreen__gradient",children:Object(b.jsxs)("div",{className:"loginScreen__navbar",children:[Object(b.jsx)("img",{className:"loginScreen__logo",src:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:""}),Object(b.jsx)("button",{onClick:function(){return e.push("/signin")},className:"loginScreen__button",children:"Sign In"})]})})}),Object(b.jsxs)("div",{className:"loginScreen__body",children:[Object(b.jsx)("h1",{children:"Unlimited films, TV Programmes and more."}),Object(b.jsx)("h2",{children:"Watch anywhere. Cancel at any time."}),Object(b.jsx)("h3",{children:"Ready to watch? Enter your email to create or restart your membership"}),Object(b.jsx)("div",{className:"loginScreen__input",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"email",placeholder:"Email Address"}),Object(b.jsx)("button",{onClick:function(){return e.push("/signin")},className:"loginScreen__getStarted",children:"GET STARTED"})]})}),Object(b.jsxs)("div",{className:"loginScreen__items",children:[Object(b.jsx)("span",{className:"greySpan"}),Object(b.jsxs)("div",{className:"loginScreen__itemA",children:[Object(b.jsxs)("div",{className:"item--description",children:[Object(b.jsx)("h1",{children:"Enjoy on your TV."}),Object(b.jsx)("p",{children:" Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more. "})]}),Object(b.jsx)("img",{className:"item--img",alt:"",src:V})]}),Object(b.jsx)("span",{className:"greySpan"}),Object(b.jsxs)("div",{className:"loginScreen__itemB",children:[Object(b.jsxs)("div",{className:"item--description",children:[Object(b.jsx)("h1",{children:"Download your programmes to watch offline."}),Object(b.jsx)("p",{children:" Save your favourites easily and always have something to watch. "})]}),Object(b.jsx)("img",{className:"item--img",alt:"",src:H})]}),Object(b.jsx)("span",{className:"greySpan"}),Object(b.jsxs)("div",{className:"loginScreen__itemC",children:[Object(b.jsxs)("div",{className:"item--description",children:[Object(b.jsx)("h1",{children:"Watch everywhere."}),Object(b.jsx)("p",{children:" Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more. "})]}),Object(b.jsx)("img",{className:"item--img",alt:"",src:W})]}),Object(b.jsx)("span",{className:"greySpan"})]}),Object(b.jsx)(oe,{}),Object(b.jsxs)("div",{className:"get__started",children:[Object(b.jsx)("p",{children:"Ready to watch? Enter your email to create or restart your membership."}),Object(b.jsx)("div",{className:"loginScreen__input_2",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"email",placeholder:"Email Address"}),Object(b.jsx)("button",{onClick:function(){return e.push("/signin")},className:"loginScreen__getStarted_2",children:"GET STARTED"})]})})]}),Object(b.jsx)("span",{className:"greySpan"}),Object(b.jsx)(se,{})]})]})},de=n(23),je=n(34),he=Object(je.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),ue=he.actions,be=ue.login,pe=ue.logout,me=function(e){return e.user.user},fe=he.reducer;n(122);var xe=function(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),n=t[0],i=t[1],s=Object(de.c)(me),a=Object(c.useState)(!1),l=Object(r.a)(a,2),d=l[0],j=l[1],u=Object(o.f)(),p=function(){window.scrollY>100?j(!0):j(!1)};Object(c.useEffect)((function(){return window.addEventListener("scroll",p),function(){window.removeEventListener("scroll",p)}}),[p]);var m=Object(c.useState)(),O=Object(r.a)(m,2),g=O[0],v=O[1];return Object(c.useEffect)((function(){h.collection("customers").doc(s.uid).collection("subscriptions").get().then((function(e){e.forEach(function(){var e=Object(x.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.exists?v(!0):v(!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}),[s.uid]),Object(b.jsxs)("div",{className:"Fullnav ".concat(d&&"Fullnav__black"),children:[" ",Object(b.jsxs)("div",{className:"Fullnav__contents",children:[Object(b.jsx)("img",{onClick:function(){return g?u.push("/home"):alert("Please subscribe to a plan first")},className:"Fullnav__logo",src:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:""}),Object(b.jsx)("img",{onClick:function(){n?(i(!n),u.push("./home")):u.push("./profile")},className:"Fullnav__avatar",src:"https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcGt38lP6INwT06gZ5Nn1fi8zT7r-ad0GfCsiLhB6zibZZCCCq_0EdrPvh5_-xs-pNl0Bilexan-d2mjkdyUGLbcEgB7.png?r=8aa",alt:""})]})]})},Oe=(n(123),n(64));var ge=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1],s=Object(de.c)(me),a=Object(c.useState)(null),o=Object(r.a)(a,2),l=o[0],d=o[1];Object(c.useEffect)((function(){h.collection("customers").doc(s.uid).collection("subscriptions").get().then((function(e){e.forEach(function(){var e=Object(x.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d({role:t.data().role,current_period_end:t.data().current_period_end.seconds,current_period_start:t.data().current_period_start.seconds});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}),[]),Object(c.useEffect)((function(){h.collection("products").where("active","==",!0).get().then((function(e){var t={};e.forEach(function(){var e=Object(x.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t[n.id]=n.data(),e.next=3,n.ref.collection("prices").get();case 3:e.sent.docs.forEach((function(e){t[n.id].prices={priceId:e.id,priceData:e.data()}}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),i(t)}))}),[]),console.log("The products are: ",n),console.log("Subscription is: ",l);var j=function(){var e=Object(x.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("customers").doc(s.uid).collection("checkout_sessions").add({price:t,success_url:window.location.origin,cancel_url:window.location.origin});case 2:e.sent.onSnapshot(function(){var e=Object(x.a)(f.a.mark((function e(t){var n,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.data(),c=n.error,i=n.sessionId,c&&alert("An error occured: ".concat(c.message)),!i){e.next=7;break}return e.next=5,Object(Oe.a)("pk_test_51IpNyNFws4ncZVjIE5PzlqMhXPP780p2H9hetmUSWL48bAnpSxUwzAmikcBNhORCyfolUWnt8dAs4gvlMEvKY6IJ00IUI0r1Gh");case 5:e.sent.redirectToCheckout({sessionId:i});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"planScreen",children:[Object(b.jsx)("br",{}),l&&Object(b.jsxs)("p",{children:["Renewal data: "," ",new Date(1e3*(null===l||void 0===l?void 0:l.current_period_end)).toLocaleDateString()]}),Object.entries(n).map((function(e){var t=Object(r.a)(e,2),n=t[0],c=t[1],i=c.name.includes(null===l||void 0===l?void 0:l.role);return Object(b.jsxs)("div",{className:"".concat(i&&"planScreen__plan--disabled"," planScreen__plan"),children:[Object(b.jsxs)("div",{className:"planScreen__info",children:[Object(b.jsx)("h5",{children:c.name}),Object(b.jsx)("h6",{children:c.description})]}),Object(b.jsx)("button",{onClick:function(){return!i&&j(c.prices.priceId)},children:i?"Current Package":"Subscribe"})]},n)}))]})};n(124);var ve=function(){var e=Object(o.f)(),t=Object(de.c)(me),n=Object(c.useState)("NIL"),i=Object(r.a)(n,2),s=i[0],a=i[1];return Object(c.useEffect)((function(){h.collection("customers").doc(t.uid).collection("subscriptions").get().then((function(e){e.forEach(function(){var e=Object(x.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a({role:t.data().role});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}),[t.uid]),Object(b.jsxs)("div",{className:"profileScreen",children:[Object(b.jsx)(xe,{})," ",Object(b.jsxs)("div",{className:"profileScreen__body",children:[Object(b.jsx)("h1",{children:"Edit Profile"}),Object(b.jsxs)("div",{className:"profileScreen__info",children:[Object(b.jsx)("img",{src:"https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcGt38lP6INwT06gZ5Nn1fi8zT7r-ad0GfCsiLhB6zibZZCCCq_0EdrPvh5_-xs-pNl0Bilexan-d2mjkdyUGLbcEgB7.png?r=8aa",alt:""}),Object(b.jsxs)("div",{className:"profileScreen__details",children:[Object(b.jsx)("h2",{children:t.email}),Object(b.jsxs)("div",{className:"profileScreen__plans",children:[Object(b.jsxs)("h3",{children:["Plans (Current Plan: ",s.role,")"]}),Object(b.jsx)(ge,{}),Object(b.jsx)("button",{onClick:function(){j.signOut(),e.push("/")},className:"profileScreen__signOut",children:"Sign Out"})]})]})]})]})]})};n(125);var _e=function(){var e=Object(o.f)();return Object(b.jsxs)("div",{className:"WatchScreen",children:[Object(b.jsx)("div",{className:"nav",children:Object(b.jsx)("img",{className:"nav__logo",src:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:""})}),Object(b.jsxs)("div",{className:"watchScreen__details",children:[Object(b.jsx)("h2",{children:"Who's watching?"}),Object(b.jsxs)("div",{className:"watchScreen__profiles",children:[Object(b.jsxs)("div",{className:"watchScreen__profile",children:[Object(b.jsx)("img",{onClick:function(){return e.push("/home")},src:"https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcGt38lP6INwT06gZ5Nn1fi8zT7r-ad0GfCsiLhB6zibZZCCCq_0EdrPvh5_-xs-pNl0Bilexan-d2mjkdyUGLbcEgB7.png?r=8aa",alt:""}),Object(b.jsx)("p",{children:"Derrick"})]}),Object(b.jsxs)("div",{className:"watchScreen__profile",children:[Object(b.jsx)("img",{onClick:function(){return e.push("/home")},src:"https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYbN2li_u3UMH4coDfBhqybOKYFnffjNB-tZ4qANwBa5drVi9_-Wr3sHmibY6gxM_Uizr856wW0cFLkDdGBSRnwpo7ij.png?r=2ca",alt:""}),Object(b.jsx)("p",{children:"Christina"})]}),Object(b.jsxs)("div",{className:"watchScreen__profile",children:[Object(b.jsx)("img",{onClick:function(){return e.push("/home")},src:"https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdm_-DEYu1y2T38LnXWSy-u7u24MbY361Zg2WziU3fOqSJy3w2j3-7E9f6FQVC_Rv3zj3xGZ1SQM7F6G8WjR4XFnHwDL.png?r=fcd",alt:""}),Object(b.jsx)("p",{children:"Children"})]}),Object(b.jsxs)("div",{className:"watchScreen__profile",children:[Object(b.jsx)("img",{onClick:function(){return e.push("/home")},src:"https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeUqbfriC_pGWtwTa1KOx-ZSiQYa7ltLkOuduGxY_GRRc41ugYJNGYHe4LNcmshST4qkRSENvcs2xFomPc0rtX8wq2NG.png?r=b97",alt:""}),Object(b.jsx)("p",{children:"Alvin"})]}),Object(b.jsxs)("div",{className:"watchScreen__profile",children:[Object(b.jsx)("img",{onClick:function(){return e.push("/home")},src:"https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABff9GwVfmWtIhQBhZVLjKfT9MzvpJ99k4whm5tLNuu006c_wBrRuAiNJJIztprmSh-qB7GM5P70bOGOZHnewedP84pLe.png?r=3ce",alt:""}),Object(b.jsx)("p",{children:"Issac"})]})]}),Object(b.jsx)("div",{className:"watchScreen__manage",children:Object(b.jsx)("button",{onClick:function(){return e.push("/ManageProfiles")},className:"watchScreen__manage_button",children:"MANAGE PROFILES"})})]})]})};n(126);var Ne=function(){var e=Object(o.f)();return Object(b.jsxs)("div",{className:"manageProfileScreen",children:[Object(b.jsx)("div",{className:"nav",children:Object(b.jsx)("img",{className:"nav__logo",src:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:""})}),Object(b.jsxs)("div",{className:"manageProfileScreen__details",children:[Object(b.jsx)("h2",{children:"Manage Profiles: "}),Object(b.jsxs)("div",{className:"manageProfileScreen__profiles",children:[Object(b.jsxs)("div",{className:"manageProfileScreen__profile",children:[Object(b.jsx)("img",{className:"profile--icon",src:"https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcGt38lP6INwT06gZ5Nn1fi8zT7r-ad0GfCsiLhB6zibZZCCCq_0EdrPvh5_-xs-pNl0Bilexan-d2mjkdyUGLbcEgB7.png?r=8aa",alt:""}),Object(b.jsx)("img",{className:"edit--icon",src:"https://cdn4.iconfinder.com/data/icons/interface-essential-3/24/pencil-modify-write-edit-change-writing-circle-512.png",alt:""}),Object(b.jsx)("p",{children:"Derrick"})]}),Object(b.jsxs)("div",{className:"manageProfileScreen__profile",children:[Object(b.jsx)("img",{className:"profile--icon",src:"https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYbN2li_u3UMH4coDfBhqybOKYFnffjNB-tZ4qANwBa5drVi9_-Wr3sHmibY6gxM_Uizr856wW0cFLkDdGBSRnwpo7ij.png?r=2ca",alt:""}),Object(b.jsx)("img",{className:"edit--icon",src:"https://cdn4.iconfinder.com/data/icons/interface-essential-3/24/pencil-modify-write-edit-change-writing-circle-512.png",alt:""}),Object(b.jsx)("p",{children:"Christina"})]}),Object(b.jsxs)("div",{className:"manageProfileScreen__profile",children:[Object(b.jsx)("img",{className:"profile--icon",src:"https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeUqbfriC_pGWtwTa1KOx-ZSiQYa7ltLkOuduGxY_GRRc41ugYJNGYHe4LNcmshST4qkRSENvcs2xFomPc0rtX8wq2NG.png?r=b97",alt:""}),Object(b.jsx)("img",{className:"edit--icon",src:"https://cdn4.iconfinder.com/data/icons/interface-essential-3/24/pencil-modify-write-edit-change-writing-circle-512.png",alt:""}),Object(b.jsx)("p",{children:"Alvin"})]}),Object(b.jsxs)("div",{className:"manageProfileScreen__profile",children:[Object(b.jsx)("img",{className:"profile--icon",src:"https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABff9GwVfmWtIhQBhZVLjKfT9MzvpJ99k4whm5tLNuu006c_wBrRuAiNJJIztprmSh-qB7GM5P70bOGOZHnewedP84pLe.png?r=3ce",alt:""}),Object(b.jsx)("img",{className:"edit--icon",src:"https://cdn4.iconfinder.com/data/icons/interface-essential-3/24/pencil-modify-write-edit-change-writing-circle-512.png",alt:""}),Object(b.jsx)("p",{children:"Issac"})]}),Object(b.jsxs)("div",{className:"manageProfileScreen__profile",children:[Object(b.jsx)("img",{className:"profile--icon",src:"https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdm_-DEYu1y2T38LnXWSy-u7u24MbY361Zg2WziU3fOqSJy3w2j3-7E9f6FQVC_Rv3zj3xGZ1SQM7F6G8WjR4XFnHwDL.png?r=fcd",alt:""}),Object(b.jsx)("img",{className:"edit--icon",src:"https://cdn4.iconfinder.com/data/icons/interface-essential-3/24/pencil-modify-write-edit-change-writing-circle-512.png",alt:""}),Object(b.jsx)("p",{children:"Children"})]})]}),Object(b.jsx)("div",{className:"manageProfileScreen__button",children:Object(b.jsx)("button",{onClick:function(){return e.push("./")},className:"manageProfile_button",children:"DONE"})})]})]})};n(127);var we=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null),n=Object(o.f)();return Object(b.jsx)("div",{className:"loginScreen__background",children:Object(b.jsxs)("div",{className:"loginScreen__gradient",children:[Object(b.jsx)("div",{className:"loginScreen__navbar",children:Object(b.jsx)("img",{className:"loginScreen__logo",src:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:""})}),Object(b.jsx)("div",{className:"signinScreen",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("h1",{children:"Sign In"}),Object(b.jsx)("input",{ref:e,placeholder:"Email",type:"email"}),Object(b.jsx)("input",{ref:t,placeholder:"Password",type:"password"}),Object(b.jsx)("button",{type:"submit",onClick:function(c){c.preventDefault(),j.signInWithEmailAndPassword(e.current.value,t.current.value).then((function(){n.push("/profile")})).catch((function(e){alert(e.message)}))},children:"Sign In"}),Object(b.jsxs)("h4",{children:[Object(b.jsx)("span",{className:"signinScreen__gray",children:"New to Netflix? "}),Object(b.jsx)("span",{className:"signinScreen__link",onClick:function(){return n.push("/signup")},children:"Sign Up now."})]})]})})]})})};n(128);var ye=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null),n=Object(c.useRef)(null),i=Object(o.f)();return Object(b.jsx)("div",{className:"loginScreen__background",children:Object(b.jsxs)("div",{className:"loginScreen__gradient",children:[Object(b.jsx)("div",{className:"loginScreen__navbar",children:Object(b.jsx)("img",{className:"loginScreen__logo",src:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:""})}),Object(b.jsx)("div",{className:"signupScreen",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("h1",{children:"Sign Up"}),Object(b.jsx)("input",{ref:n,placeholder:"First Name",type:"text"}),Object(b.jsx)("input",{ref:e,placeholder:"Email",type:"email"}),Object(b.jsx)("input",{ref:t,placeholder:"Password",type:"password"}),Object(b.jsx)("button",{type:"submit",onClick:function(n){n.preventDefault(),j.createUserWithEmailAndPassword(e.current.value,t.current.value).then().catch((function(e){alert(e.message)}))},children:"Sign Up"}),Object(b.jsxs)("h4",{children:[Object(b.jsx)("span",{className:"signupScreen__gray",children:"Already a member? "}),Object(b.jsx)("span",{className:"signupScreen__link",onClick:function(){return i.push("/signin")},children:"Sign in now."})]})]})})]})})};var Se=function(){var e=Object(de.c)(me),t=Object(de.b)();Object(c.useEffect)((function(){return j.onAuthStateChanged((function(e){t(e?be({uid:e.uid,email:e.email}):pe())}))}),[t,j]);var n=Object(c.useState)(),i=Object(r.a)(n,2),s=i[0],a=i[1];return j.currentUser&&h.collection("customers").doc(e.uid).collection("subscriptions").get().then((function(e){e.empty?a(!1):a(!0)})),Object(b.jsx)("div",{className:"app",children:Object(b.jsx)(U.a,{children:e?s?Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(_e,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/home",children:Object(b.jsx)(I,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/profile",children:Object(b.jsx)(ve,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/ManageProfiles",children:Object(b.jsx)(Ne,{})})]}):Object(b.jsx)(ve,{}):Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(le,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/signin",children:Object(b.jsx)(we,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/signup",children:Object(b.jsx)(ye,{})})]})})})},ke=Object(je.a)({reducer:{user:fe}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(de.a,{store:ke,children:Object(b.jsx)(Se,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},75:function(e,t,n){},82:function(e,t,n){}},[[129,1,2]]]);
//# sourceMappingURL=main.8f71c475.chunk.js.map