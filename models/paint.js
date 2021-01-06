const Paint = function (volume){
    this.volume = volume;

}



Paint.prototype.empty = function(){
    if (this.volume > 0) {this.volume = 0}
    return this.volume
}

module.exports = Paint