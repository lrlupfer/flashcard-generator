// constructor for 'cloze cards'
var ClozeCard = function(partial, cloze, full){
	this.clozeArray = [];
	this.partial = partial;
	this.cloze = cloze;
	this.full = full;
	this.addOne = function(p, c, f) {
    	this.clozeArray.push(new ClozeCard(p, c, f));
  };
}

module.exports = ClozeCard;