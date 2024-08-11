# Open AI Interface to Chat GPT

### This repo containers procedures to build and deploy within Docker Containers

#### Step One, go to https://platform.openia.com and register for an OpenAI API Key, place in .env.local as OPENAI_API_KEY

1. Build:

~~~ 
docker build -t chatgpt:latest .
~~~

2. Start Container:

~~~ 
docker run --rm -p 3000:3000 -it chatgpt:latest
~~~

3. Use Docker Compose for Ease of Use:

~~~ 
docker compose up --build --force-recreate
~~~