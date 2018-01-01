var a = require('./mod').a;

function add() {
    a++;
    console.log(a);
}

exports.add = add;