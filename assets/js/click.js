function disp() {
  let
   effect = document. getElementByClass("effect") ;
   tumblr = effect. getElementsByTagName('a') ;

   let student = (tumblr.innerText) ;
   let url = (tumblr.href) ;

   console.log(tumblr) ;

   if (window.confirm("HELLO THERE")) {
      location.href = url ;
   }
}
