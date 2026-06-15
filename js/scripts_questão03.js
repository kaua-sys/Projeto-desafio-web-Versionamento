//Pegando Elementos do DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//Capturando o evento submit do formulário
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData (formDados)

    let distancia = parseFloat(objFormDados.get('distancia'))
    let consumo = parseFloat(objFormDados.get('consumo'))
    let preco = parseFloat(objFormDados.get('preco'))

    let quantidade = (distancia / consumo)
    let valor = (preco * quantidade)

    divResultado.innerHTML = `A quantidade de combustivel é de: ${quantidade.toFixed(2).replace('.',',')}Km,
     O valor total a pagar é de: R$${parseFloat(valor).toFixed(2).replace('.',',')}`

        formDados.reset()
})