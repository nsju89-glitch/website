// 버튼과 텍스트 요소를 선택합니다
const greetBtn = document.getElementById("greetBtn");
const greetText = document.getElementById("greetText");

// 클릭할 때마다 보여줄 인사말 목록
const messages = [
  "안녕하세요! 반가워요 :)",
  "오늘도 좋은 하루 보내세요!",
  "코딩 공부 화이팅!",
  "다시 눌러보세요, 문구가 바뀝니다"
];

let count = 0;

// 버튼 클릭 시 실행할 동작
greetBtn.addEventListener("click", () => {
  greetText.textContent = messages[count % messages.length];
  count++;
});
