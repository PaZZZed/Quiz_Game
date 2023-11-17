/** Mix the contents of an array and return the first ten elements*/
function shuffle(array) {
    let counter = array.length;
    // While there are elements in the array
    while (0 < counter) {
        // Pick a random index
        let randomIndex = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}
