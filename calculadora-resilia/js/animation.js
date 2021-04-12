
/* botao historico */
let bthHistorico = document.getElementById('historico');

/* historico */
let historico = document.getElementById('memoria');

/* btn fechar historico */
let btnFecharHistorico = document.getElementById('fecharHistorico')


bthHistorico.addEventListener('click',function(){
    historico.classList.add('visible');
});

btnFecharHistorico.addEventListener('click',function(){
    historico.classList.remove('visible');
});