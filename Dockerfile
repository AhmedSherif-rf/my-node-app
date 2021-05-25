From node:10-alpine
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . /app
EXPOSE 5000
CMD node index.js