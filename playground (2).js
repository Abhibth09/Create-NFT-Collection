/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
let nftCollection = [];

function mintNFT(name, college, laptop) {
    const nft = {
        name: name,
        college: college,
        laptop: laptop
    };
    nftCollection.push(nft);
}

function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log(`Name: ${nftCollection[i].name}`);
        console.log(`College: ${nftCollection[i].college}`);
        console.log(`Laptop: ${nftCollection[i].laptop}`);
        console.log('---');
    }
}

function getTotalSupply() {
    return nftCollection.length;
}
mintNFT("Abhishek", "Chandigarh University", "ASUS TUF GAMING");
mintNFT("Khushi", "CU", "ASUS Vivobook");

console.log("Listing all NFTs:");
listNFTs();

console.log(`Total supply of NFTs: ${getTotalSupply()}`);
