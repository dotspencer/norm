var bcrypt = require('bcrypt');
var hash = bcrypt.hashSync("", 11);

// console.log(hash);
// console.log("Length: " + hash.length);
console.log(bcrypt.compareSync("", "$2a$11$E.lyv./kiql1UQpXQF.RSuB947VGXnL4hmEibs4XYC8LuAGn27OCy"));
