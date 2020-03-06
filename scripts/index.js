$(() => {
  BOOKMARKS.bindEventListeners();
  API.getAllBookmarks()
    .then(allBookmarks => {
      allBookmarks.forEach(bookmark => STORE.add(bookmark));
      BOOKMARKS.render();
    })
    .catch(error => $('#js-error-message').text(`Something went wrong: ${error.message}`));
});