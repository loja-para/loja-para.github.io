var carrinho = [];
function adicionarGarrafa(){
    var produto = document.getElementById("cheiro").value;
    carrinho.push(produto);
    alert("Produto adicionado ao carrinho!");
}