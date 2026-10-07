# Painel de Ideias

## O que é

O Painel de Ideias é uma aplicação React criada para registrar ideias de projetos, marcar ideias concluídas e remover ideias que não são mais necessárias.

## Como rodar

1. Instale o Node.js.
2. Abra a pasta do projeto no VS Code.
3. No terminal, execute:

```bash
npm install
npm run dev
```

4. Abra no navegador o endereço mostrado pelo Vite.

## Funcionalidades

- Adicionar uma ideia.
- Impedir o cadastro de ideias vazias.
- Listar todas as ideias.
- Marcar uma ideia como concluída.
- Remover uma ideia.
- Mostrar a quantidade total de ideias.
- Mostrar a quantidade de ideias concluídas.

## Decisões do projeto

O estado principal da aplicação fica no array `ideias`. O campo do formulário usa `useState` e é um input controlado com `value` e `onChange`.

Para adicionar uma ideia é usado um novo array com spread. Para atualizar uma ideia é usado `map()`, criando um novo objeto com spread. Para remover uma ideia é usado `filter()`.

O contador é calculado diretamente a partir do estado da lista com `filter().length`, evitando criar um segundo estado para a mesma informação.

As ideias não são salvas no navegador, pois o trabalho não exige `localStorage`.

## Tecnologias

- React 18
- Vite
- JavaScript
- CSS puro
