# API WITH COVARAGE TEST

<br/>

## Description

<p>
Clean code based api, clean architecture and tdd. Api fully decoupled from frameworks, infrastructure modules and database.
</p>

<br/>

### TOOLS

<a href="https://jestjs.io/pt-BR/"><img src="https://jestjs.io/pt-BR/img/opengraph.png"  style="height: 100px; width:100px"/></a> <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjWqo7Rl6z6AhVErpUCHVC7AqYQFnoECAMQAQ&url=https%3A%2F%2Fnodejs.org%2F&usg=AOvVaw1tY2p-vJFWJmxWlq4sTxCn"><img src="https://blog.geekhunter.com.br/wp-content/uploads/2021/02/1_mp91A9RzagntGGjBnwu4Yw.png" style="height: 100px; width:100px"/></a> <a href="https://www.typescriptlang.org/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png" style="height: 100px; width:100px"/></a> <a href="http://restify.com/"><img src="https://static.imasters.com.br/wp-content/uploads/2018/03/image1-2.png" style="height: 100px; width:100px"/></a> <a href="https://expressjs.com/"><img src="https://dkrn4sk0rn31v.cloudfront.net/uploads/2020/12/o-que-e-o-express-js.png" style="height: 100px; width:100px"/></a> <a href="https://www.elastic.co/pt/"><img src="https://images.velog.io/images/yoozung/post/ba8457fc-e2ac-437c-ad2d-d0baa0707990/elastic.jpg" style="height: 100px; width:100px"/></a> <a href="https://www.elastic.co/pt/kibana/"><img src="https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt81adc84f81e97ed9/5c304e3fa253ae3e67bc85b1/blog-kibana-thumbnail.jpg" style="height: 100px; width:100px"/></a> <a href="https://swagger.io/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-qHhkU65OgRkaxFh1vRF4ycDfUOznjs7cEu5aXbMwWCYpNUMNPfDcL9Fox0a3_mbtAY&usqp=CAU" style="height: 100px; width:100px"/></a> <a href="https://mongoosejs.com/"><img src="https://miro.medium.com/max/1050/1*acfAKaDI7uv5GyFnJmiPhA.png" style="height: 100px; width:100px"/></a> <a href="https://www.mongodb.com/"><img src="https://miro.medium.com/max/527/1*Ipg_guKJO2MwacQ_3amxGw.jpeg" style="height: 100px; width:100px"/></a> <a href="https://typeorm.io/"><img src="https://raw.githubusercontent.com/typeorm/typeorm/master/resources/logo_big.png" style="height: 100px; width:100px"/></a> <a href="https://www.mysql.com/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIOJNUlGFdBMUJJzfOwckqTAXFhL2ck2TkcO6EFkQSKPbBKDgLJdmFkOJkvJB0DVKR4oM&usqp=CAU" style="height: 100px; width:100px"/></a>

<br/>

### Start Project
<p>
use this project for email service:
<a href="https://github.com/Jardielson-s/send-email"> send-email-service </a></p>

```
# elasticSearch
docker run -d -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.7.0

# kibana
docker run --link 689a8a4625c7:elasticsearch -d -p 5601:5601 docker.elastic.co/kibana/kibana:7.7.0

# send-email-service 
# https://github.com/Jardielson-s/send-email
npm run start:dev

# nove version v14.19.2
npm i # intall dependencies

#Servers
npm run start:dev

#tests
npm test
```

<br/>

## Swagger Api

```
http://localhost:[port]/api-docs
```

<br/>

## Structure

<p align="center">
<img src="https://miro.medium.com/max/964/1*lhpcX6Vljr7p4OvKql3x6Q.png" style="height: 500px; width:500px"/>
</p>

<br/>

## Implementations

-   [x] Create User
-   [x] Get User By Id
-   [x] Update User
-   [x] Delete User
-   [x] Account Validation
-   [x] send mail throught aws ses
