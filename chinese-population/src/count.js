import totalData from './Eng-Density';
let count = 0;
let proArray = Object.keys(totalData);
for (let i = 0;i < proArray.length;i++) {
    let cityArr = Object.keys(proArray[i]);
    count += cityArr.length;
}

count += proArray.length;
console.log(count);