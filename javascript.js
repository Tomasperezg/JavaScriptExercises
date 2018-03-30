// Making an calling fro UserNanme that will reference to the question
// Prompt means that is will show a small window asking for user input
var UserName = parseInt(prompt("Please enter a number: "));
var result = UserName;
for(var i=1;i < UserName;i++){
  result = i + result;
}
document.write(result);
