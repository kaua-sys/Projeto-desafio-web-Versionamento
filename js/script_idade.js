//Pegando Elementos do DOM
const formDados = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector('#div-dados')

//Capturando o evento submit do formulário
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData (formDados)

    let nome = objFormDados.get('nome')
    let idade = objFormDados.get('idade')

    let situacaoIdade = ''


    if (idade >= 18){
        situacaoIdade = `${nome},você é maior de idade`
    }else{
        situacaoIdade = `${nome}, você é menor de idade`
    }

    divResultado.innerHTML = situacaoIdade

})