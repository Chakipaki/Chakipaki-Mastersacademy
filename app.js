const pandemicStartMap = "01000000X000X011X0X";
const arr = pandemicStartMap.split('');

const red = (rel) => {
    let newEl = document.createElement('div');
    newEl.className = 'red';
    document.querySelector(rel).appendChild(newEl);
}
const green = (rel) => {
    let newEl = document.createElement('div');
    newEl.className = 'green';
    document.querySelector(rel).appendChild(newEl);
}

const ocean = (rel) => {
    let newEl = document.createElement('div');
    newEl.className = 'ocean';
    document.querySelector(rel).appendChild(newEl);
}

let amountBefore = 0;
let amountAfter = 0;
let total = 0;

function pandemicStart(arr) {
    for (let i = 0; i < arr.length; i++) {
        switch(+arr[i]) {
            case 0 : 
                green('.default');
                total++;
                break;
            case 1 :
                red('.default');
                amountBefore++;
                total++;
                break;
            default:
                ocean('.default');
        }
    }
    console.log(amountBefore,total);
}

pandemicStart(arr);

let arr2 = pandemicStartMap.split('X');
arr2 = arr2.filter(function(entry) { return entry.trim() != ''; });

function pandemicEnd(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('1')) {
            for(let x = 0; x < arr[i].length; x++) {
                red('.ends');
                amountAfter++;
            }
            ocean('.ends');
        } else {
            for(let x = 0; x < arr[i].length; x++) {
                green('.ends');
            }
            ocean('.ends');
        }
    }
    console.log(amountAfter);
}
pandemicEnd(arr2);


let tot  = document.createElement('h1');
tot.innerText = `Total : ${total}`;
document.querySelector('body').appendChild(tot);

let inf = document.createElement('h1');
inf.innerText = `Infected : ${amountAfter}`;
document.querySelector('body').appendChild(inf);

let per = document.createElement('h1');
per.innerText = `Percentage : ${amountAfter / total * 100}`;
document.querySelector('body').appendChild(per);