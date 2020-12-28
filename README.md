# API Upload de Imagens

Essa aplicação foi desenvolvida exclusivamente para o upload e visualização de imagens.

_Foi feito com muito entusiasmo e carinho :)_

## Guia Rápido das Tecnologias Usadas

<ul>
  <li>Multer (Upload de Imagens)</li>
  <li>Express</li>
  <li>MongoDB/Mongoose</li>
  <li>Gitflow e Commits Semanticos</li>
 </ul>

## Guia Rápido de Instalação

Antes de qualquer coisa, você precisa ter instaldo o [`NPM & Node`](https://nodejs.org/en/) + [`Git`](https://git-scm.com/). Para Instalar o  siga o passo a passo de cada link listado abaixo:

- [`NPM & Node`](https://nodejs.org/en/)
- [`Git`](https://git-scm.com/)
- [`Yarn`](https://yarnpkg.com/)

Considerando que você executou as etapas acima com êxito, abra o seu terminal e rode os seguintes comandos:   

- `git clone https://github.com/raissaqueiroz/upload-api.git` 
- `cd upload-api` 
- `yarn add`
- `yarn start` or `yarn dev` 


### Edpoints


`POST /posts`: <br/>
Método para fazer upload de imagem. Você deve enviar no corpo da requisição um campo "file" contendo o arquivo. <br/>

`GET /posts`:  <br/>
Método para Listar Uploads Realizados Nessa Ferramenta. Ele retorna a url do arquivo, nome original e tamanho. <br/>

`DELETE /posts/:id`: <br/>
Método para Deletar um Upload. É necessário enviar o ID dele no lugar de `:id` na URL
