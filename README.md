# It's my seat!

## Intorduction

- **It's my seat** : 사용자가 자리를 찾지 않고 카페의 자리를 결제 전에 등록하여 이용하는 웹

<br>[![Video Label](https://img.youtube.com/vi/oUvW4NNxkhk/0.jpg)](https://youtu.be/oUvW4NNxkhk)

## deploy address
- https://www.knowgari.com/

## Requirements

- 웹 사용을 권장합니다.
- admin당 1개의 cafe를 가정 하였습니다.
- admin 계정 (id : 1@1, password : 1)


## Installation

```javascript
//client
git clone https://github.com/Kyounghwan01/it-s-my-seat-VC-client.git
cd client
yarn install

//server
cd ..
git clone https://github.com/Kyounghwan01/test-server.git
cd test-server
yarn install
yarn run dev
```

- server 환경 변수

```javascript
//server root 리렉토리 `.env` 생성 후 아래 환경변수 기입
PORT=4000
NODE_ENV=development
YOUR_SECRET_KEY=12345
DB_URL='mongodb+srv://mongodbUser:<password>@cluster0-9ockr.gcp.mongodb.net/Its_my_seat?retryWrites=true&w=majority'
TEST_DB_URL='mongodb+srv://mongodbUser:<password>@cluster0-9ockr.gcp.mongodb.net/Its_my_seat_TEST?retryWrites=true&w=majority'
```

## Features

- JSON Web Token Authentication
- 회원가입
- 로그아웃
- 본인 주문 내역 페이지
- 주문 기능
- 결재 후 본인 자리 확인 및 잔여시간 확인 기능
- 잔여시간 30분 이전, 잔여시간 추가 기능
- 잔여시간 초과시 자동 자리 초기화

### admin
- 카페 내부 배치도 수정 기능
- 카페 메뉴 추가,삭제,수정 기능
- 주문 내역 확인 및 주문 처리 완료 기능

## Skills
### Client-Side

- ES2015+
- React
- React Hooks
- React Router
- Redux
- Scss

### Server-Side

- Node.js
- Express
- ES2015+
- JSON Web Token Authentication
- MongoDB
- Mongoose
- Atlas


## Test

- PropTypes
- Reducer Unit Test (Jest)
- Component Unit Test (Jest, Enzyme)
- server Test (Jest)

## Deployment & Continuous Integration

### Client

- Netlify CI를 통한 배포 자동화

### Server
- AWS Elastic beanstalk를 통해 서비스 배포
- CircleCI를 통한 배포 자동화

## Project Control

- Git Branch 활용
- Trello 활용한 Task Management


## Challenges

- **트리 구조**로 만든 메뉴 바꾸는 component와 자리를 선택하거나, 주인이 자리 배치를 수정할 때 쓰인 **드래그 앤 드롭**을 구현하는데 시간 소요

### 트리구조 구현
- `li` tag에 `className`을 함수를 통해 `open`, `close`로 `li` tag의 state를 유동적으로 관리
- 트리구조의 list는
```{label : coffee, children : [{name : '아이스아메리카노, price : 3000}, ...]}``` 구조로 만들었고 세부 내역으로 들어갈때 `children` 속성을 `this.state.list`에 넣어 세부 내역이 보여지도록 함

### 드래그 앤 드롭 구현
- `li` tag의 `onDragOver`, `onDrop`, `onDoubleClick` 속성을 중심으로 구현
- 카페 구조는 100개의 `li` tag로 구성되고, 각 `li`는 `data-id` 값으로 0부터 100까지의 숫자를 가짐
- 위 `data-id`를 활용하여 `getAttribute('data-id')`에 값이 없으면 드래그한 값으로 치환 함
- `onDragOver`는 `preventDefault()`만 사용하고, `li`를 변경해도 화면이 바뀌지 않도록 함
- `onDrop`하면 위에서 말한 100개의 `li` 중 하나가 호출되며 그 `li`에 벽 또는 테이블이라는 속성이 들어감
- `onDoubleClick` 하면 `getAttribute('data-id')`값이 있을 경우 해당 더블 클릭한 `li`의 `data-id`값을 null로 바꿈



## Things To Do

- n x n으로 자리 설정 기능
- 소셜로그인 기능
  - passport.js 사용 하여 소셜로그인 구현
- 로컬 로그인 시 이메일 인증 후 회원가입
- server test 보완
  - 로컬에서는 test가 통과하나 작성한 파일을 circle ci에 deploy하면 test가 통과하지 못하여, aws에 deploy가 되지 않음
  - 현재 test파일 주석처리 한 상태
  - test용 db을 따로 만들어 사용하고, test할 때만 잠깐 연결하고, test가 끝나면 연결을 중지하는 로직 필요
- 다양한 카페에 적용 가능 (현재는 1개만 가능)
- 카페 생성 후, db에 접근하여 수동으로 user > owner의 값을 user의 object id로 바꿔야 함
  - cafe의 owner을 회원가입 할 때, 자동으로 admin 조건을 가진 유저 생성
- end to end test



## Sincere Thanks

[Ken Huh](https://github.com/Ken123777) / Vanilla Coding
