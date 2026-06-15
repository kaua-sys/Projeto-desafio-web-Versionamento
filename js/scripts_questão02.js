//Pegando Elementos do DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//Capturando o evento submit do formulário
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData (formDados)

    let altura = parseFloat(objFormDados.get('altura'))
    let largura = parseFloat(objFormDados.get('largura'))

    let area = (altura * largura)
    

    divResultado.innerHTML = `A área é de: ${area.toFixed(2).replace('.',',')}m²,
     Total de litros para pintar essa área é de: ${parseFloat(area/2).toFixed(2).replace('.',',')}l`

        formDados.reset()
})