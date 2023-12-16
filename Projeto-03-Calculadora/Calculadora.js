//função para adicionar valores na tela
function MostrarNaTela(value){
    document.getElementById('tela').value += value;
}

//função para limpar a tela
function LimparTela(){
    document.getElementById('tela').value = '';
}

//função para realizar os calculos 
function Calcular() {
    var displayValue = document.getElementById('tela').value;
    try {
    document.getElementById('tela').value = eval(displayValue);
    } catch (error) {
    document.getElementById('tela').value = 'Error';
    }
}