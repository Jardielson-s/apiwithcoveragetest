# API WITH COVARAGE TEST

## Description

<p>
Clean code based api, clean architecture and tdd. Api fully decoupled from frameworks, infrastructure modules and database.
</p>

### TOOLS
<a href="https://jestjs.io/pt-BR/"><img src="https://jestjs.io/pt-BR/img/opengraph.png"  style="height: 100px; width:100px"/></a> <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjWqo7Rl6z6AhVErpUCHVC7AqYQFnoECAMQAQ&url=https%3A%2F%2Fnodejs.org%2F&usg=AOvVaw1tY2p-vJFWJmxWlq4sTxCn"><img src="https://blog.geekhunter.com.br/wp-content/uploads/2021/02/1_mp91A9RzagntGGjBnwu4Yw.png" style="height: 100px; width:100px"/></a> <a href="https://www.typescriptlang.org/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png" style="height: 100px; width:100px"/></a> <a href="http://restify.com/"><img src="https://static.imasters.com.br/wp-content/uploads/2018/03/image1-2.png" style="height: 100px; width:100px"/></a>

### start project
```
npm i # intall dependencies

#Servers
npm run start:dev

#tests
npm test
```


## Structure
<p align="center">
<img src="https://miro.medium.com/max/964/1*lhpcX6Vljr7p4OvKql3x6Q.png" style="height: 500px; width:500px"/>
</p>

Layer          |    Files   |   Files |
-------------- |------------|---------|
domain         | use-cases  | entities| 
infrastructure | databases  |  aws    |
main           | framework  | restify |
presentation   | controllers| handlers|
