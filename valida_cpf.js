function validarCpf(){

    var numeroCpf = document.getElementById("cpfCode").value;
    
        somenteNumeros = numeroCpf.replace(".", "").replace(".", "").replace("-", ""), 
        novePrimeirosNumeros = somenteNumeros.substr(0, 9), 
        dezPrimeirosNumeros = somenteNumeros.substr(0, 10),
        somaDosNovePrimeirosNumeros = 0,
        somaDosDezPrimeirosNumeros = 0,
        multiplicacao = 10
        for (var i = 0; i < novePrimeirosNumeros.length; i++){
            var numero = novePrimeirosNumeros.substr(i, 1);
            somaDosNovePrimeirosNumeros += numero * multiplicacao;
            multiplicacao--;
        }
        multiplicacao = 11
        for (var i = 0; i < dezPrimeirosNumeros.length; i++){
            var numero = dezPrimeirosNumeros.substr(i, 1);
            somaDosDezPrimeirosNumeros += numero * multiplicacao;
            multiplicacao--;
        }
        var primeiroResultado = (somaDosNovePrimeirosNumeros * 10) % 11;
        var segundoResultado = (somaDosDezPrimeirosNumeros * 10) % 11;
    
        if ((primeiroResultado.toString() + segundoResultado.toString()) === somenteNumeros.substr(9, 2)){
            console.log("O número de CPF informado é válido");
            
        } else {
            alert("O número de CPF informado é inválido");
        }
    }