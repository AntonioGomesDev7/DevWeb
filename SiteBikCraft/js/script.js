if (window.SimpleSlide){
new SimpleSlide ({
    slide: "quote", // nome do atributo data-slide="principal"
    time: 5000, // tempo de transição dos slides
  });
  new  SimpleSlide ( { 
    slide : "portfolio-slide" ,  // nome do atributo data-slide="principal" 
    nav : true ,  // se deve ou não mostra a navegação 
    auto : true ,  // se o slide deve passar automaticamente 
    time : 5000 ,  // tempo de transição dos slides 
    pauseOnHover : true ,  // pausa na transição automática 
  } ) ;
}
if (window.SimpleAnime){
  new SimpleAnime ();
}