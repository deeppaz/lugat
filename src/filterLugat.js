import lugat from './data/lugat.json';

function filterLugat(searchText) {
    if (lugat.hasOwnProperty(searchText)) {
        return lugat[searchText];
    }
    return "Böyle bir kelime bulunamadı!";
}

export default filterLugat;
