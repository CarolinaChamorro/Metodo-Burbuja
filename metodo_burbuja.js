// Autora: Carolina Chamorro
//Descripción: Generar numeros aleatorios del 1 al 100 y ordenarlos por el 
//método de la burbuja.

numeros=new Array();

for(generar=1;generar<101;generar++){
    numeros.push(generar);
    // generar numeros aleatorios en el array del 1 al 100
     for (array = numeros.length; array; array--) {
        aleatorio = Math.floor(Math.random() * array);
        k = numeros[array - 1];
        numeros[array - 1] = numeros[aleatorio];
        numeros[aleatorio] = k;
       
    }
}
// ordenar los numeros aleatorios
function burbuja(numeros)
	{
		for(var i=1;i<numeros.length;i++)
		{
			for(var j=0;j<(numeros.length-i);j++)
			{
				if(numeros[j]>numeros[j+1])
				{
					k=numeros[j+1];
					numeros[j+1]=numeros[j];
					numeros[j]=k;
				}
			}
		}
		return numeros;
	}

console.log(numeros);
burbuja(numeros)
