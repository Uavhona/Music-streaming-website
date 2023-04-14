// JavaScript code for search panel
const searchInput = document.getElementById('search-input');
const list = document.getElementById('list');
const listItems = list.getElementsByTagName('li');

searchInput.addEventListener('input', function() {
  const searchQuery = this.value.toLowerCase();

  Array.from(listItems).forEach(function(item) {
    const itemName = item.innerText.toLowerCase();

    if (itemName.includes(searchQuery)) {
      item.style.display = 'block';
    } else {
      item.style.display = "none";
    }
  });
});
