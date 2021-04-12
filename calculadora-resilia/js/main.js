/* Retorna um array com os botões da calculadora */
let histricogeral = document.getElementById('histricogeral');

/* Histórico de operacoes */
let click = document.querySelectorAll(".click");

/* Display dos historicos */
let display = document.querySelector(".displayTela");

/* Display dos Resultados */
let displayResultado = document.querySelector(".displayTelaResultado");

/* botão igual ()=) */
let operar = document.getElementById("Igual");

/* todos o numeros e operadores são adicionados neste array */
let numeros = [];

/* o resultado gerado no array acima vem para este array */
let resultadoAnterior = [];


/* Objeto com os metodos de operadores */
let operadores = {

    /* Limpar display e historico */
    clear:function(){
        numeros = [];
        display.innerHTML = "";
        displayResultado.textContent = 0;
        resultadoAnterior = [];
    },

    /* Adiciona o simbolo da operação no array */
    addOperacao:function(simbolo){

        /* Verifica se o ultimo caractere do array é um simbolo,
        se for um simbolo ele substitui se não ele adiciona o simbolo */
        if(numeros[numeros.length -1] == '+' || 
        numeros[numeros.length -1] == '-' || 
        numeros[numeros.length -1] == '*' || 
        numeros[numeros.length -1] == '/'){
            numeros[numeros.length -1] = simbolo;
        }else{
            numeros.push(simbolo);
        };
    },
    /* Gera o resultado e atualiza o display */
    total:function(){
        let calculo = eval(numeros.join(""));
        
        resultadoAnterior = calculo;
        console.log('Resultado Anterior', resultadoAnterior);
        
        displayResultado.textContent = calculo;
        numeros = [calculo];
    },
};




/* Adiciona o valor correspondente ao botão clicado no array numeros */
click.forEach(function (click) {

    click.addEventListener("click", function () {

        /* pega o id de cada botão */
        let valor = click.id;

        /*  */
        switch (valor) {
            case 'C':
                operadores.clear();
            break

            case 'Igual':
                operadores.total();
            break

            case 'Mais':
                operadores.addOperacao('+');
            break

            case 'Menos':
                operadores.addOperacao('-');
            break

            case 'Porcento':
                operadores.addOperacao('%');
            break

            case 'Dividir':
                operadores.addOperacao('/');
            break

            case 'Multiplica':
                operadores.addOperacao('*');
            break
            
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                /* Verifica se é um numero ou simbolo */
                if (isNaN(valor)) {
                    display.textContent = 'error'
                    
                } else {
                    /* Verifica se o array é vazio e setiver faz um push com o valor
                    se não ele apenas atualiza os valores que já estão lá */
                    if (numeros == '') {
                        numeros.push(parseInt(valor));
                    } else {
                        /* se for um simbolo faz um push e gera uma nova posição no array */
                        if (numeros[numeros.length - 1] == '+' 
                        || numeros[numeros.length - 1] == '*' 
                        || numeros[numeros.length - 1] == '/' 
                        || numeros[numeros.length - 1] == '%') {
                            numeros.push(parseInt(valor));
                        } else {
                            let concatena = numeros[numeros.length - 1] + valor;
                            numeros[numeros.length - 1] = parseInt(concatena);
                        };

                    };

                };
                
            break
        };

        /* Mostra a opração realizada no display de historicos */
        display.textContent = numeros.join("");
        histricogeral.textContent = numeros.join("");
        console.log(numeros);
        //
    });
});


