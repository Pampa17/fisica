function sumar(){
    var a, b, c, text;
a = 10;
b = document.getElementById('num2').value;
c = document.getElementById('num1').value;

if (isNaN(a)||isNaN(b)) {

}
else{
    suma=parseFloat(c) * parseFloat(c) * Math.sin(b) * Math.sin(b)  / (2 * a);
    text = `La altura maxima es ${suma}`;

    
}

document.getElementById('altura').innerHTML = text;
}

function restar(){
    var d, e, f, text;
d = 10;
e = document.getElementById('num2').value;
f = document.getElementById('num1').value;

if (isNaN(e)||isNaN(f)) {

}
else{
    resta=parseFloat(f) * parseFloat(f) * Math.sin(2 * e)  / d; 
    text = `El alcance maximo es ${resta}`;

}

    document.getElementById('alcance').innerHTML = text;



}

function multiplicar(){
    var h, i, j, text;
h = 10;
i = document.getElementById('num2').value;
j = document.getElementById('num1').value;

if (isNaN(i)||isNaN(j)) {

}
else{
    multiplicar= (2 * parseFloat(j)) * Math.sin(i)  / h; 
    text = `El tiempo de vuelo es ${multiplicar}`;

}

    document.getElementById('tiempo total').innerHTML = text;



}