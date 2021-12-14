const donor = prompt("Enter donator's blood type: ");
const recipient = prompt("Enter recipient's blood type: ");

if(donor===recipient){
    console.log("True");
}else if(donor==="A+" && recipient==="AB+"){
    console.log("True");
}else if(donor==="B+" && recipient==="AB+"){
    console.log("True");
}else if(donor==="O+" && recipient==="AB+" || recipient==="A+" || recipient==="B+"){
    console.log("True");
}else if(donor==="A-" && recipient==="AB-" || recipient==="A+" || recipient==="AB+"){
    console.log("True");
}else if(donor==="B-" && recipient==="AB-" || recipient==="B+" || recipient==="AB+"){
    console.log("True");
}else if(donor==="O-"){
    console.log("True");
}else if(donor==="AB-" && recipient==="AB+"){
    console.log("True");
}else{
    console.log("False");
}