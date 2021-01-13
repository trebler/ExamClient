# Build stage
FROM mhart/alpine-node:14.15.4 as build

RUN apk add --no-cache git

WORKDIR /src

COPY package.json \
    yarn.lock \
    tsconfig.json \
    .eslintrc.js \
    .eslintignore \
    .prettierrc.js \
    babel.config.js \
    .browserslistrc \
    vue.config.js ./

COPY src src
COPY public public

COPY .git .git

RUN yarn install --frozen-lockfile --silent \
    && yarn build

# Final stage
FROM nginx:1.18.0 as final

COPY --from=build /src/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf