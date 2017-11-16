var mongoose = require('mongoose');
var MemeSchema = new mongoose.Schema({
  id: {type:Number, default: 0},
  image: String,
});
mongoose.model('Meme', MemeSchema);
