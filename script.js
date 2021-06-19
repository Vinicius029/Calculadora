function inserir(num){
    let res = document.getElementById('res')
    res.innerHTML += num
}

function calcular(){
    let valores = document.getElementById('res').innerHTML

    if(valores){
        res.innerHTML = eval(valores)
    }
}

function apagar_ultimo(){
    let ultimo = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = ultimo.substring(0, ultimo.length -1)
}

function limpar(){
    document.getElementById('res').innerHTML = ''
}