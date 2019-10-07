
var operacion = new Array();
var botones = document.getElementsByClassName('boton');

for (let index = 0; index < botones.length; index++) {
    console.log(botones[index]);
    botones[index].addEventListener('click', function (event){
        var targetElement = event.target || event.srcElement;
        console.log(targetElement.value);
        pintar(targetElement.value);
        
        

    } 
        
     );
    
}

function pintar(valor) {
    
    if(isNaN(valor) && valor != '.'){
        //Aquí meto el contenido de la pantalla en la primera posición del array llamado operacion
        operacion.push (document.getElementById("pantalla").value);
        //pongo la pantalla en blanco
        document.getElementById("pantalla").value= " ";
        //meto en la siguiente posición del array el operando
        operacion.push(valor);
        //Si se pulso ejecutar entonces se ejecuta 
        if(valor == 'EXE'){ejecutar(); operacion.length= 0;}
        
    }
    else{
        document.getElementById("pantalla").value = document.getElementById("pantalla").value + valor;
    }
    
}

function ejecutar() {
    //Quito el EXE del array para poder hacer el join 
    operacion.splice(operacion.length-1,1);
    var resultado = operacion.join('');
    var potencia = operacion[1];

    if (operacion[1] == '^') {
        document.getElementById("pantalla").value= Math.pow(operacion[0], operacion[2]);
        
    }
    else if(operacion[1] == 'MOD'){
        document.getElementById("pantalla").value = (operacion[0] % operacion[2]);
    }
    else{
    document.getElementById("pantalla").value = eval(resultado);
    }
    
}


