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

for (let i = 0; i < pronoun.length; i++) 
{
    
    for (let j = 0; j < adj.length; j++) 
    {
        for (let k = 0; k < noun.length; k++) 
        {
            com = pronoun[i] + adj[j] + noun[k];
            console.log(com);
        }
    }
}