function Journal(inputString) {
  this.entry = inputString;
}

Journal.prototype.countWords = function() {
  var stringArray = this.entry.split(" ");
  return stringArray.length;
};

Journal.prototype.countVowels = function() {
  var vowelCount = 0;
  var vowelList = "aeiouAEIOU";
  for(var i = 0; i <= this.entry.length - 1; i++) {
    if (vowelList.indexOf(this.entry[i]) !== -1) {
      vowelCount++;
    }
  }
  return vowelCount;
};

Journal.prototype.countConsonants = function() {
  var conList = 'bcdfghjklmnpqrstvxzwyBCDFGHJKLMNPQRSTVWXYZ';
  var count = 0;

  for(var i = 0; i <= this.entry.length - 1; i++) {
    if (conList.indexOf(this.entry[i]) !== -1) {
      count++;
    }
  }
  return count;
};

Journal.prototype.getTeaser = function() {
  var stringArray = this.entry.split(" ");
  var teaserArray = [];
  for (var i = 0; i < 8; i++){
    teaserArray.push(stringArray[i]);
  }
  return teaserArray.join(" ");
};

exports.journalModule = Journal;
