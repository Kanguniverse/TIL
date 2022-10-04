# CSS GRID

# CSS Layout 종류

- flex
  - 아이템을 1차원적으로 배치
  - row, column
  - wrap 속성을 사용시 한 줄 아이템 넘칠 시 다른 줄로 넘겨 줄 수 있도록 함
- grid
  - 아이템을 2차원적으로 배치
  - 자유자재로 배치, 웹 사이트 전체를 grid 형태로 잡을 때 유용하게 사용

# CSS Grid

- 사용법 : display : grid
- 부모 요소에 grid 사용 시 자식 요소는 grid cell로 전환

## grid 속성

- grid의 전체적인 모양과 사이즈 템플릿 지정 가능
- grid-template-columns : 가로로 데이터가 몇개 있는 지 지정
- grid-template-rows : 세로로 데이터가 몇개 있는 지 지정
- grid-template-areas :
- grid-gap : 그리드 셀 별 각각 간격 설정 (row 및 column 별 간격 설정 가능)

## grid cell 속성

- grid-column-start : 열 시작 지점 (첫 줄 시작 부분이 1로 시작)
- grid-column-end : 열 끝나는 지점
- grid-row-start: 행 시작 지점 (첫 줄 시작 부분이 1로 시작)
- grid-row-end: 행 끝 지점
- grid-area:

### 이미지의 정렬의 경우

- width : 100%, height: 100%, object-fit : cover 사용 해서 정렬
