const newbookmarkForm = document.getElementById('bookmark-item-input');
const AddBtnbookmark = document.getElementById('bookmark-item-add-btn');
const bookmarkItemList = document.getElementById('bookmrk-list');
let bookmarklist = [];

if (localStorage.getItem('bookmarklist')) {
  bookmarklist = JSON.parse(localStorage.getItem('bookmarklist'));
} else {
  localStorage.setItem('bookmarklist', JSON.stringify(bookmarklist)); // 현재 저장되어 있는 bookmarklist 넣기
}

// 북마크 추가 기능
const addBookmarkItem = () => {
  let bookmarklist = [];
  if (localStorage.getItem('bookmarklist')) {
    bookmarklist = JSON.parse(localStorage.getItem('bookmarklist'));
  }
  let name = document.getElementById('new-bookmark-name-input').value;
  let url = document.getElementById('new-bookmark-url-input').value;
  let createAt = Date.now();
  bookmarklist.push({ name: name, url: url, createAt: createAt });

  localStorage.setItem('bookmarklist', JSON.stringify(bookmarklist));
  name.value = '';
  url.value = '';
  setBookmarkItem({ name: name, url: url, createAt: createAt });
  AddBtnBookmark();
};

// 북마크 추가 토글기능
const AddBtnBookmark = () => {
  const bookmarkInput = document.querySelector('.bookmark-input');
  if (bookmarkInput.classList.contains('on')) {
    bookmarkInput.classList.remove('on');
  } else {
    bookmarkInput.classList.add('on');
  }
};

// 북마크 리스트 보여주기
const setBookmarkItem = (item) => {
  const bookmarkItem = document.createElement('div');
  bookmarkItem.classList.add('bookmark-item');
  bookmarkItem.id = `bookmark-item-${item.createAt}`;

  const bookmarkInfo = document.createElement('div');
  bookmarkInfo.classList.add('bookmark-info');
  const bookmarkUrl = document.createElement('a');
  bookmarkUrl.classList.add('bookmark-url');

  const urlIcon = document.createElement('div');
  urlIcon.classList.add('url-icon');

  const urlIconImg = document.createElement('img');
  const nameElement = document.createElement('div');
};

const setBookmarkList = () => {
  bookmarklist.forEach((item) => {
    setBookmarkItem(item);
  });
};

AddBtnbookmark.addEventListener('click', AddBtnBookmark);
document.getElementById('add-btn').addEventListener('click', addBookmarkItem);
document.getElementById('cancel-btn').addEventListener('click', AddBtnBookmark);
setBookmarkList();
//
