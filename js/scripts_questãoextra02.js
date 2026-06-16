//Pegando Elementos do DOM
const formDados = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector('#div-dados')

//Capturando o evento submit do formulário
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData (formDados)

    let n = parseFloat(objFormDados.get('num'))

    let verificar = ""

    if (n % 3 == 0 && n % 7 == 0 ) {
        verificar = "Divisivel por 3 e 7"
    } else {
        verificar = "Não é divisivel por 3 e 7"
    }

    divResultado.innerHTML = verificar

        formDados.reset()
})