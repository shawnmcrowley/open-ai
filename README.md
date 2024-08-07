## Open AI Interface to Chat GPT

# This repo containers procedures to build and deploy within Docker Containers

1. Build:

~~~ 
docker build -t my-app:latest -f Dockerfile.prod .
~~~

2. Start Container:

~~~ 
docker run --rm -p 3000:3000 -it myapp:dev
~~~

3. Use Docker Compose for Ease of Use:

~~~ 
docker compose -f docker-compose.dev.yml up --build --force-recreate
~~~