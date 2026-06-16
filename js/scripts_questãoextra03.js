//Pegando Elementos do DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//Capturando o evento submit do formulário
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData (formDados)

    let produto = (objFormDados.get('produto'))
    let compra = parseFloat(objFormDados.get('valor').replace(',','.'))
    let venda;
    let lucro;
    
    if (compra < 10) { 
        venda = compra * 1.70;
    } else if (compra < 30) {
        venda = compra * 1.50; 
    } else if (compra < 50) { 
        venda = compra * 1.40; 
    } else {
        venda = compra * 1.30;
    }
    lucro = venda - compra

    divResultado.innerHTML = `
    Produto: ${produto}<br>
    Preço de compra: R$ ${compra.toFixed(2)}<br>
    Preço de venda: R$ ${venda.toFixed(2)}<br>
    Lucro: R$ ${lucro.toFixed(2)}`

        formDados.reset()
})