// constructor for 'basic cards'
var BasicCard = function(front, back){
	this.basicArray = [];
	this.front = front;
	this.back = back;
	this.addCard = function(f, b) {
    	this.basicArray.push(new BasicCard(f, b));
  };
}

module.exports = BasicCard;