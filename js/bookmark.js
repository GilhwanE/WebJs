(function () {
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
    let createAt = Date.now(); // 현재날짜
    bookmarklist.push({ name: name, url: url, createAt: createAt }); // 객체형태

    localStorage.setItem('bookmarklist', JSON.stringify(bookmarklist)); // setItem할때 배열이기 때문에 stringify
    document.getElementById('new-bookmark-name-input').value = '';
    document.getElementById('new-bookmark-url-input').value = '';
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

  const delBookmarkItem = (id) => {
    const isDelete = window.confirm('정말 삭제하시겠습니까?');
    if (isDelete) {
      let bookmarklist = JSON.parse(localStorage.getItem('bookmarklist'));
      let nowBookmarklist = bookmarklist.filter((elem) => elem.createAt !== id); // 조건을 충족하는 요소만 반환
      localStorage.setItem('bookmarklist', JSON.stringify(nowBookmarklist));
      document.getElementById(`bookmark-item-${id}`).remove();
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
    bookmarkUrl.href = item.url;

    const urlIcon = document.createElement('div');
    urlIcon.classList.add('url-icon');

    const urlIconImg = document.createElement('img');
    urlIconImg.src = `https://www.google.com/s2/favicons?domain_url=${item.url}`;

    const nameElement = document.createElement('div');
    nameElement.classList.add('name');
    nameElement.textContent = item.name;

    const bookmarkDelBtn = document.createElement('div');
    bookmarkDelBtn.textContent = '삭제';
    bookmarkDelBtn.classList.add('del-btn');
    bookmarkDelBtn.addEventListener('click', () => {
      delBookmarkItem(item.createAt);
    });

    bookmarkItem.appendChild(bookmarkInfo);
    bookmarkItem.appendChild(bookmarkDelBtn);
    bookmarkInfo.appendChild(bookmarkUrl);
    bookmarkUrl.appendChild(urlIcon);
    bookmarkUrl.appendChild(nameElement);
    urlIcon.append(urlIconImg);

    bookmarkItemList.appendChild(bookmarkItem);
  };

  const setBookmarkList = () => {
    bookmarklist.forEach((item) => {
      setBookmarkItem(item);
    });
  };

  AddBtnbookmark.addEventListener('click', AddBtnBookmark);
  document.getElementById('add-btn').addEventListener('click', addBookmarkItem);
  document
    .getElementById('cancel-btn')
    .addEventListener('click', AddBtnBookmark);
  setBookmarkList();
})();
