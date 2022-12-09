class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }

  addTitle() {
    var title_card = document.createElement('h1');
    title_card.setAttribute('id', 'blog-title');
    console.log(title_card);
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;
  }

  addDescription() {}
}

// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`
var popupContact = document.getElementById('popupContact');
var editButton = document.getElementById('edit');
var deleteButton = document.getElementById('delete');

function helperAddPost() {
  popupContact.style.display = 'inherit';
}

function helperPost() {
  popupContact.style.display = 'none';

  document.getElementById('blog-title').innerText =
    document.getElementById('title').value;
  document.getElementById('blog-description').innerText =
    document.getElementById('detail').value;
    document.querySelector('.card-buttons').style.display = 'inherit';
}

// This is my code (Not related to the module)
document.getElementById('close').onclick = () => {
  popupContact.style.display = 'none';
};

// editButton.onclick = () => {
//   if()
// }