# Implements

- Language: `TypeScript`
- Library : `React` by `Create React App`
- Routing : `react-router-dom`
- Styling: `emotion.js`
- Testing Framework: `Jest`

## Implement Tree

```
|
|--./src
|
```

## Implement Requirements

### API

- Required API docs Link: https://dummyjson.com/docs/products
- Setting by using `.env`

```
REACT_APP_PROD_API_URL = https://dummyjson.com/products
REACT_APP_DEV_API_URL = https://dummyjson.com/products
```

- CRA로 제작한 프로젝트는 `dotenv` 패키지가 내장되어있습니다 따라서 예약된 `REACT_APP_` 키워드만 `.env`파일에 저장되어 있다면 `process.env.REACT_APP_KEY`로 사용할 수 있습니다. 단, 환경변수가 변경된다면 `npm start` 등 서버를 재시작해야 합니다.

### Product list page

- Input for searching
- Item list
- Adding by button

### Product detail page

- Button for going back
- Detailed information

## Additional Dev Points

### Styling

1. `index.tsx` - `index.css`: font-family, font-size
2. `App.tsx` - `app.css`: basic settings

### Absolute path in `tsconfig.json`

```json
{
  "compilerOptions": {
    //...
    "baseUrl": "."
  },
  "include": ["src"]
}
```

- 이 프로젝트에서는 `@/components`대신 `./components/..`를 `components/..`식으로 경로를 쓰는 방법으로 바꾸었습니다. `@`처럼 alias를 사용하려면 `eject`를 통한 `webpack`의 설정을 수정해주어야 하는데, 이는 한번 실행하면 되둘릴 수 없습니다. 다른 리스크 예방을 위해 `App.tsx`나 `index.tsx` 사용시에만 상대경로를 설정하는 방향으로 정했습니다. 혹은 `craco` 라이브러리를 사용하면 가능하지만 타 라이브러리 사용을 금했으므로 사용하지 않았습니다.
