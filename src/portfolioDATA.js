const profile = {
    name: "leeseoyu",
    email: "yuyu00lee@gmail.com",
    tel: "010-8751-1235"
}

export { profile }

const portfolio = [
    { id: 1, title: "오설록", type: "Responsive Web", font: "Noto Sans Korean", info: "브랜드의 원래 로고나 제품 패키지 디자인을\n참고하여, 모던하고 딥한 이미지를 고취시킬\n수 있는 다크모드로 디자인 했습니다.\n전체적으로 무채색을 사용하여 브랜드의 정체성을\n드러냈고, 첫번째 섹션은 브랜드만이 가지고 있는\n특이점 이라고 생각해 타이포그라피와 색감을\n이용해 디자인했습니다.", color: ["#198754", "#333", "tomato"], skill: ["HTML", "css", "JQuery"], src: process.env.PUBLIC_URL + "/assets/img/osulloc.png", link: "https://syuulee.github.io/lsy_pp/week_4/", anchor: "오설록" },
    { id: 2, title: "더플라자호텔", type: "Responsive Web", font: "Noto Sans Korean", info: "브랜드의 원래 로고나 제품 패키지 디자인을\n참고하여, 모던하고 딥한 이미지를 고취시킬\n수 있는 다크모드로 디자인 했습니다.\n전체적으로 무채색을 사용하여 브랜드의 정체성을\n드러냈고, 첫번째 섹션은 브랜드만이 가지고 있는\n특이점 이라고 생각해 타이포그라피와 색감을\n이용해 디자인했습니다.", color: ["#369", "#f00", "tomato"], skill: ["react", "react-router-dom", "axios", "redux-tollkit"], src: process.env.PUBLIC_URL + "/assets/img/ndg.jpg", link: "https://syuulee.github.io/lsy_pp2/week_7/", anchor: "더플라자호텔" },
    { id: 3, title: "솔트레인", type: "Responsive Web", font: "Noto Sans Korean", info: "브랜드의 원래 로고나 제품 패키지 디자인을\n참고하여, 모던하고 딥한 이미지를 고취시킬\n수 있는 다크모드로 디자인 했습니다.\n전체적으로 무채색을 사용하여 브랜드의 정체성을\n드러냈고, 첫번째 섹션은 브랜드만이 가지고 있는\n특이점 이라고 생각해 타이포그라피와 색감을\n이용해 디자인했습니다.", color: ["#369", "#f00", "tomato"], skill: ["react", "react-router-dom", "axios", "redux-tollkit"], src: process.env.PUBLIC_URL + "/assets/img/ndg.jpg", link: "https://syuulee.github.io/lsy_pp2/week_10/", anchor: "솔트레인" },
    { id: 4, title: "빅마우스", type: "Responsive Web", font: "Noto Sans Korean", info: "브랜드의 원래 로고나 제품 패키지 디자인을\n참고하여, 모던하고 딥한 이미지를 고취시킬\n수 있는 다크모드로 디자인 했습니다.\n전체적으로 무채색을 사용하여 브랜드의 정체성을\n드러냈고, 첫번째 섹션은 브랜드만이 가지고 있는\n특이점 이라고 생각해 타이포그라피와 색감을\n이용해 디자인했습니다.", color: ["#369", "#f00", "tomato"], skill: ["react", "react-router-dom", "axios", "redux-tollkit"], src: process.env.PUBLIC_URL + "/assets/img/ndg.jpg", link: "https://syuulee.github.io/lsy_pp/week_11/", anchor: "빅마우스" },
    { id: 5, title: "서울아산병원", type: "Responsive Web", font: ["Noto Sans Korean", "어쩌고"], info: "브랜드의 원래 로고나 제품 패키지 디자인을\n참고하여, 모던하고 딥한 이미지를 고취시킬\n수 있는 다크모드로 디자인 했습니다.\n전체적으로 무채색을 사용하여 브랜드의 정체성을\n드러냈고, 첫번째 섹션은 브랜드만이 가지고 있는\n특이점 이라고 생각해 타이포그라피와 색감을\n이용해 디자인했습니다.", color: ["#369", "#f00", "tomato"], skill: ["react", "react-router-dom", "axios", "redux-tollkit"], src: process.env.PUBLIC_URL + "/assets/img/ndg.jpg", link: "https://syuulee.github.io/react_tast_2/", anchor: "서울아산병원" },
    { id: 6, title: "국립발레단", type: "Responsive Web", font: "Noto Sans Korean", info: "브랜드의 원래 로고나 제품 패키지 디자인을\n참고하여, 모던하고 딥한 이미지를 고취시킬\n수 있는 다크모드로 디자인 했습니다.\n전체적으로 무채색을 사용하여 브랜드의 정체성을\n드러냈고, 첫번째 섹션은 브랜드만이 가지고 있는\n특이점 이라고 생각해 타이포그라피와 색감을\n이용해 디자인했습니다.", color: ["#369", "#f00", "tomato"], skill: ["react", "react-router-dom", "axios", "redux-tollkit"], src: process.env.PUBLIC_URL + "/assets/img/ndg.jpg", link: "https://syuulee.github.io/react_tast_3/", anchor: "국립발레단" },
    { id: 7, title: "국립전파어쩌고", type: "Responsive Web", font: "Noto Sans Korean", info: "브랜드의 원래 로고나 제품 패키지 디자인을\n참고하여, 모던하고 딥한 이미지를 고취시킬\n수 있는 다크모드로 디자인 했습니다.\n전체적으로 무채색을 사용하여 브랜드의 정체성을\n드러냈고, 첫번째 섹션은 브랜드만이 가지고 있는\n특이점 이라고 생각해 타이포그라피와 색감을\n이용해 디자인했습니다.", color: ["#369", "#f00", "tomato"], skill: ["react", "react-router-dom", "axios", "redux-tollkit"], src: process.env.PUBLIC_URL + "/assets/img/ndg.jpg", link: "https://syuulee.github.io/react_tast_4/", anchor: "국립전파어쩌고" },
];


export { portfolio }