(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(24).concat([function(e,a,t){e.exports=t(53)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),o=t.n(l),s=t(2),i=t(3),c=t(5),m=t(4),u=t(6),d=t(21),p=t(10);t(29),t(30);function g(){var e=document.querySelector("#topNavbar");e.classList.contains("responsive")?e.classList.remove("responsive"):e.classList.add("responsive")}var f=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){document.querySelectorAll('#topNavbar ul li a[href^="#"]').forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"}),document.querySelector("#topNavbar").classList.remove("responsive")})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{id:"topNavbar",className:"topnav font-Oswald"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#about-me",className:"active font-Oswald uppercase"},"Felipe Seolin Bento")),r.a.createElement("li",null,r.a.createElement("a",{href:"#about-me"},"In\xedcio")),r.a.createElement("li",null,r.a.createElement("a",{href:"#details"},"Detalhes")),r.a.createElement("li",null,r.a.createElement("a",{href:"#skills"},"Habilidades")),r.a.createElement("li",null,r.a.createElement("a",{href:"#blog"},"Blog")),r.a.createElement("li",null,r.a.createElement("a",{href:"#works"},"Trabalhos")),r.a.createElement("li",null,r.a.createElement("a",{href:"#more"},"Informa\xe7\xf5es")),r.a.createElement("li",null,r.a.createElement("a",{href:"#contacts"},"Fale Comigo")),r.a.createElement("li",null,r.a.createElement("a",{href:"javascript:void(0);",className:"icon",onClick:g},"\u2630")))))}}]),a}(n.Component),E=(t(31),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={teste:!0},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=!0;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"color-mode"},r.a.createElement("img",{id:"changeColor",className:"light",src:"/assets/icons/dark.svg",alt:"Ativar modo escuro",onClick:function(){var a=document.querySelectorAll("section, div, input, textarea"),t=document.querySelector("#changeColor");e?(e=!1,t.src="/assets/icons/light.svg",t.title="Lights on",a.forEach(function(e){e.classList.toggle("dark")})):(e=!0,t.src="/assets/icons/dark.svg",t.title="Come to the dark side",a.forEach(function(e){e.classList.remove("dark")}))},title:"Come to the dark side!"})))}}]),a}(n.Component)),h=(t(32),t(33),function(e){var a=e.idSec,t=e.title,n=e.description,l=e.classes,o=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{id:a,className:l},r.a.createElement("h2",{className:"title font-teal"},t),r.a.createElement("p",{className:"description"},n),o))}),v=function(e){var a=e.children,t=e.idSubSec,n=e.title,l=e.description;return r.a.createElement("div",{id:t},r.a.createElement("h3",{className:"font-green-haze"},n),r.a.createElement("p",{className:"description"},l),a)},b=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={imgSize:21},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){for(var e=[],a=1;a<=this.state.imgSize;a++){var t="/assets/imgs/design".concat(a,".jpg");e.push(r.a.createElement("img",{key:a,src:t,alt:a}))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{idSec:"works",classes:"section",title:"Trabalhos Desenvolvidos",description:"Aqui est\xe3o alguns dos trabalhos que j\xe1 desenvolvi e tamb\xe9m os que estou desenvolvendo."},r.a.createElement(v,{title:"Websites"},r.a.createElement("p",null,"No meu est\xe1gio tive a oportunidade de trabalhar com alguns sistemas Web para a universidade e tamb\xe9m j\xe1 me aventurei fazendo alguns sites."),r.a.createElement("div",{className:"flex center flex-space-evenly works-imgs"},r.a.createElement("a",{href:"https://apoio.cp.utfpr.edu.br/Intranet/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/assets/imgs/apoio.png",alt:"Sistemas de Apoio ao C\xe2mpus"})),r.a.createElement("a",{href:"https://apoio.cp.utfpr.edu.br/apptv/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/assets/imgs/tv.png",alt:"TV do C\xe2mpus"})),r.a.createElement("a",{href:"https://felipeseolin.github.io/abrindo-portas/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/assets/imgs/abrindo-portas.png",alt:"Abrindo Portas"})))),r.a.createElement(v,{title:"Design Gr\xe1fico"},r.a.createElement("p",null,"Com Design Gr\xe1fico sempre realizei trabalhos sem inten\xe7\xf5es lucrativas. J\xe1 fiz trabalhos para projetos da universidade, igrejas e entre outros."),r.a.createElement("div",{className:"flex center flex-space-evenly works-imgs"},e))))}}]),a}(n.Component),S=(t(34),t(35),function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelector("#".concat(this.props.inputId));this.props.required&&e.setAttribute("required","required")}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:this.props.inputId},this.props.children),r.a.createElement("input",{id:this.props.inputId,name:this.props.inputId,className:this.props.classes,type:this.props.type,placeholder:this.props.placeholder,value:this.props.value}))}}]),a}(n.Component)),k=(t(36),function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelector("#".concat(this.props.id));this.props.required&&e.setAttribute("required","required")}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:this.props.id},this.props.children),r.a.createElement("textarea",{id:this.props.id,name:this.props.id,className:this.props.classes,placeholder:this.props.placeholder,rows:this.props.rows},this.props.value))}}]),a}(n.Component)),j=(t(37),function(e){var a=e.id,t=e.classes,n=e.type,l=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{id:a,className:t,type:n},l))}),w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"form",className:"flex flex-column"},r.a.createElement("h3",{className:"font-green-haze"},"Formul\xe1rio"),r.a.createElement("form",{action:"https://formspree.io/felipe.seolin@hotmail.com",method:"POST"},r.a.createElement(S,{inputId:"name",type:"text",required:"required",classes:"input"},"Nome *"),r.a.createElement(S,{inputId:"email",type:"email",classes:"input",required:"required"},"Email *"),r.a.createElement(S,{inputId:"subject",type:"text",classes:"input",required:"required"},"Assunto *"),r.a.createElement(k,{id:"message",rows:"10",classes:"textarea",required:"required"},"Mensagem *"),r.a.createElement(j,{type:"submit",classes:"btn"},"Enviar"))))},q=(t(38),function(e){var a=e.link,t=e.title,n=e.text;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"blogPreview"},r.a.createElement("a",{href:a,className:"flex flex-column font-white"},r.a.createElement("h3",null,t),r.a.createElement("p",null,n))))}),N=(t(39),t(20)),x=t.n(N),y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{animateIn:"fadeIn"},r.a.createElement(h,{idSec:"about-me",classes:"section flex nowrap center-all"},r.a.createElement("div",{className:"photo"}),r.a.createElement("div",null,r.a.createElement("h1",{className:"font-blue-lagoon"},"Felipe Seolin Bento"),r.a.createElement("p",null,"Eu sou um aluno de Engenharia de Software na Universidade Tecnol\xf3gica Federal do Paran\xe1, c\xe2mpus Corn\xe9lio Proc\xf3pio e este \xe9 o meu portf\xf3lio, fique a vontade de ver e conhecer um pouco mais sobre mim e sobre o meu trabalho. \xc9 importante ressaltar que esta p\xe1gina est\xe1 sempre em constru\xe7\xe3o!"),r.a.createElement("p",null,"Caso desejar visualizar ou baixar meu curr\xedculo (CV) \xe9 s\xf3",r.a.createElement("a",{href:"/assets/pdf/CV.pdf",target:"_blank"}," clicar aqui"),".")))))},A=(t(43),t(44),function(e){var a=e.children,t=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:t},a))}),F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{idSec:"details",classes:"section",title:"Detalhes",description:"Aqui est\xe3o algumas informa\xe7\xf5es a respeito de meus interesses, idiomas, forma\xe7\xe3o e atividades desenvolvidas."},r.a.createElement(v,{idSubSec:"interests",title:"Interesses",description:"Estes s\xe3o alguns dos interesses que eu possuo atualmente:"},r.a.createElement(A,{classes:"list flex center-all"},r.a.createElement("li",null,"Desenvolvimento Web"),r.a.createElement("li",null,"Web Design"),r.a.createElement("li",null,"Design Gr\xe1fico"),r.a.createElement("li",null,"Processamento Digital de Imagens"),r.a.createElement("li",null,"Intelig\xeancia Artificial"),r.a.createElement("li",{title:"User Experience"},"UX"))),r.a.createElement(v,{idSubSec:"languages",title:"L\xednguas Estrangeiras"},r.a.createElement("p",null,"Eu sempre me interessei muito em aprender outros idiomas e desejo aprender muitos outros! Atualmente al\xe9m do ",r.a.createElement("span",{className:"bold underline font-fruit-salad"},"portugu\xeas")," que tenho como l\xedngua nativa, possuo o ",r.a.createElement("span",{className:"bold underline font-fruit-salad"},"espa\xf1ol")," em n\xedvel intermedi\xe1rio e o ",r.a.createElement("span",{className:"bold underline font-fruit-salad"},"english")," em n\xedvel avan\xe7ado, sendo que para este \xfaltimo possuo mais de sete anos de curso no CCAA finalizando no n\xedvel master."),r.a.createElement("p",null,"Como j\xe1 disse gostaria de aprender novos idiomas entre eles est\xe3o:"),r.a.createElement(A,{classes:"flex list"},r.a.createElement("li",null,"Italiano"),r.a.createElement("li",null,"Franc\xeas"),r.a.createElement("li",null,"Alem\xe3o"))),r.a.createElement(v,{idSubSec:"formation",title:"Forma\xe7\xe3o"},r.a.createElement("h4",null,"UTFPR - Universidade Tecnol\xf3gica Federal do Paran\xe1"),r.a.createElement("p",null,"2017 - atualmente"),r.a.createElement("p",null,"Cursando bacharelado em Engenharia de Software, com previs\xe3o de t\xe9rmino para 2020."),r.a.createElement("h4",null,"Col\xe9gio Passo a Passo"),r.a.createElement("p",null,"2014 - 2016"),r.a.createElement("p",null,"Ensino M\xe9dio completo. Al\xe9m disso, neste col\xe9gio tamb\xe9m finalizei o ensino fundamental.")),r.a.createElement(v,{idSubSec:"developed-activities",title:"Atividades desenvolvidas"},r.a.createElement("p",null,"Aqui est\xe3o listadas algumas atividades que eu desenvolvo."),r.a.createElement(A,{classes:"flex list"},r.a.createElement("li",null,"Desenvolvimento Web - Full Stack"),r.a.createElement("li",null,"Design Gr\xe1fico"),r.a.createElement("li",null,"Desenvolvimento Desktop"),r.a.createElement("li",null,"Gerenciamento de Projeto")))))},I=(t(45),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{idSec:"skills",title:"Habilidades",description:"Abaixo est\xe3o listadas algumas de minhas habilidades.",classes:"green-haze font-white section"},r.a.createElement(A,{classes:"flex center list"},r.a.createElement("li",null,"HTML"),r.a.createElement("li",null,"CSS"),r.a.createElement("li",null,"SASS"),r.a.createElement("li",null,"JavaScript"),r.a.createElement("li",null,"JQuery"),r.a.createElement("li",null,"Angular 7"),r.a.createElement("li",null,"React JS"),r.a.createElement("li",null,"Node"),r.a.createElement("li",null,"PHP"),r.a.createElement("li",null,"Laravel"),r.a.createElement("li",null,"MySQL"),r.a.createElement("li",null,"PostgreSQL"),r.a.createElement("li",null,"Heroku"),r.a.createElement("li",null,"Github"),r.a.createElement("li",null,"Gitlab"),r.a.createElement("li",null,"Bitbucket"),r.a.createElement("li",null,"Scrum"),r.a.createElement("li",null,"Kanban"),r.a.createElement("li",null,"Engenharia de Software"),r.a.createElement("li",null,"Java"),r.a.createElement("li",null,"Linguagem C"),r.a.createElement("li",null,"Photoshop"),r.a.createElement("li",null,"Illustrator"),r.a.createElement("li",null,"Corel Draw"),r.a.createElement("li",null,"Comunica\xe7\xe3o"),r.a.createElement("li",null,"Lideran\xe7a em Projetos"),r.a.createElement("li",null,"XAMPP"))))}),O=(t(46),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{idSec:"more",classes:"section teal font-white",title:"Maiores Informa\xe7\xf5es",description:"Saiba mais a respeito da minha biografia e do meu contato com a profiss\xe3o"},r.a.createElement(v,{idSubSec:"biography",title:"Biografia"},r.a.createElement("p",null,"Nasci em 09 de abril de 1999 na cidade de Terra Rica, estado do Paran\xe1, sempre fui algu\xe9m muito esfor\xe7ado e respons\xe1vel que procura cada vez mais melhorar a si mesmo."),r.a.createElement("p",null,"Durante alguns anos de minha vida participei ativamente da par\xf3quia da minha cidade, o que contribuiu muito para o meu desenvolvimento pessoal e interpessoal, melhorando minha comunica\xe7\xe3o e conhecendo novas pessoas. Neste tempo tamb\xe9m estive a frente de movimentos e grupos, desenvolvendo minha lideran\xe7a."),r.a.createElement("p",null,"Atualmente estou cursando Engenharia de Software da Universidade Tecnol\xf3gica Federal do Paran\xe1, na cidade de Corn\xe9lio Proc\xf3pio, cheguei por aqui no in\xedcio de 2017. Interessei-me por este curso porque sempre gostei de tecnologia, assim como tamb\xe9m me atraia mais a parte de software em um computador."),r.a.createElement("p",null,"Ainda n\xe3o sei muito o que esperar de meu futuro, por\xe9m gostaria de fazer mestrado para tentar ingressar em uma carreira acad\xeamica. Tamb\xe9m gostaria de fazer um interc\xe2mbio e posteriormente ingressar em uma empresa que me incentivasse a aprender novas tecnologias.")),r.a.createElement(v,{idSubSec:"work-review",title:"Contato com a profis\xe3o"},r.a.createElement("h4",null,"Design Gr\xe1fico / WebDesign"),r.a.createElement("p",null,"O primeiro contato profissional que possui foi com a \xe1rea de design gr\xe1fico, j\xe1 realizando alguns trabalhos independentes. Atualmente fa\xe7o menos trabalhos deste tipo, por\xe9m continuo me interessando muito por esta \xe1rea e gostaria de aperfei\xe7oar meus conhecimentos. Isso foi poss\xedvel gra\xe7as a um curso profissionalizante de WebDesign onde aprendi",r.a.createElement("span",{className:"bold"}," Photoshop, Corel Draw, Dreamweaver e Flash"),"."),r.a.createElement("h4",null,"Est\xe1gio em Desenvolvimento Web Full Stack"),r.a.createElement("p",null,"Em maio de 2018 ingressei no est\xe1gio de desenvolvimento web na UTFPR, na Coordenadoria de Gest\xe3o de Tecnologia da Informa\xe7\xe3o, mais especificamente na Divis\xe3o de Projetos de Sistemas de Informa\xe7\xe3o, o qual eu estou at\xe9 hoje. O est\xe1gio \xe9 focado em desenvolver sistemas para o pr\xf3prio uso da universidade, sendo assim fiz o uso de",r.a.createElement("span",{className:"bold"}," PHP, PostgreSQL, HTML 5, CSS 3, JavaScript, Bootstrap, Jquery, Angular 7"),", entre outras tecnologias."))))}),C=(t(47),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{idSec:"contacts",classes:"section",title:"Fale comigo",description:"Sinta-se a vontade para puxar assunto comigo"},r.a.createElement("div",{className:"flex row"},r.a.createElement("div",{id:"social-media",className:"flex flex-column"},r.a.createElement("h3",{className:"font-green-haze"},"Redes Sociais"),r.a.createElement("div",{className:"flex center-all"},r.a.createElement("a",{href:"https://www.facebook.com/felipe.seolinbento",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/assets/icons/facebook.svg",alt:"Facebook"})),r.a.createElement("a",{href:"https://www.instagram.com/felipesebe",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/assets/icons/instagram.svg",alt:"Instagram"})),r.a.createElement("a",{href:"https://github.com/felipeseolin",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/assets/icons/github.svg",alt:"Github"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/felipe-seolin-bento-55a915152",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/assets/icons/linkedin.svg",alt:"LinkedIn"})),r.a.createElement("a",{href:"mailto:bentof@alunos.utfpr.edu.br",title:"Email Institucional"},r.a.createElement("img",{src:"/assets/icons/mail.svg",alt:"Email Institucional"})),r.a.createElement("a",{href:"mailto:felipe.seolin@hotmail.com",title:"Email Pessoal"},r.a.createElement("img",{src:"/assets/icons/outlook.svg",alt:"Email Pessoal"})),r.a.createElement("a",{href:"tel:+5544998483634"},r.a.createElement("img",{src:"/assets/icons/whatsapp.svg",alt:"WhatsApp"})))),r.a.createElement(w,null))))}),P=(t(48),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",{className:"flex center-all flex-column blue-lagoon font-white"},r.a.createElement("h3",null,"Felipe Seolin Bento"),r.a.createElement("p",null,r.a.createElement("a",{className:"font-white",href:"phone:+5544998483634"},"+55 (44) 99848-3634")),r.a.createElement("p",null,r.a.createElement("a",{className:"font-white bold",href:"mailto:felipe.seolin@hotmail.com"},"felipe.seolin@hotmail.com")),r.a.createElement("p",null,r.a.createElement("a",{className:"font-white bold",href:"mailto:bentof@alunos.utfpr.edu.br"},"bentof@alunos.utfpr.edu.br"))))}),D=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(f,null),r.a.createElement(y,null),r.a.createElement(F,null),r.a.createElement(I,null),r.a.createElement(h,{idSec:"blog",classes:"section",title:"Blog",description:"Quer saber um pouco mais sobre o que eu ando pensando? Leia meu blog!"},r.a.createElement("div",{className:"flex flex-space-evenly"},r.a.createElement(q,{title:"Ger\xeancia da Configura\xe7\xe3o",text:"Um pouco sobre um trabalho de uma disciplina.",link:"/blog/1",imgPath:"/assets/imgs/gc.jpeg"}),r.a.createElement(q,{title:"Frameworks Javascript",text:"Uma vis\xe3o sobre frameworks javascript.",link:"/blog/2",imgPath:"/assets/imgs/js.png"}),r.a.createElement(q,{title:"Not\xedcia sobre IA",text:"A IA do Google j\xe1 est\xe1 vencendo jogadores em jogos FPS e isso \xe9 incr\xedvel.",link:"/blog/3",imgPath:"/assets/imgs/ia.jpg"}))),r.a.createElement(b,null),r.a.createElement(O,null),r.a.createElement(C,null),r.a.createElement(P,null),r.a.createElement(E,null))},z=(t(49),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={id:0,title:"t\xedtulo",text:"texto",img:{backgroundImage:"url()"}},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;switch(this.setState({id:e}),e){case"1":this.setState({title:"Ger\xeancia da Configura\xe7\xe3o",text:"Gostaria de compartilhar um pouco do trabalho que estou desenvolvendo na disciplina de Ger\xeancia da Configura\xe7\xe3o. Durante todo o semestre todos os alunos deviam em grupo realizar um ciclo de vida de um processo de software completo, desde sua montagem at\xe9 mesmo a entrega e manuten\xe7\xe3o do software. O grupo que fiz parte escolheu se inspirar no FDD, Feature Driven Development, e no Scrum  para fazer o seu processo. Logo ap\xf3s, realizamos algumas mudan\xe7as, desenvolvemos o diagrama BPMN e aplicamos no EPF Composer. Atualmente estamos no meio da primeira itera\xe7\xe3o. Eu particularmente achei o trabalho muito interessante, pois foi a primeira vez que consegui observar um processo e como se d\xe1 a ger\xeancia de configura\xe7\xe3o neste. Talvez nas f\xe9rias iniciarei uma conta no Medium e farei um post sobre o assunto.",img:{backgroundImage:'url("/assets/imgs/gc.jpeg")'}});break;case"2":this.setState({title:"Frameworks Javascript",text:"Atualmente estou aprendendo React e NodeJS na disciplina de Programa\xe7\xe3o Web 1 e achei estes Frameworks muito interessantes, ainda tenho muito a aprender e gostaria de aprofundar ainda mais os meus conhecimentos. J\xe1 tive a oportunidade de trabalhar com Angular 7 no est\xe1gio e havia gostado bastante do framework. As compara\xe7\xf5es entre o Angular e o React s\xe3o inevit\xe1veis, eu particularmente achei que o Angular \xe9 mais regulado e organizado, pois obriga o desenvolvedor a fazer de tal forma, j\xe1 o React de certo modo o deixa mais livre para programar. Ainda gostaria de aprender React Native, Ionic (que pelo que vi rapidamente \xe9 muito parecido com Angular 2) e Electron, sendo que nas f\xe9rias espero desenvolver um app desktop com o mesmo.",img:{backgroundImage:'url("/assets/imgs/js.png")'}});break;case"3":this.setState({title:"Not\xedcia sobre IA",text:"Vi em uma not\xedcia do Tecmundo que a Intelig\xeancia Artificial do Google j\xe1 est\xe1 vencendo humanos em jogos FPS. Ainda n\xe3o tenho muito conhecimento sobre a \xe1rea de IA, por\xe9m, me interesso muito. J\xe1 vi v\xeddeos onde IAs conseguem ganhar de humanos em outros jogos e jogos mais complexos que possuem mais vari\xe1veis deve ser um desafio para esta. Acredito que a \xe1rea de intelig\xeancia artifical ainda tem muito a crescer e espero muito aprender sobre isto no  futuro. Dispon\xedvel em: https://www.tecmundo.com.br/software/142082-ia-google-vence-humanos-partidas-multiplayer-jogos-fps.htm",img:{backgroundImage:'url("/assets/imgs/ia.jpg")'}});break;default:this.setState({title:"Erro 404",text:"N\xe3o existe nenhum post neste endere\xe7o",img:{backgroundImage:'url("/assets/imgs/404.png")'}})}}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex flex-column section"},r.a.createElement("a",{href:"/"},"Voltar para a p\xe1gina principal"),r.a.createElement("h1",{className:"font-blue-lagoon"},"Blog"),r.a.createElement("div",{className:"blogImage",style:this.state.img}),r.a.createElement(h,{title:this.state.title},r.a.createElement("p",null,this.state.text))))}}]),a}(n.Component)),L=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,{basename:"/portfolio"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"#",component:D}),r.a.createElement(p.a,{exact:!0,path:"/",component:D}),r.a.createElement(p.a,{path:"/blog/:id",component:z})))}}]),a}(n.Component);t(52);o.a.render(r.a.createElement(L,null),document.getElementById("root"))}]),[[24,1,2]]]);
//# sourceMappingURL=main.38916597.chunk.js.map