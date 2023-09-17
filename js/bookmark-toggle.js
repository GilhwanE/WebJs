(function () {
  const bookmarkOpen = document.getElementById('bookmark-open');
  const bookmarkClose = document.getElementById('bookmark-close');
  const bookmarkBar = document.getElementById('bookmark-bar');
  const bookmarkOpenBtn = document.getElementById('bookmark-open-btn');
  const bookmarkCloseBtn = document.getElementById('bookmark-close-btn');

  // localStorage 기능
  const isBookmarkBarOpen = localStorage.getItem('isBookmarkBarOpen');
  if (isBookmarkBarOpen === 'close') {
    // close상태라면 ,
    bookmarkOpen.style.display = 'none'; // Open 디스플레이 none
    bookmarkClose.style.display = 'flex'; // close 버튼을 보여줘
    bookmarkBar.style.display = 'none';
  } else {
    bookmarkOpen.style.display = 'flex';
    bookmarkClose.style.display = 'none';
    bookmarkBar.style.display = 'block';
  }

  // toggle 기능
  const bookmarkBarToggle = () => {
    const isBookmarkBarOpen = localStorage.getItem('isBookmarkBarOpen');
    if (isBookmarkBarOpen === 'close') {
      localStorage.setItem('isBookmarkBarOpen', 'open');
      bookmarkOpen.style.display = 'flex';
      bookmarkClose.style.display = 'none';
      bookmarkBar.style.display = 'block';
    } else {
      localStorage.setItem('isBookmarkBarOpen', 'close');
      bookmarkOpen.style.display = 'none';
      bookmarkClose.style.display = 'flex';
      bookmarkBar.style.display = 'none';
    }
  };

  bookmarkOpenBtn.addEventListener('click', bookmarkBarToggle);
  bookmarkCloseBtn.addEventListener('click', bookmarkBarToggle);
})();
