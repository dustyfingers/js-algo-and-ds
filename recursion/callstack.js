function takeShower() {
    return "showering!";
}

function eatBreakfast() {
    let meal = cookFood();
    return `eating ${meal}`;
}

function cookFood() {
    let items = ["Oatmeal", "Eggs", "Protein Shake"];
    let randomNumber = Math.floor(Math.random() * items.length);
    return items[randomNumber];
}

function wakeUp() {
    console.log(takeShower());
    console.log(eatBreakfast());
    console.log('heading to work!');
}

wakeUp();