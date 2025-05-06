const readline = require ('readline');
const { text } = require('stream/consumers');
const r1 =readline.createInterface({
    input : process.stdin,
    output: process.stdout
});



function caesar(str, shift) {
    str = str.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    const map ={}
    let result= "";
    //return alphabet.length;
    for (let i =0; i<alphabet.length; i ++){
        map[alphabet[i]]=i + shift;

        if (map[alphabet[i]]>25){
            map[alphabet[i]]-= 26;
        }
        if (map[alphabet[i]]>25){
            map[alphabet[i]]+= 26;
        }
    }

    for (let i = 0; i<str.length; i++){
        let chr= str[i]
        if (chr!== " "){
            result += alphabet[map[str[i]]];
        }
        else {
            result += " ";
        }
    }

    return result;

}

    //Input

r1.question("Enter the txt encrypt :", (text) =>{
r1.question("Enter the shift value :",(shift) =>{

        shift = parseInt(shift);
        const result =caesar(text,shift);

        console.log("Encrypted Text : ",result);
        r1.close();
    })
})


