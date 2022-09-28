## [Complete CRUD Application with Node, Express & MongoDB](https://www.youtube.com/watch?v=W1Kttu53qTg)

## Important links
- [docker-hub | mongo | Overview | Environment Variables](https://hub.docker.com/_/mongo)

- [mongo db docker image authentication failed](https://stackoverflow.com/questions/60394290/mongo-db-docker-image-authentication-failed)


## Docker commands
```sh
    sudo docker rm node_api mongo_database
    sudo docker rmi -f crud-app-node_api
    sudo docker compose --env-file .env up -d
```
Then you can hit http://localhost:3000 in your browser.

## [mongo-express](https://github.com/mongo-express/mongo-express-docker)
```sh
docker run --link some_mongo_container:mongo -p 8081:8081 -e ME_CONFIG_MONGODB_URL="mongodb://some_mongo_container:27017" --net myapp_default mongo-express

docker run --link mongo_database:mongo -p 8081:8081 -e ME_CONFIG_MONGODB_URL="mongodb://mongo_database:27017" --net crud-app_default mongo-express
```

Then you can hit http://localhost:8081 or http://host-ip:8081 in your browser.
