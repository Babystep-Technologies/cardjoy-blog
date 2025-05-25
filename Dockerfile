FROM node:latest

WORKDIR /app
COPY . .

EXPOSE 3003
CMD ["node"]

