function showNotification()
{
    var notification = document.getElementById("notification");
    notification.style.display = "block";
    setTimeout(function()
    {
        notification.style.display = "none";
    },
    3000); // 3000 milliseconds = 3 seconds
}

var carrinho = [];

function adicionarItemAoCarrinho(item)
{
    carrinho.push(item);
    showNotification();
}


function openPanel()
{
    document.getElementById('sidePanel').style.right = '0';
    if ( carrinho.length == 0 )
    {
        document.getElementById('botaoPagar').style.display = 'none';
    }
    else
    {
        document.getElementById('botaoPagar').style.display = 'block';
    }
}

function closePanel()
{
    document.getElementById('sidePanel').style.right = '-400px';
}

function calcularTotal() {
    let total = 0;

    // Percorra todos os itens no carrinho
    for (let item of carrinho) {
        // Adicione o preço do item ao total
        total += item.preco;
    }

    // Formate o total para duas casas decimais e substitua o ponto por uma vírgula
    let totalFormatado = total.toFixed(2).replace('.', ',');

    // Exiba o total
    document.getElementById('total').textContent = totalFormatado;
}

// Crie um array para armazenar os itens do carrinho
var carrinho = [];

// Função para adicionar item ao carrinho
function adicionarCarrinho(item) {
    // Obtenha o preço do atributo de data
    let preco = parseFloat(document.getElementById(item).querySelector('.valorProduto').dataset.preco);

    // Adicione o item e o preço ao carrinho
    carrinho.push({id: item, preco: preco});

    // Salve o carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Mostra o item no carrinho
    document.getElementById(item).style.display = 'block';
    document.getElementById('botaoPagar').style.display = 'block';
    calcularTotal();
}

// Função para remover item do carrinho
function remover(item) {
    // Encontre o item no carrinho
    const index = carrinho.findIndex(i => i.id === item);

    // Remova o item do carrinho
    if (index > -1) {
        carrinho.splice(index, 1);
    }

    // Atualize o carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    alert('Item removido do carrinho');

    // Esconde o item no carrinho
    document.getElementById(item).style.display = 'none';

    if (carrinho.length == 0) {
        document.getElementById('botaoPagar').style.display = 'none';
    }
    calcularTotal();
}
// Função para carregar o carrinho quando a página é carregada
window.onload = function() {
    // Recupere o carrinho do localStorage
    const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho'));

    if (carrinhoSalvo) {
        carrinho = carrinhoSalvo;

        // Mostra os itens no carrinho
        for (let item of carrinho) {
            document.getElementById(item).style.display = 'block';
        }

        if (carrinho.length > 0) {
            document.getElementById('botaoPagar').style.display = 'block';
        }
    }
}