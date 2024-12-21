Build , ##Ship then Run##

## lệnh
docker compose -f backend-compose.yam -p nodejs-sql up -d

## build
docker build -t <name> .
docker run -d -p <port-docker>:<port-local> <name>

## list
docker ps
a(All)
docker ps -a 

## ngừng
docker stop <CONTAINER ID>

## xóa
docker rm -f <CONTAINER ID>

## build docker .yml
docker compose -f backend-compose.yaml -p nodejs-sql up -d --build