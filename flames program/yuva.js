const form = document.querySelector('form')
const name1 = document.querySelector('name1:')
const name2 = document.querySelector('name2:')
form.addEventListiner('submit',)

function validateInputs(){
    const name1 = name1.value.trim();
    const name2 = name2.value.trim();
}
function name1(){
    let name1 = prompt("Enter your name1:").toLowerCase();
    name1 = name1.replace(/ /g, "");
}
function name2(){
    let name2 = prompt("Enter your name2:").toLowerCase();
    name2 = name2.replace(/ /g, "");
}
button-submit
    
    for (let i of name1) {
        for (let j of name2) {
            if (i === j) {
                name1 = name1.replace(i, "");
                name2 = name2.replace(j, "");
                break;
            }
        }
    }
    
    let count = name1.length + name2.length;
    console.log(count);
    
    if (count > 0) {
        let flames = ["friends", "lovers", "affections", "marriage", "enemies", "siblings"];
        while (flames.length > 1) {
            let c = count % flames.length;
            let s_index = c - 1;
            if (s_index >= 0) {
                let left = flames.slice(0, s_index);
                let right = flames.slice(s_index + 1);
                flames = right.concat(left);
            } else {
                flames = flames.slice(0, flames.length - 1);
            }
        }
        console.log("Relationship is:", flames[0]);
    } else {
        console.log("Enter another name.");
    }

