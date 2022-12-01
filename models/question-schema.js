import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const questionSchema = mongoose.Schema({
    
    writequestion: String,
    option1: String,
   option2: String,
   option3: String,

});

autoIncrement.initialize(mongoose.connection);
questionSchema.plugin(autoIncrement.plugin, 'question');
// we need to turn it into a model
const Question = mongoose.model('question', questionSchema);

export default Question;