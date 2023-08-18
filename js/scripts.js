const numeros= document.querySelectorAll('.boton');
const operadores= document.querySelectorAll('.operador');
const igual= document.querySelector('.ejecutar');
const ac=document.querySelector('.limpiar');
const funciones=document.querySelectorAll('.especial');

const dic_funciones=['Sin','Cos','Tan'];


const saved=document.querySelector('.display .saved');
const add=document.querySelector('.display .add');

const done=document.querySelector('.saved_p');

var operacion='';
var resultado='';

var valor_funcion='';




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

funciones.forEach(funcion=>{

    funcion.addEventListener('click', func=>{

        const dation=funcion.getAttribute('data-action');

        añadir('',dation)

    })


})


function añadir(numero, dation) {


    dic_funciones.forEach(funcion=>{


        if (dation===funcion){

            valor_funcion=dation;
        }    

      })

      if(numero==='.' && saved.textContent.includes('.')) return



      if (valor_funcion!==''){

        done.textContent=valor_funcion;

        add.textContent=numero;

        saved.textContent=saved.textContent+add.textContent;
    
        add.textContent='';

        calcular_funciones(saved.textContent,valor_funcion);



      }else{

        add.textContent=numero;

        saved.textContent=saved.textContent+add.textContent;
    
        add.textContent='';
    
    
        if(dation!==undefined){
    
            done.textContent=saved.textContent;
    
            saved.textContent='';
    
        }

    
        calcular(done.textContent, saved.textContent,dation);

      }
      

};


function calcular(done,saved,dation){

    const done_int=parseFloat(done);
    const saved_int=parseFloat(saved);


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


function calcular_funciones(saved,dation){

    const saved_int=parseInt(saved);
    const base_operativa=Math.PI/180;
    var saved_rad=saved_int*base_operativa;


    if (dation==='Sin'){

        var resultado_pre=Math.sin(saved_rad);

        var resultado=Number(resultado_pre.toFixed(2));

    }

    if(dation==='Cos'){
        
        var resultado_pre=Math.cos(saved_rad);

        var resultado=Number(resultado_pre.toFixed(2));
        

    }

    if(dation==='Tan'){
        
        var resultado=Math.tan(saved_rad);

        var resultado=Number(resultado_pre.toFixed(2));


    }

    imp_resultado(resultado);

}


function imp_resultado(resultado){

    igual.addEventListener('click',e=>{

        saved.textContent=resultado;

        done.textContent='';

        valor_funcion='';


    });


};

