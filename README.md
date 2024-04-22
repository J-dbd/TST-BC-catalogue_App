![image](https://github.com/J-dbd/TST-BC-catalogue_App/assets/108377644/b458267f-be39-4be9-9ed6-81204046cff9)

# Implements

- Language: `TypeScript`
- Library : `React` by `Create React App`
- Routing : `react-router-dom`
- Styling: `emotion.js`
- state management library : `Recoil`
- period: 24.04.22

## Implement Tree

```
./src
|-- API
|   `-- api.ts
|-- App.css
|-- App.tsx
|-- components
|   |-- Card.tsx
|   |-- Layout.tsx
|   |-- Loader.tsx
|   |-- header
|   |   `-- Header.tsx
|   `-- searchBar
|       |-- SearchBar.tsx
|       `-- search.css
|-- index.css
|-- index.tsx
|-- lib
|   |-- index.ts
|   |-- recoil.ts
|   `-- unions.ts
|-- pages
|   |-- DetailPage.tsx
|   |-- ErrorPage.tsx
|   |-- Main.tsx
|   `-- SearchPage.tsx
|-- react-app-env.d.ts

`-- styles
    |-- LinkStyle2D.tsx
    |-- LinkStyle3D.tsx
    |-- MainContainer.tsx
    `-- PrdSectionLists.tsx

7 directories, 26 files
```

- **components**: 기능 중심으로 분류한 컴포넌트들을 모아두는 디렉토리입니다.
- **lib**: `type`, `recoil atom`, css관련 통일 단위 등을 담아두는 디렉토리입니다.
- **pages**: `react-router-dom`을 이용해해 이동하는 페이지들입니다.
- **style**: 스타일 중심으로 자주 쓰는 코드들(`MainCOntainer`...)을 모아두는 디렉토리입니다.

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

### css module

`Search.tsx`에서 `input` tag와 `searching_section`에서 `css-in-js`를 사용하지 않았습니다. 해당 방식으로 스타일링 할 시 입력할 때마다 반응이 느려지는 현상이 있었습니다. `css-in-js`의 경우 자바스크립트 해석 과정이 필요하기 때문에 반응이 느려지는 것이라 가설을 세우고 css 모듈 방식을 사용하니 해당 현상이 사라졌습니다.

### Error Page, Loader
* 에러 발생시 보이는 에러 페이지와 로딩 시 보이는 로더 컴포넌트를 제작하였습니다.

### 전역 상태 관리: `isSearchMode`
* 헤더로 검색 바 및 목록으로 돌아가기를 구현하였기에 검색 중인지 아닌지를 구분하는 상태를 관리하였습니다.


## Issue
* `SearchPage`와 `Search`간 매끄럽지 않은 연결이 있습니다. 현재 검색 바에 잘못된 결과가 나오는 검색을 하였을 시 해당 결과도 `/search` 페이지에서 랜더링 되기 때문에 재검색 이슈가 있습니다. 현재 임시로 검색 결과가 없을 시 3초 뒤 메인 페이지로 이동합니다. 전역 상태 관리를 사용하거나, 잘못된 결과가 나올 시 page 자체를 이동하거나 모달을 띄우는 방향으로 리펙토링 할 수 있으리라 예상합니다.
## References

### css

- 3d button : [link](https://codepen.io/FelipeMarcos/pen/DyEgda)
- css loader : [link](https://cssloaders.github.io/)
- 
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FJ-dbd%2FTST-BC-catalogue_App&count_bg=%2368D981&title_bg=%23347D90&icon=&icon_color=%23000000&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
