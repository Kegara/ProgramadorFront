
function actualizarmenuhash(opc){

    if(opc=="#Frontend")
    actualizarmenu('m-front');
if(opc=="#Maquetador")
actualizarmenu('m-front-2');
if(opc=="#Programador-frontend")
actualizarmenu('m-front-3');

if(opc=="#Backend")
actualizarmenu('m-back');
if(opc=="#Administrador-base-de-datos")
actualizarmenu('m-back-2');
if(opc=="#Administrador-servidor")
actualizarmenu('m-back-3');

    
}
  //actualizar menu
function actualizarmenu(opc){
    limpiarmenu();
    var element10 = document.getElementById(opc);
    element10.classList.add('active');

}


function limpiarmenu(){
    var element1 = document.getElementById("m-front");

    var element2 = document.getElementById("m-front-1");
    var element3 = document.getElementById("m-front-2");
    var element4 = document.getElementById("m-front-3");

    var element5 = document.getElementById("m-back");

    var element6 = document.getElementById("m-back-1");
    var element7 = document.getElementById("m-back-2");
    var element8 = document.getElementById("m-back-3");

    
    var element9 = document.getElementById("m-Referencias");
    

    if (element1.classList.contains('active')) {
        element1.classList.remove('active');
    } 
    if (element2.classList.contains('active')) {
        element2.classList.remove('active');
    } 

    if (element3.classList.contains('active')) {
        element3.classList.remove('active');
    } 

    if (element4.classList.contains('active')) {
        element4.classList.remove('active');
    } 

    if (element5.classList.contains('active')) {
        element5.classList.remove('active');
    } 

    if (element6.classList.contains('active')) {
        element6.classList.remove('active');
    } 

    if (element7.classList.contains('active')) {
        element7.classList.remove('active');
    } 

    if (element8.classList.contains('active')) {
        element8.classList.remove('active');
    } 
    
    if (element9.classList.contains('active')) {
        element9.classList.remove('active');
    } 

}