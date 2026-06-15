//Pegando Elementos do DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//Capturando o evento submit do formulário
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData (formDados)

    let aluno = String(objFormDados.get('aluno'))
    let nota1 = parseFloat(objFormDados.get('nota1'))
    let nota2 = parseFloat(objFormDados.get('nota2'))
    let nota3 = parseFloat(objFormDados.get('nota3'))

    let media = (nota1 + nota2 + nota3) / 3

    let situacao = ""
    
    if(media>= 6){ 
        situacao = "Aprovado"
    } else {
        situacao = "Reprovado"
    }

    divResultado.innerHTML = `A média do aluno ${aluno} é de: ${media.toFixed(2).replace('.',',')},
    A situação desse aluno está ${situacao}`

        formDados.reset()
})