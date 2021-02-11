/******************************************************************* 
 Project: The Domain Name Generator  
 Name: Kendall Mendez
 
 ********************************************************************/

/************ Domain Name Generator - .com  ****************/
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let com = "";

// Print all the combinations
console.log("These are all the .com combinations:");

for (let i = 0; i < pronoun.length; i++) {

    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            com = pronoun[i] + adj[j] + noun[k] + ".com";
            console.log(com);
        }
    }
}

/************ Adding more domains - .com, .us, .net  ****************/
console.log("");
let domain = [".com", ".us", ".net"];

// Adding more domains - .com, .us, .net
console.log("Adding more domains - .com, .us, .net:");

for (let a = 0; a < domain.length; a++) {
    for (let i = 0; i < pronoun.length; i++) {

        for (let j = 0; j < adj.length; j++) {
            for (let k = 0; k < noun.length; k++) {
                com = pronoun[i] + adj[j] + noun[k] + domain[a];
                console.log(com);
            }
        }
    }
}

