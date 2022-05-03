const  read  =  require ( 'readline-sync' )
const buscarLivros = require('./controllers/buscarLivros')
const listarLivrosOrdenados = require('./controllers/listarLivrosOrdenados')
const listarRecomendado = require('./controllers/listarRecomendado')
const listarLivrosNaoLidos = require('./controllers/listarLivrosNaoLidos')
const  resposta  =  read.question ( `
============== Menu ================
1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de paginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca livros não lidos
5 - SAIR
Digite um número[1-5]:
` )


switch(resposta) {
    case '1':
        //chamar a função buscarLivros
        buscarLivros()
        break
    case'2':
     //chamar a função listar livros não lido
        listarLivrosNaoLidos ()
     
     break
    case '3':
        // chamar a função listarLivrosOrdenandos
        listarLivrosOrdenados()
        break
    case '4':
        // chamar a função listar livros recomendado
        listarRecomendado()
        break 
    default:
        console.log('fim do algoritmo')  
        break   
}
