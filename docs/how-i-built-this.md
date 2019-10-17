# How I built this

## Intro

The goal of this document is to mainly help new people follow along my implementation and to be the basis of future posts and presentations

## Create React App

The first step was simply to run Create React App on my machine. Follow the instructions on https://github.com/facebook/create-react-app, it is much better explained.

![Image showing the result of create react app: the react logo with the text: Edit src/App.js and save to reload.](./assets/step1.png)


## Importing components
For the next step I copied over some components from my old repository https://github.com/RafaelFS/graphql-presentation. 

I won't go over the details on how they were created, but they form a simple grid of characters cards. You can find plenty of examples on how to do similar designs on https://codepen.io/. 

I chose to keep them in plain html and using css classes (no Styled Components) so it is easier to setup and folllow along.

## Mocking data
Alongside importing the old components, I also mocked some data to populate them. The images were selected by browsing the [Rick and Morty API](https://rickandmortyapi.com/) - more on that later.

![Image showing the results after the previous steps: two cards showing Rick and Morty from the popular TV show.](./assets/step2.png)


## REST API call
To provide a good comparison, I first did a version consuming the [REST Version](https://rickandmortyapi.com/documentation/#rest) of the Rick Morty API.

It is a simple browser fetch call to the API, consuming the Charact List endpoint (https://rickandmortyapi.com/api/character/) and treating the response.


## Replacing with GraphQL

This mainly follows the [Apollo Client React guide](https://www.apollographql.com/docs/react/get-started/), ignoring the `@apollo/react-hooks`.

1) Runs `yarn add apollo-boost graphql` or `npm install apollo-boost graphql` - Installs Apollo Boost, a bundle of packages that provide an Apollo Client with sensible defaults. Also installs the GraphQL base JS package.
2) Replaces the fetch call to the REST API version of Rick and Morty API with:
    - An Apollo Client instatiated pointing to https://rickandmortyapi.com/graphql/
    - A GraphQL Query written in the playground available in https://rickandmortyapi.com/graphql/ (check https://www.graphqlbin.com/v2/XrwPfO for a version with the query already built). It only selects the used fields (id, name, species, image). The GraphQL query is written as a string literal that is interpreted by gql - a library focused on this task - and passed to the client. 