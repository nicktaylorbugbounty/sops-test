FROM node

WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn

COPY . .
RUN yarn build

CMD ["yarn", "start"]