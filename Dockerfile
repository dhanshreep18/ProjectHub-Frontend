# pull official base image
FROM node:12.8.1

# set working directory
WORKDIR /client

# add `/client/node_modules/.bin` to $PATH
ENV PATH /client/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# add app
COPY . ./

# replace config file
RUN cp ./src/configs.sit.json ./src/configs.json

# start app
CMD ["npm", "start"]
