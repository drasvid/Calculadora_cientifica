const numeros= document.querySelectorAll('.boton');
const operadores= document.querySelectorAll('.operador');
const igual= document.querySelector('.ejecutar');
const ac=document.querySelector('.limpiar');
const funciones=document.querySelectorAll('.especial');

const saved=document.querySelector('.display .saved');
const add=document.querySelector('.display .add');

const done=document.querySelector('.saved_p');

var operacion='';
var resultado='';




numeros.forEach(key => {
    
    key.addEventListener('click', number=>{

        const numero=key.innerHTML;

        añadir(numero);

    })

});

operadores.forEach(operador => {
    
    operador.addEventListener('click', event=>{

        const dation=operador.getAttribute('data-action');

        añadir('',dation)


    })

});


ac.addEventListener('click',e=>{

    done.textContent='';
    saved.textContent='';


})





function añadir(numero, dation) {



    add.textContent=numero;

    saved.textContent=saved.textContent+add.textContent;

    add.textContent='';


    if(dation!==undefined){

        done.textContent=saved.textContent;

        saved.textContent='';

    }

    calcular(done.textContent, saved.textContent,dation)

};


function calcular(done,saved,dation){

    const done_int=parseInt(done);
    const saved_int=parseInt(saved);


    if(dation!==undefined){

        operacion=dation;

    }
    if (isNaN(done_int)||isNaN(saved_int)) return

    if(operacion==='suma'){

        var resultado=done_int+saved_int;

    }

    if(operacion==='resta'){

        var resultado=done_int-saved_int;

    }


    if(operacion==='multiplicacion'){

        var resultado=done_int*saved_int;

    }


    if(operacion==='division'){

        var resultado=done_int/saved_int;

    }

    imp_resultado(resultado);
    


};


function imp_resultado(resultado){

    igual.addEventListener('click',e=>{

        console.log( resultado );

        saved.textContent=resultado;

        done.textContent='';


    });


}