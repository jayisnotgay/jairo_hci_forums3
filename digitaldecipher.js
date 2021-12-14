function decipher(message, key){
    let alphabet = ["a","b","c","d","e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let message = [20, 12, 18, 30, 21]
    let key = [1, 9, 3, 9]
    for(let i = 0; i < message.length; i++){
        if(i<4){
            console.log(alphabet[message[i]-key[i]-1]);
        }
        else if(i>3 && i<7){
            console.log(alphabet[message[i]-key[i-4]-1]);
        }
    }