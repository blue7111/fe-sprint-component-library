# **Getting Started**

이번 과제에서는 Figma에서 디자인된 컴포넌트를 React 컴포넌트로 구현해야 합니다. 이를 위해, Figma에서 추출한 디자인 토큰과 Styled Components을 사용하여 일관된 디자인을 유지하고, Storybook을 사용하여 각각의 컴포넌트에 대한 문서화를 진행합니다. 이 과정을 통해 디자인 시스템 구축 및 코드로 디자인을 구현하는 경험을 쌓을 수 있습니다.

## Figma
[Figma 링크](https://www.figma.com/file/mL7M0y9McFpAcZDyX8V8Hk/%5BS4-Design-System%5D-TodoList?type=design&node-id=0%3A1&t=0ODKG59a42CE5pT9-1)


## **Repository**

아래 링크에서 터미널을 이용하여 `git clone` 명령어로 Git Repository를 클론하고, `npm install`을 완료한 후 과제를 진행합니다.
**완성된 과제는 원본 레포지토리에 Pull Request**하여 제출합니다. 

[Github Repository 링크](https://github.com/codestates-seb/fe-sprint-component-library)

## **npm script 소개**

UI 컴포넌트 개발을 위해 필요한 tool인 Styled Components와 Storybook은 이미 설치가 되어 있습니다. package.json을 확인해 보세요!

- `npm run token` : Figma Token에서 추출한 `tokens.json`에 담긴 참조값을 실제 값으로 계산하여 `global.json`을 만듭니다.
- `npm run storybook` : 각각의 UI 컴포넌트들을 애플리케이션 외부의 독립된 환경에서 개발할 수 있도록 도와줍니다. 스크립트 실행 후 [http://localhost:6006](http://localhost:6006/)에서 Storybook을 확인할 수 있습니다.
    - 원자 단위에 속하는 컴포넌트들은 이미 작성되어 있습니다. 이를 조합해 여러 컴포넌트를 만들 수 있습니다.

## **File Structure**
<center>

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   └── favicon.ico
└── src
    ├── components   # 모든 컴포넌트가 들어가는 폴더
    │   ├── basic   # 기초 단위 컴포넌트가 들어가는 폴더
    │   │   ├── atoms   # 원자 단위 컴포넌트가 들어가는 폴더
    │   │   └── buttons   # 버튼 컴포넌트가 들어가는 폴더
    ├── tokens   # 디자인 토큰 관련 폴더 
    │   └── tokens.json   # Figma Token에서 추출한 디자인 토큰
    └── utils   # 유틸리티 관련 폴더
        └── mapStyle.js   # 토큰 객체의 값을 CSS 스타일로 매핑해주는 함수
```

\[코드\] component library 파일 구조

</center>


# 시작하기
1. Figma 튜토리얼 문서를 참고해 Figma 토큰을 추출하여 프로젝트의 `src/tokens` 폴더에 저장합니다. 그리고 `npm run token` 명령어를 실행해 저장된 토큰을 실제로 사용할 수 있는 값으로 변환합니다. 이 명령어를 통해, 토큰은 `global.json` 파일로 변환되며, 이 파일에는 실제로 사용할 수 있는 값들이 담겨 있습니다.
2. `npm run storybook`을 실행해 작성된 스토리북을 확인합니다. 원자 단위의 요소는 이미 구현되어 있습니다. 작성된 원자 단위 컴포넌트를 기반으로 다양한 컴포넌트를 구현할 수 있습니다. 
   ![image](https://s3.ap-northeast-2.amazonaws.com/urclass-images/juGlA5S8SyBI1E8aFb1YX-1684820811670.png)
3. `atoms` 폴더에 담긴 `Input.js` 파일을 확인하여 `global.json`에 담긴 토큰 값이 어떻게 사용되고 있는지 살펴보세요.
4. `Button`
     - `global.json`의 값을 사용해 만든 스타일 컴포넌트가 담겨 있습니다. 
     - 토큰에 담긴 값을 사용해 보조(Secondary) 스타일과 `hover` 및 `active`에 따른 스타일을 지정하세요.
     - `icon` props의 유무에 따라 `Icon` 컴포넌트가 버튼에 포함되도록 구현하세요.
     - [Storybook의 Args 문서](https://storybook.js.org/docs/react/writing-stories/args#args-composition)를 참고해 `Button.stories.js`에서 `primary` 상태에 따라 컴포넌트가 변경되도록 스토리를 작성하세요. 
5. `IconButton.stories.js`
     - `Button` 컴포넌트를 불러와 스토리북에서 아이콘과 라벨을 자유롭게 변경할 수 있도록 작성합니다.
6. `ChevronButton`
     - 라벨(`label`)의 유무에 따라 컴포넌트의 형태가 변경되도록 컴포넌트를 구현하세요.
     - `isExpanded` 상태에 따라 `Chevron` 아이콘이 변경되도록 컴포넌트를 구현하세요.
     - 아이콘만 보이는 상태(`OnlyIcon`)와 라벨이 함께 보이는 상태(`WithLabel`)를 구분하여 스토리를 작성합니다.
7. `Divider`
     - 스타일 컴포넌트에 하드 코딩된 `CSS` 속성을 Figma를 참고해 토큰의 값으로 대체하세요.  
     - 스토리북에서 `title`을 자유롭게 변경할 수 있도록 스토리를 작성합니다. 
8. `ItemBox`
     - `DividerContainer`의 스타일을 확장하여 Figma와 동일한 디자인의 `ItemBox` 컴포넌트를 구현합니다.
     - `hover` 또는 `active` 상태에 따라 스타일이 변경되도록 작성합니다.
     - 스토리북에서 `text`을 자유롭게 변경할 수 있도록 스토리를 작성합니다.


## Storybook Reference

[Component Library Storybook 링크](https://646bda2f1ccdf39a42f44285-vabaaptseh.chromatic.com/)

어떻게 스토리를 작성해야할지 막막하다면 스토리북 레퍼런스를 살펴보세요. 과제에서 요구하는 컴포넌트 이외에도 `Toaster`, `Dropdown`과 같은 복잡한 UI 컴포넌트도 구현되어 있습니다.

<center>

   ![image](https://s3.ap-northeast-2.amazonaws.com/urclass-images/phFw0PK9jbJlad2Uizl4D-1684820816100.png)

</center>



# **Bare minimum Requirement**

Figma에 작성된 컴포넌트 디자인을 Styled Components와 Storybook을 활용하여 React 컴포넌트로 구현합니다.

- Figma 토큰을 추출하여 이를 React 컴포넌트에 적용합니다. 
- `Button` 컴포넌트를 구현하고 이에 대한 스토리를 작성합니다.
- `ChevronButton` 컴포넌트를 구현하고 이에 대한 스토리를 작성합니다.
- `IconButton`의 스토리를 작성합니다.
- `Divider` 컴포넌트를 구현하고 이에 대한 스토리를 작성합니다.
- `ItemBox` 컴포넌트를 구현하고 이에 대한 스토리를 작성합니다.

# **Advanced Challenge**

주어진 컴포넌트 외에 새로운 컴포넌트를 구현합니다. 레퍼런스로 제공된 스토리북을 참고할 수 있습니다. 
- `TabItem` 컴포넌트를 구현하고 이를 테스트할 수 있도록 스토리를 작성하세요.
- `Dropdown` 컴포넌트를 구현하고 이를 테스트할 수 있도록 스토리를 작성하세요. 
- `Modal` 컴포넌트를 구현하고 이를 테스트할 수 있도록 스토리를 작성하세요. 
- `Toast` 컴포넌트를 구현하고 이를 테스트할 수 있도록 스토리를 작성하세요.  