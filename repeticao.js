console.log(" === REPETICAO.JS ===");

var contador = 1;

while (contador <= 10) {
    document.write(contador, " - Nome<br>");
    contador = contador + 1;
}

document.write("<hr>")

var cont = 10;

while (cont > 0) {
    document.write(cont, "<br>");
    cont = cont -1;
}

document.write("<hr>");

var i = 1
var limit= 50

while (i <=limit) {
    if(i == limit){
        document.write(i)
    }else{
    document.write(i, "-" );
    }

    i = i + 1;    
}

document.write("<hr>");

// 1 - 3 - 5 - 7...51

var p = 0;
var limit = 51;

while (p <= limit) {
    if(p == limit) {
        document.write(p);
    }else if ( p % 2 == 1) {
      document.write(p, "-");
    }
    p = p  +  1;
}
document.write("<hr>");