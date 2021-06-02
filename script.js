/*function acao(){
    document.write("<br/>Executando...<br/>");
}

//Executa de tempo em tempo

var timer = setInterval(acao, 1000); //executa de tempo em tempo 

//setTimeout(acao,2000); //executa uma vez só

<!---------------------------------------->

//CRIAR UM OBJETO
function Carro(){

    //this faz referencia ao objeto carro
    this.marca = "Jeep";
    this.nome = "Jeep Compass";
    this.ano = "2019";
    this.potencia = "170cv";
    this.velocidadeAtual = 0;

    this.ligar = function(){
        console.log(this.nome + ' agora esta ligado..');
    }
    
    this.andar = function(velocidade){
        console.log('Carro andando...');
        this.velocidadeAtual = this.velocidadeAtual + velocidade;
    }

    this.parar = function(){
        console.log('Carro parado. ');
        this.velocidadeAtual = 0;
    }
}

var carro1 = new Carro();
carro1.potencia = "180cv";

var carro2 = new Carro();
carro2.ano = "2017";
carro2.nome = "Jeep Renegade";
carro2.potencia = "90cv";

var nome = ' ';
if(typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt("Digite seu nome: ");
}

nome = localStorage.nome;
document.getElementById('nome').innerHTML = nome; 

*/
//buscando dentro da div app a UL

var listElement = document.querySelector('#app ul');

var inputElement = document.querySelector('#app input');

var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('lista_todos')) || [];



function renderTodos(){
    listElement.innerHTML = '';

    for(todo of todos){
        console.log(todo);

        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var posicao = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deletarTodo('+ posicao +')');
        
        var linkText = document.createTextNode('Excluir'); 
        linkElement.appendChild(linkText);


        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }

}

renderTodos();

function adicionarTodo(){
    if(inputElement.value== ''){
        alert("Digite alguma tarefa!");
        return false;
    }else{
        var todoText = inputElement.value;
        todos.push(todoText);
        inputElement.value = '';
        renderTodos();
        salvarDados();

    }
    

}

buttonElement.onclick = adicionarTodo;

function deletarTodo(posicao){
    todos.splice(posicao,1); //splice remove algo da lista passando posição e o item do array
    renderTodos();
    salvarDados();
}

function salvarDados(){
    localStorage.setItem('lista_todos', JSON.stringify(todos));
}