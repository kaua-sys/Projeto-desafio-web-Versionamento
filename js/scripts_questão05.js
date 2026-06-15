//Pegando Elementos do DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//Capturando o evento submit do formulário
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData (formDados)

    let lado1 = parseFloat(objFormDados.get('lado1'))
    let lado2 = parseFloat(objFormDados.get('lado2'))
    let lado3 = parseFloat(objFormDados.get('lado3'))

    let tipo = ""
    
    if(lado1 == lado2 && lado1 == lado3 && lado2 == lado3){ 
        tipo = "Triângulo Equilátiro"
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        tipo = "Triângulo Isóceles"
    } else { 
        tipo = "Triangulo Escaleno" 
    }

    divResultado.innerHTML = tipo

        formDados.reset()
})