import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const subpoolSchema = mongoose.Schema({
    name: String,
   
    description: String,

});

autoIncrement.initialize(mongoose.connection);
subpoolSchema.plugin(autoIncrement.plugin, 'subpool');
// we need to turn it into a model
const SubPool = mongoose.model('subpool', subpoolSchema);

export default SubPool;