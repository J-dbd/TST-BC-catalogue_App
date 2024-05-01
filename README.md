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

- 에러 발생시 보이는 에러 페이지와 로딩 시 보이는 로더 컴포넌트를 제작하였습니다.

### 전역 상태 관리: `isSearchMode`

- 헤더로 검색 바 및 목록으로 돌아가기를 구현하였기에 검색 중인지 아닌지를 구분하는 상태를 관리하였습니다.

## Issue

### As-Is

- 다시 검색하였을 때 올바르게 나타나지 않는 문제가 존재합니다. 현재 임시로 검색 결과가 없을 시 3초 뒤 메인 페이지로 이동합니다.
- 검색 시 `Failed to execute 'pushState' on 'History` 이슈가 발생합니다.

### To-Be (수정 완료)

- 잘못된 검색 후 올바른 검색을 진행하였을 때 화면을 그리지 않는 이슈는 삼항연산자의 순서를 바꾸어 해결했습니다.
- 두번째 문제는 `window.history`에 640k 이상의 크기를 가지는 문자열을 넣을 때 발생합니다. 수정 전 로직은 `searchBar`에서 검색(fetching)을 진행 후, `useNavigate`를 활용하여 param에 검색어를, state상태에 검색 결과를 함께 전달했습니다. 그러나 `useNaviagte`의 state에 담는 것은 `history API`의 `pushState()`메서드를 사용하는 것과 같으며,따라서 검색 결과를 이 안에 저장했을 때 관련 에러가 발생합니다. 이를 수정하려면 데이터를 불러오는 장소와 트리거를 고쳐야 합니다. 현재 프로젝트에서는 검색 관련 구현을 검색어를 입력하고 검색 버튼을 누르는 `searchBar` 컴포넌트와 검색 결과 화면이 그려지는 `searchPage`로 분리해 구현했습니다. `searchBar`는 어떤 페이지를 들어가도 존재하는 헤더에, `searchPage`는 outlet으로 전환되는 컴포넌트였으므로, 두 컴포넌트의 상위 컴포넌트에서 setter 함수를 내려보내 랜더링을 제어 시 복잡해질 수 있는 구조였습니다. 대신, 검색 시 `recoil`의 `atom`을 이용해 검색 화면 랜더링을 제어하였습니다. `serachBar`에서 submit 하는 순간, `atom`의 어떤 속성(keyword)를 변경하고, `useEffect`의 의존성 배열에 해당 속성을 입력해두었기 때문에 변화가 감지되면(즉, 검색어가 입력되어 submit될 시) `searchPage`에서 해당 키워드로 API 요청을 보내고 데이터를 다시 랜더링합니다. 이를 통해 검색어가 바뀌었을 때에도 다시 데이터를 fetch해오고, 화면에 랜더링할 수 있게 되었습니다.

## References

### css

- 3d button : [link](https://codepen.io/FelipeMarcos/pen/DyEgda)
- css loader : [link](https://cssloaders.github.io/)
- [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FJ-dbd%2FTST-BC-catalogue_App&count_bg=%2368D981&title_bg=%23347D90&icon=&icon_color=%23000000&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
