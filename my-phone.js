// // Calling search field
const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showSearchResult(data.data));
}
// const showSearchResult = data => {
// const searchResult = document.getElementById('search-result');
// data.forEach(data => {
//     console.log(data);
//     const div = document.createElement('div');
//     div.classList.add('col');
//     div.innerHTML = `
//     <div class="card">
//         <img src="${data.image}" class="card-img-top" alt="">
//         <div class="card-body">
//             <h3 class="card-brand">${data.brand}</h3>
//             <h5 class="card-title">${data.phone_name}</h5>
//             <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         </div>
//   </div>`
//   searchResult.appendChild(div);
// });

// }