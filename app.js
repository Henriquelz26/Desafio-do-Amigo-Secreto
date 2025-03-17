let friends = [];


function adicionarAmigo() {
    let input = document.getElementById("amigo")
    let pessoa = input.value.trim(); //pega o valor do input e retira os espaços em branco
    let listaResultado = document.getElementById("resultado");
    //verificar se o input está vazio e se já há um elemento igual adicionado na array
    if (pessoa === '') {
        listaResultado.innerHTML = '';
        return alert("Você precisa inserir o nome do amigo!");
    } if (friends.includes(pessoa)) {
        return alert("Este amigo já foi adicionado à lista!")
    }

    friends.push(pessoa);//adiciona o valor do input na array

    friendsList()
    input.value = '';//esvazia a array
    listaResultado.innerHTML = '';//define o valor da lista "resultado" como vazio
}
function friendsList() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';//limpa os elementos que foram adicionados antes para evitar duplicação

    //cria a lista no html e exibe os nomes nela
    friends.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li)
    })
}

function sortearAmigo() {
    if (friends.length === 0) {
        return alert("A lista está vazia! Adicione amigos antes de sortear.");
    }
    let amigoSorteado = Math.floor(Math.random() * friends.length);//faz o sorteio 
    let sorteado = friends[amigoSorteado];//recebe o indice sorteado

    friends.splice(amigoSorteado, 1);//retira o nome sorteado da array

    friendsList();//atualiza a lista 

    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = `<li>${sorteado}</li>`//exibe o nome sorteado na lista

    if (friends.length === 0) {
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = '<li>Nenhum amigo na lista</li>';//avisa que a lista se esvaziou 
    }
}