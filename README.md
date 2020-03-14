# :bookmark_tabs: To-do List App

## :pencil: Sobre

App simples e funcional de uma lista de tarefas usando [React](https://pt-br.reactjs.org/) e [Redux](https://redux.js.org/) para aprimorar meus conhecimentos nas tecnologias.

## :package: Uso

1. **Clone esse repósitorio**

    ```shell
    git clone https://github.com/Henriquepb22/todoapp-react
    ```

2. **Instale o [NodeJS](https://nodejs.org/en/) em sua máquina se não tiver**

3. **Instale o MongoDB e inicie ele na porta 27017**

    [Guia de instalação do MongoDB](https://docs.mongodb.com/guides/server/install/)

    Após instalar execute o comando:

    ```shell
    mongod --port 27017
    ```

4. **Execute o backend depois o frontend do projeto**

    ```shell
    #Após clonar o repositório entre na pasta criada
    cd todoapp-react

    #Entre na pasta do backend instale as dependencias e execute no modo de desenvolvimento
    cd backend/ && npm install && npm run dev
    #ou usando yarn
    cd backend/ && yarn install && yarn dev

    #Agora saia da pasta do backend e na pasta do frontend faça a mesma coisa
    cd frontend/ && npm install && npm run dev
    #ou usando yarn
    cd frontend/ && yarn install && yarn dev
    ```

    Agora acesse o [Localhost na porta 8080](https://localhost:8080/) e use o app.

### :heavy_check_mark: Licença

[MIT](https://github.com/Henriquepb22/todoapp-react/blob/master/LICENSE)
