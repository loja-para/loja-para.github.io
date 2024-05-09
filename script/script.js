function openPanel() {
    document.getElementById('sidePanel').style.right = '0';
}

function closePanel() {
    document.getElementById('sidePanel').style.right = '-300px';
}
// Crie um array para armazenar os itens do carrinho
var carrinho = [];

// Função para adicionar item ao carrinho
function adicionarGarrafa(nome, preco, imagemUrl) {
    // Adicione o item ao array carrinho
    carrinho.push({
        nome: 'Garrafinhas de Cheiro',
        preco: 3.50,
        imagemUrl: 'imagens/conteudo/garrafasCheiro.jpg'
    });

    // Atualize o painel do carrinho
    atualizarCarrinho();
}

// Função para remover item do carrinho
function removerItem(index) {
    // Remova o item do array carrinho
    carrinho.splice(index, 1);

    // Atualize o painel do carrinho
    atualizarCarrinho();
}
//@math: início do cachaça de jambu
function atualizarCarrinho() {
    var containerItens = document.getElementById('itensCarrinho');
    containerItens.innerHTML = '';
    for (var i = 0; i < carrinho.length; i++) {
        var item = carrinho[i];
        containerItens.innerHTML += '<img src="' + item.imagemUrl + '" alt="' + item.nome + '" style="width: 115px; height: 75px;"><p>' + item.nome + ' - R$ ' + item.preco.toFixed(2) + '</p><button onclick="removerItem(' + i + ')">Remover</button>';
    }
}
function adicionarJambu(nome, preco, imagemUrl) {
    carrinho.push({
        nome: 'Cachaça de Jambu',
        preco: 7.90,
        imagemUrl: 'imagens/conteudo/cachacaJambu.jpg'
    });
    atualizarCarrinho();
}
function removerItem(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}
function atualizarCarrinho() {
    var containerItens = document.getElementById('itensCarrinho');
    containerItens.innerHTML = '';
    for (var i = 0; i < carrinho.length; i++) {
        var item = carrinho[i];
        containerItens.innerHTML += '<img src="' + item.imagemUrl + '" alt="' + item.nome + '" style="width: 115px; height: 75px;"><p>' + item.nome + ' - R$ ' + item.preco.toFixed(2) + '</p><button onclick="removerItem(' + i + ')">Remover</button>';
    }
}
function fecharCarrinho() {
    document.getElementById('sidePanel').style.right = '-300px';
}