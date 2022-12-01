import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const quizSchema = mongoose.Schema({
    name: String,
    ownername: String,
    description: String
    

});

autoIncrement.initialize(mongoose.connection);
quizSchema.plugin(autoIncrement.plugin, 'quiz');
// we need to turn it into a model
const Quiz = mongoose.model('quiz', quizSchema);

export default Quiz;