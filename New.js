"use strict"
///Առաջադրանք 1

/// text փոփոխականի մեջ գրված տեքստի յուրաքանչյուր նոր բառ թող սկսվի մեծատառով, և վերջակետից հետո բոլոր նոր նախադասությունները սկսվեն նոր տողից


{function Upper(item) {
    let revisedText = "";
    for (let i = 0; i < item.length; i++)
        if (i == 0) {
            revisedText += item[i].toUpperCase()
        }
        else if (item[i] == ".") {
          revisedText += ".\n"
        }
        else {
            revisedText += item[i]
        }
    return revisedText
};

let text1 = `lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus pageMaker including versions of lorem ipsum.`;
let textSplit = text1.split(" ");
let newUpper = textSplit.map(Upper)
let newText = newUpper.join(" ")
console.log(newText);}


///////// Առաջադրանք 2
///Տրված ցանկից գտնել նույն բաղադրիչները(տառերը) պարունակող բառերը(anagrams) և  խմբավորել

///Տարբերակ 1

{let text = ["angel", "thing", "inch", "parsley","brag", "robed", "dusty", "below", "cat", "cat", "glean", "peach", "night", "elbow", "brag", "act", "dusty", "elbow", "peach", "save", "cried", "cheap", "players", "thing", "grab", "cheap", "bored", "sadder", "vase", "arc", "cider", "dreads", "state", "car", "study", "taste", "peach", "chin"];

function Corrector(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
            arr.splice(arr.lastIndexOf(arr[i]), 1)
        }
    } return arr;
};
let correctedText = new Corrector(text)
if (correctedText.length < 30) {
    console.log("need to fill");
};
// console.log(correctedText);
let array =[];
for(let i = 0;i < correctedText.length;i++){
  array[i]= correctedText[i].split("")}
   for(let i = 0;i <array.length;i++){
    array[i].sort()
   };
   let joinedArray = []
   for(let i = 0; i< array.length;i++){
     joinedArray[i] =array[i].join("")
       };
       const result = new Map()
       for(let i = 0;i< joinedArray.length;i++){
          result.set(correctedText[joinedArray.indexOf(joinedArray[i])],correctedText[joinedArray.lastIndexOf(joinedArray[i])]);
       }
       console.log(result);}
  

       /////Տարբերակ 2

{function Split(elem) {
    let splited = elem.split("")
    return splited
};
function Sort(elem) {
    let sorted = elem.sort();
    return sorted
};
function Join(elem){
    let result = elem.join("")
    return result
};
let text = new Set(["angel", "thing", "inch", "parsley", "brag", "robed", "dusty", "below", "cat", "cat", "glean", "peach", "night", "elbow", "brag", "act", "dusty", "elbow", "peach", "save", "cried", "cheap", "players", "thing", "grab", "cheap", "bored", "sadder", "vase", "arc", "cider", "dreads", "state", "car", "study", "taste", "peach", "chin"]);
let revisedText = Array.from(text);
let splitedText = revisedText.map(Split);
let sortedText = splitedText.map(Sort);
let joined =sortedText.map(Join)
let result = new Map();
for (let i = 0;i < joined.length;i++){
    result.set(revisedText[joined.indexOf(joined[i])],revisedText[joined.lastIndexOf(joined[i])])
}
console.log(result);
}
