function calculator(strings) { 
  let negativeChecker = (/(\-)(?=(\d))/g).test(strings);
  if (negativeChecker) {
      let negativeNumber = strings.match(/(\-)(?=(\d))/g);
      let negnumstore = []
      for(let i =0;i < strings.length; i++){
          if( strings[i] == '-' && !isNaN(strings[i + 1])  ) {
              negnumstore.push(`${strings[i]}${strings[i + 1]}`);
          }
      }
      return `negative numbers ${negnumstore} not allowed`;
  }

  let split_values = strings.split(/\D/);
  let add = 0;
  for (let i = 0; i < split_values.length; i++) {
      if (split_values[i] != "" & split_values[i] < 1000) {
          add += parseInt(split_values[i]);
      }
  }
  return add;
}

console.log(calculator("5235234233,-4 , //, 6564, -54"))