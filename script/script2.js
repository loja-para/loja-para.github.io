var quantidade = 0;
var total = 0;

// Crie um array para armazenar os itens do carrinho
var produtos = JSON.parse(localStorage.getItem('produtos')) || [0,0,0,0,0,0];

// Função para adicionar item ao carrinho
function adicionarCarrinho(item)
{
    
    produtos[item]++;
    //mostra o item no carrinho
    alterarQuantidade(produtos[item]);
    salvarCarrinho();
    recuperarCarrinho();
}

// Função para salvar o carrinho no localStorage
function salvarCarrinho() {
    localStorage.setItem('produtos', JSON.stringify(produtos));
}

// Função para recuperar o carrinho do localStorage
function recuperarCarrinho()
{
    var produtosRecuperados = localStorage.getItem('produtos');
    if (produtosRecuperados)
    {
        produtos = JSON.parse(produtosRecuperados);

        total = 0;

        for (var i = 0; i < produtos.length; i++)
        {
            var quantidadeProduto = produtos[i];
            var precoProduto = parseFloat(document.getElementById('preco' + i).textContent);
            
            total += quantidadeProduto * precoProduto;
            quantidade += quantidadeProduto;

            exibirProduto(i);
            alterarQuantidade(produtos[i]);
        }

        document.getElementById('total').textContent = 'R$ ' + total.toFixed(2);

        if ( quantidade > 0 )
        {
            document.getElementById('botaoPagar').style.display = 'block';
        }
        else
        {
            document.getElementById('botaoPagar').style.display = 'none';
        }
    }
}

// Placeholder para a função alterarQuantidade
function alterarQuantidade(item)
{
    if ( item == 0 )
    {
        document.getElementById("quantidadeGarrafas").textContent = produtos[item]
    }
    else if (item == 1 )
    {
        document.getElementById("quantidadeJambu").textContent = produtos[item]
    }
    else if ( item == 2 )
    {
        document.getElementById("quantidadeBarcos").textContent = produtos[item]
    }
    else if ( item == 3 )
    {
        document.getElementById("quantidadeBiojoias").textContent = produtos[item]
    }
    else if ( item == 4 )
    {
        document.getElementById("quantidadeCuias").textContent = produtos[item]
    }
    else if ( item == 5 )
    {
        document.getElementById("quantidadeVasos").textContent = produtos[item]
    }
}


function exibirProduto(i)
{
    switch (i)
    {
        case 0:
            if(produtos[i] > 0)
            {
                document.getElementById('garrafinhas').style.display = 'block';
                break;
            }
            else if(produtos[i] == 0)
            {
                document.getElementById('garrafinhas').style.display = 'none';
                break;
            }
        case 1:
            if(produtos[i] > 0)
            {
                document.getElementById('jambu').style.display = 'block';
                break;
            }
            else if(produtos[i] == 0)
            {
                document.getElementById('jambu').style.display = 'none';
                break;
            }
        case 2:
            if(produtos[i] > 0)
            {
                document.getElementById('barco').style.display = 'block';
                break;
            }
            else if(produtos[i] == 0)
            {
                document.getElementById('barco').style.display = 'none';
                break;
            }
        case 3:
            if(produtos[i] > 0)
            {
                document.getElementById('biojoia').style.display = 'block';
                break;
            }
            else if(produtos[i] == 0)
            {
                document.getElementById('biojoia').style.display = 'none';
                break;
            }
        case 4:
            if(produtos[i] > 0)
            {
                document.getElementById('cuia').style.display = 'block';
                break;
            }
            else if(produtos[i] == 0)
            {
                document.getElementById('cuia').style.display = 'none';
                break;
            }
        case 5:
            if(produtos[i] > 0)
            {
                document.getElementById('vaso').style.display = 'block';
                break;
            }
            else if(produtos[i] == 0)
            {
                document.getElementById('vaso').style.display = 'none';
                break;
            }
    }
}



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

function openPanel()
{
    document.getElementById('sidePanel').style.right = '0';

    


    if ( quantidade == 0 )
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


// Função para remover item do carrinho
function remover(item)
{
    produtos[item]--;
    salvarCarrinho();
    recuperarCarrinho();
}

// Event listener para carregar a janela e recuperar o carrinho
window.onload = function() {
    recuperarCarrinho();
}