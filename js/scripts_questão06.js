//Pegando Elementos do DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//Capturando o evento submit do formulário
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData (formDados)

    let peso = parseFloat(objFormDados.get('peso'))
    let altura = parseFloat(objFormDados.get('altura').replace(',','.'))

    let imc = peso / (altura**2)
    let situacao = ""
    
    if(imc < 20){ 
        situacao = "Abaixo do peso"
    } else if (imc >= 20 && imc < 25) {
        situacao = "Normal"
    } else if (imc >= 25 && imc < 30) { 
        situacao = "Com excesso de peso" 
    } else if (imc >= 30 && imc < 35) {
        situacao = "Com obesidade"
    } else {
        situacao = "Com obesidade mórbida"
    } 

    divResultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Você está ${situacao}`

        formDados.reset()
})