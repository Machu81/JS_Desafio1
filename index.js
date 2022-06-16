let saludo = "Bienvenidos al sitio de Programas Profesionales";
alert(saludo);

let seleccionUsuario = ""

while(seleccionUsuario != 2){
    seleccionUsuario = parseInt(prompt("¿Desea inscribirse en algún programa? \n 1. Si \n 2. No"));

if(isNaN(seleccionUsuario)){
    alert("Usted no introdujo una respuesta")
}else if(seleccionUsuario === 2){
    alert("Muchas gracias por visitarnos, que tenga un excelente día");
}else if(seleccionUsuario === 1) {
    let consulta = parseInt(prompt("Seleccione el programa: \n 1. Mi Primer Estudio \n 2. Tu Nuevo Rol \n 3. Generación X \n 4. Asociatividd \n 5. Tiempo de Balance \n 6. Mi Vocación"));
    switch (consulta) {
            case 1: 
                alert("Usted se inscribió en Mi Primer Estudio");
                break;
                case 2:
                alert("Usted se inscribió en Tu Nuevo Rol");
                break;
                case 3:
                alert("Usted se inscribió en Generación X");
                break;
                case 4:
                alert("Usted se inscribió en Asociatividad");
                break;
                case 5:
                alert("Usted se inscribió en Tiempo de Balance");
                break;
                case 6:
                alert("Usted se inscribió en Mi Vocación");
                break;
                default:
                alert("No seleccionó ningún programa");
                break;
        }
   
}}


/*
do{
    let seleccionUsuario = parseInt(prompt("¿Desea inscribirse en otro programa? \n 1. Si \n 2. No"));
}while(consulta == true);
/*
let entrada
do{
    entrada = prompt("ingrese un dato (ESC para salir)")
    alert("el usuario ingreso "+ entrada)
}while(entrada != "ESC")
*/