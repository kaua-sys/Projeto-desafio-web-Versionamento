//Pegando Elementos do DOM
const formDados = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector('#div-dados')

//Capturando o evento submit do formulário
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData (formDados)

    let senha = objFormDados.get('senha')
    let senhaCorreta = "1234"
    let verificar = ""

    if (senha === senhaCorreta ) {
        verificar = 'Acesso Permitido'
    } else {
        verificar = "Acesso Negado"
    }

    divResultado.innerHTML = verificar

        formDados.reset()
})