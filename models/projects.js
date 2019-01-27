var mongoose = require('mongoose');
ProjectListSchema = new mongoose.Schema({
    projtitle: String,
    projcost: Number,
    projowner: String,
    projarea: String
}, {collection: 'projects'});

module.exports = mongoose.model('projectlist', ProjectListSchema);
