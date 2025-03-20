FROM node:16-alpine

WORKDIR /app

COPY package.json .
RUN npm install

RUN npm install serve -g


COPY . .

EXPOSE 3000


# Command to run the backend server
CMD ["npm", "run", "deploy"]
