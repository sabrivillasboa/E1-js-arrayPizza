const ingredientesPizza = ['Harina','Levadura','Sal','Agua','Salsa','Queso','Cebolla','Huevo','Jamon','Morron'];

const parImpar =(array)=> {   //ARRAY para q sea reutilizable
    const pares = [];
    const impares =[];

    for(let i=0; i<array.length; i++){
        if(array[i].length % 2===0){
            pares.push(array[i]);
        } else{
            impares.push(array[i]);
        }
    }

    return[pares,impares];
};

const[pares,impares] = parImpar(ingredientesPizza); //aca SI pongo el nombre del array.
console.log(`Los ingredientes pares son: ${pares}`,`Los ingredientes impares son: ${impares}`);
