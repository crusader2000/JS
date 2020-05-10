const search = document.getElementById('search');
const matchList = document.getElementById('match-list');
let states;

//Get states
//FETCH API
const getStates = async() => {
    const res = await fetch('state_capitals.json');
    states = await res.json();

};
//Filter states
//Search the states.json and filter it
const searchStates = async searchText => {
    //Get matches to current text input
    //using regex
    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');

        return state.name.match(regex) || state.abbr.match(regex);
    });

    if (searchText.length === 0) {
        matches = [];
        matchList.innerHTML = '';
    }

    outputHTML(matches);
};

const outputHTML = matches => {
    if (matches.length > 0) {
        const html = matches.map(
            match => `<div class="card card-body"><h4> ${match.name}(${match.abbr }) <span class = "text-primary"> ${match.capital}</h4><small> Lat: ${match.lat }/ Long:${match.long}</small ></div>`).join('');

        matchList.innerHTML = html;
    }
}
window.addEventListener('DOMContentLoaded', getStates);
search.addEventListener('input', () => searchStates(search.value));