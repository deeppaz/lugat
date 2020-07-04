import lugat from './data/lugat.json';

function filterLugat(searchText) {
    if (lugat.hasOwnProperty(searchText.toUpperCase())) {
        return lugat[searchText.toLowerCase()];
    }
    return "Böyle bir kelime bulunamadı!";
}

export default filterLugat;
