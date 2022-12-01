import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const poolSchema = mongoose.Schema({
    name: String,
    ownername: String,
    description: String,

});

autoIncrement.initialize(mongoose.connection);
poolSchema.plugin(autoIncrement.plugin, 'pool');
// we need to turn it into a model
const Pool = mongoose.model('pool', poolSchema);

export default Pool;