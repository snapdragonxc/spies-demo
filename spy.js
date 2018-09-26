let count = 0;
let method = ''

function report() {
  console.log(`Spy detected that \'${method}\' was called ${count} times.`);
}

function decorator(fn) {
  return function(){
    count += 1;
    var result = fn.apply(this, arguments);
    return result;
  };
}

function spy(obj, name) {
  method = name;
  obj[name] = decorator(obj[name]);
}

module.exports = { spy, report };
