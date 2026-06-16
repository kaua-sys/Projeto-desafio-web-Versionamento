//Pegando Elementos do DOM
const formDados = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector('#div-dados')

//Capturando o evento submit do formulário
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData (formDados)

    let n = parseFloat(objFormDados.get('num'))

    let verificar = 

    divResultado.innerHTML = `A média dos números digitados é: ${media.toFixed(2).replace('.',',')}`

        formDados.reset()
})