function openPanel() {
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

function closePanel() {
    document.getElementById('sidePanel').style.right = '-400px';
}

// Crie um array para armazenar os itens do carrinho
var carrinho = [];

// Função para adicionar item ao carrinho
function adicionarCarrinho(item)
{
    carrinho.push(item);
    alert('Item adicionado ao carrinho');

    //mostra o item no carrinho

    var mostrar = document.getElementById(item).style.display;
    if ( mostrar == 'none' || mostrar == '' )
    {
        document.getElementById(item).style.display = 'block';
        document.getElementById('botaoPagar').style.display = 'block';
    }
}

// Função para remover item do carrinho
function remover(item)
{
    carrinho.pop(item);
    alert('Item removido do carrinho');

    //mostra o item no carrinho

    var mostrar = document.getElementById(item).style.display;
    if ( mostrar == 'block' )
    {
        document.getElementById(item).style.display = 'none';
    }
    if ( carrinho.length == 0 )
    {
        document.getElementById('botaoPagar').style.display = 'none';
    }
}
