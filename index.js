function generate(current, len, chars) {
  if (current.length == len)
    console.log(current);
    if(current === 'hello'){
      console.log('hello')
    }
  if (current.length < len){
    for (let i in chars) {
      generate(current + chars[i], len, chars) 
    }
  }
}

function brutForce(chars, max){
  for (var l = 0; l <= max; ++l){
    generate("", l, chars);
  }
}
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
brutForce(Array.from(chars), 3);

