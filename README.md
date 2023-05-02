# [KumaModal 모달 라이브러리](https://www.npmjs.com/package/sample-modal-woowacourse-kuma?activeTab=readme)

간단한 모달을 구현할 수 있는 React 전용 라이브러리입니다.

## 설치 방법

```sh
npm i sample-modal-woowacourse-kuma
```

## 의존성

해당 라이브러리는 `styled-components, @types/styled-components`를 이용합니다.

## 사용 방법

### MyModal 컴포넌트 불러오기

```tsx
import { KumaModal } from 'sample-modal-woowacourse-kuma';
```

### MyModal 사용하기

```jsx
<KumaModal trigger={<button>열기</button>}>
  <h2>제목</h2>
  <p>내용</p>
</KumaModal>
```

## Props

trigger: 모달을 열기 위한 요소. React element 형태로 전달합니다.
children: 모달 내부에 들어갈 컨텐츠입니다.

```ts
type Props = {
  trigger: React.ReactElement;
  children?: React.ReactNode;
};
```

## 사용 예시

```js
import { KumaModal } from 'sample-modal-woowacourse-kuma';

function App() {
  return (
    <div>
      <MyModal trigger={<button>모달 열기</button>}>
        <h2>제목</h2>
        <p>내용</p>
      </MyModal>
    </div>
  );
}

export default App;
```
