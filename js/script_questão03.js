//Pegando Elementos do DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//Capturando o evento submit do formulário
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData (formDados)

    let distancia = parseFloat(objFormDados.get('distancia'))
    let consumo = parseFloat(objFormDados.get('consumo'))
    let preço = parseFloat(objFormDados.get('preço'))

    let quantidade = (distancia/consumo)
    let valor = (preço*quantidade)

    divResultado.innerHTML = `A quantidade de combustivel é de: ${quantidade.toFixed(2).replace('.',',')}m²,
     O valor total a pagar é de: ${parseFloat(valor).toFixed(2).replace('.',',')}l`

        formDados.reset()
})