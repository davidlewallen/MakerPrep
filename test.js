function dec2bin(decimal) {
  // var binary = "";
  //
  // for(var i = bit -1; i >= 0; i++) {
  //   var binDec = Math.pow(2, i)
  //
  //   if(binDec <= decimal) {
  //     decimal = decimal - binDec;
  //     binary += "1";
  //   } else {
  //     binary += "0";
  //   }
  // }
  // return binary;


}

function ipToInt32(ip){
  var ipArray = ip.split(".");

  var ipToBinary = function(input) {
    var results = "";
    for(var i = 7; i >= 0; i--) {
      if(input >= Math.pow(2, i)) {
        results += "1";
        input = input - Math.pow(2,i);
      } else {
        results += "0";
      };
    };
    return results;
  }


  var results = ipArray.map(function(ipOctet) {
      return ipToBinary(ipOctet);
  }).join("");

}

128 64 32 16 8 4 2 1
