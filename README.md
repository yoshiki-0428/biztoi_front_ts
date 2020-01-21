# biztoi_front_ts

## Project setup front
```
yarn install
yarn openapi:sync
yarn openapi
```

## Project setup api
```
docker-compose up -d
```

### Compiles and hot-reloads for development

#### Repositoryのopenapi versionに合わせてビルドする
```
yarn serve:sync
```

#### Submoduleの最新openapi versionに合わせてビルドする
```
yarn serve:update
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
