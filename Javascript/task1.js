/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nfts = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,eyeColor,shirtType,bling) {
    nfts.push({name,eyeColor,shirtType,bling})
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    let count = 1;
    for (let nft of nfts){ 
        let {name,eyeColor,shirtType,bling} = nft;
        console.log("Id".padEnd(12," "),count.toString().padStart(24," "))
        count++
        console.log("Name".padEnd(12," "),name.padStart(24," "))
        console.log("Eye Color".padEnd(12," "),eyeColor.padStart(24," "))
        console.log("Shirt Type".padEnd(12," "),shirtType.padStart(24," "))
        console.log("Bling".padEnd(12," "),bling.padStart(24," "))
        console.log("".padEnd(37,"-"))
    }


}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(nfts.length)
}

// call your functions below this line

mintNFT("Bob","Brown","Hoodie","Gold Chain")
mintNFT("Alice","Brown","Hoodie","Gold Chain")
listNFTs()
getTotalSupply()
