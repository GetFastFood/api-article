const mongoose = require('../database/index'), Schema = mongoose.Schema;

const article_schema = new Schema({
    id: Schema.Types.ObjectId, 
    name: String,      
    description: String,
    price: Array,
    category: String,
    versionKey: false,
});

const article = mongoose.model("article", article_schema);

module.exports = article;