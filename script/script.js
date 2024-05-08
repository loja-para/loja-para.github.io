function openPanel() {
    document.getElementById('sidePanel').style.right = '0';
}

function closePanel() {
    document.getElementById('sidePanel').style.right = '-300px';
}
var carrinho = [];
function adicionarGarrafa(){
    var produto = document.getElementById("cheiro").value;
    carrinho.push(produto);
    alert("Produto adicionado ao carrinho!");
}