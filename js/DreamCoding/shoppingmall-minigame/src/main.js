// Fetch the items from th JSON file
function loadItems() {
   return fetch('data/data.json')
      .then(response => response.json())
      .then(json => json.items);
}

// Update the list with the given items
function displayItems(items) {
   const container = document.querySelector('.items');
   container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// Create HTML list item from the given data item
function createHTMLString(item) {
   return `
      <li class="item" data-type="${item.type}" data-color="${item.color}">
         <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
         <span class="item__description">${item.gender}, ${item.size}</span>
      </li>
   `;
}

// Handle button click
function onButtonClick(event) {
   const items = document.querySelectorAll('.item');
   const dataset = event.target.dataset;
   const key = dataset.key;
   const value = dataset.value;
   if (key == null || value == null) {
      return;
   }

   updateItems(items, key, value);
}

// Make the items matching {key : value} invisible
function updateItems(items, key, value) {
   items.forEach(item => {
      if (item.dataset[key] === value) {
         item.classList.remove('invisible');
      } else {
         item.classList.add('invisible');
      }
   });
}

function setEventListeners(items) {
   const logo = document.querySelector('.logo');
   const buttons = document.querySelector('.buttons');
   logo.addEventListener('click', () => displayItems(items));
   buttons.addEventListener('click', event => onButtonClick(event));
}

// main
loadItems()
   .then(items => {
      displayItems(items);
      setEventListeners(items);
   })
   .catch(console.log);

/* Code Review */
// 1. ReadMe file: 포트폴리오와 코드 리뷰를 생각한다면 리드미는 반드시 작성하자.
//    (프로젝트 이름, 스택, 기간, 주요 기능, 아키텍처)
// 2. Variable: 변수는 여러 개를 한 번에 선언하기 보다 한 줄에 하나씩 선언하는 것이 좋다. 
// 3. String template: String을 연결해서 출력할 때는 String template(``) 사용하자.
// 4. Array: 배열 또한 선언과 동시에 할당할 수 있으며, 다른 배열을 할당할 게 아니라면 const로 선언하자.
// 5. DRY: Don't Repeat Yourself (중복 코드 작성하지 않기)
//    함수 안에서 하고 있는게 많거나 반복되는 코드가 많다면 중복을 줄이고 코드를 의미있게 만드는 것이 중요하다!
// 6. Class: 클래스 안에서 아이템을 내부적으로 만들지 말고 외부에서 받는 것이 좋다.
//    + 요즘에는 getElementById 보다 querySelector를 많이 사용함
// 7. Early exit: 선언문 아래쪽에서 함수를 빠져나갈 문장을 미리 사용한다.
//    무조건 짧은 코드가 가독성이 좋은 것은 아니다. 읽기 쉬워야 함!
// 8. Consistency: 동일한 코드 스타일(querySelector/getElementById)을 사용하자.
// 9. Event delegation: 너무 광범위한 이벤트는 성능이 좋지 못하다.
// 10. Switch: default는 필요하면 사용하자. 스위치 문 안에서도 반복되는 것은 줄이자.
// 11. Function naming: 함수의 이름은 계약 또는 문서화 -> 정확하게 함수가 무엇을 하는지!
//     또한 함수는 하나의 기능만 수행해야 한다.
// 12. Function parameter: 함수의 인자(파라미터)는 필요한 것만 받고 인자 또한 의미가 있는 이름을 사용하자.
// 13. HTML vs Javascript: HTML에는 단순히 UI적인 요소만 남겨두고, 버튼이 클릭되는 등 비즈니스 로직은 js에서 처리하는 것이 좋다.
//     js도 동적으로 움직이는 것을 담당하고, 전체적인 웹 사이트의 골격을 담당하는 것은 HTML에서 작성하는 것이 좋다.