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

// Crie um array para armazenar os itens do carrinho

var total = 0;
var produtos = [
    {
        garrafinhas: 0,
        jambu: 0,
        barco: 0,
        biojoia: 0,
        cuia: 0,
        vaso: 0
    }
];

// Função para adicionar item ao carrinho
function adicionarCarrinho(item, preco)
{
    preco = parseFloat(preco);
    total += preco;

    produtos[0][item] += 1;

    //mostra o item no carrinho

    var mostrar = document.getElementById(item).style.display;

    if ( mostrar == 'none' || mostrar == '' )
    {
        document.getElementById(item).style.display = 'block';
        document.getElementById('botaoPagar').style.display = 'block';
    }

    document.getElementById('total').textContent = 'R$ ' + total.toFixed(2);

    alterarQuantidade();
}

// Função para remover item do carrinho
function remover(item, preco)
{

    preco = parseFloat(preco);
    total -= preco;

    produtos[0][item] -= 1;

    //mostra o item no carrinho
    if ( produtos[0][item] < 1 )
    {    
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

    document.getElementById('total').textContent = 'R$ ' + total.toFixed(2);
}

alterarQuantidade()
{
    document.getElementById('quantidadeGarrafas').textContent = produtos[0][0];
    document.getElementById('quantidadeJambu').textContent = produtos[0][1];
    document.getElementById('quantidadeBarcos').textContent = produtos[0][2];
    document.getElementById('quantidadeBiojoias').textContent = produtos[0][3];
    document.getElementById('quantidadeCuias').textContent = produtos[0][4];
    document.getElementById('quantidadeVasos').textContent = produtos[0][5];
}