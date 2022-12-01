
import Quiz from '../models/addquiz-schema.js';
export const addQuiz=  async (request, response)=>{
   const quiz = request.body;
    
    const newQuiz= new Quiz(quiz);
    try{
        await newQuiz.save();
        response.status(201).json(newQuiz);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

export const getQuizzes=  async (request, response)=>{
  
     try{
        const quizzes= await Quiz.find({});
         response.status(200).json(quizzes);
     } catch (error){
         response.status(404).json({ message: error.message});     
     }
 }
 export const getQuiz= async (request, response) => {
    try{
        const quiz = await Quiz.findById( request.params.id);
        response.status(200).json(quiz);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

export const editQuiz= async (request, response) => {
    let quiz = request.body;

    const editQuiz = new Quiz(quiz);
    try{
        await Quiz.updateOne({_id: request.params.id}, editQuiz );
        response.status(201).json(editQuiz);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

export const deleteQuiz= async (request, response) => {
    try{
        await Quiz.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
