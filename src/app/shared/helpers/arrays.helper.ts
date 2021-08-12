export const sumValuesArray = (list: any[], key: string) => list.reduce((a, b) => a + (b[key] || 0), 0);


export const compare = (a, b) => {
    if (a.last_nom < b.last_nom) {
        return -1;
    }
    if (a.last_nom > b.last_nom) {
        return 1;
    }
    return 0;
}

    

// console.log(traveler.sum('Amount'));