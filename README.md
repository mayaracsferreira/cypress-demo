# Demo Testes Automatizados com Cypress

## Projeto de exemplo sobre como utilizar o Cypress para teste funcional

### Site utilizado
[Demozable](https://www.demoblaze.com/index.html)

### Documentação oficial Cypress 
https://docs.cypress.io/guides/overview/why-cypress.html


### Utilizar esse projeto 
Clonar esse respositório
```
git clone https://github.com/mayaracsferreira/cypress-demo.git
```

Instalar dependências
```
npm install
```

Executar 
```
npm run cypress
```

### Ou configuração manual do projeto 

Criar um projeto com npm
```
npm init
```

Instalar o framework Cypress
```
npm install cypress
```

Configurar a parte de scripts do arquivo package.json como:
```json
"scripts": {    
    "cypress" : "cypress open"
  }
```

Executar 
```
npm run cypress
```