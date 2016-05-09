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
  var oneOctet = ip.substring(0,3);
  var twoOctet = ip.substring(4,7);
  var threeOctet = ip.substring(8,10);
  var fourOctet = ip.substring(11);

  //Convert decimal to 8 bit binary
  //
  var binary = function(input) {
    var results = "";
    for(var i = 7; i >= 0; i--) {
      if(input <= Math.pow(2, i)) {
          results +=
      }
    }
    return results

}

function bin2dec(binary) {

  for(var i = binary.length - 1; i > 0; i++) {
    binary - Math.pow(2, i);
  }
}
