
import Question from '../models/question-schema.js';
export const addQuestion=  async (request, response)=>{
   const question = request.body;

    const newQuestion = new Question(question);
    try{
        await newQuestion.save();
        response.status(201).json(newQuestion);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

export const getQuestions=  async (request, response)=>{
  
    try{
       const questions= await Question.find({});
        response.status(200).json(questions);
    } catch (error){
        response.status(404).json({ message: error.message});     
    }
}
export const getQuestion= async (request, response) => {
   try{
       const question = await Question.findById( request.params.id);
       response.status(200).json(question);
   }catch( error ){
       response.status(404).json({ message: error.message })
   }
}

export const editQuestion= async (request, response) => {
   let question = request.body;

   const editQuestion = new Question(question);
   try{
       await Question.updateOne({_id: request.params.id}, editQuestion );
       response.status(201).json(editQuestion);
   } catch (error){
       response.status(409).json({ message: error.message});     
   }
}

export const deleteQuestion = async (request, response) => {
   try{
       await Question.deleteOne({_id: request.params.id});
       response.status(201).json("User deleted Successfully");
   } catch (error){
       response.status(409).json({ message: error.message});     
   }
}


