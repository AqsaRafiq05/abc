
import Pool from '../models/pool-schema.js';
export const addPool=  async (request, response)=>{
   const pool = request.body;
    
    const newPool = new Pool(pool);
    try{
        await newPool.save();
        response.status(201).json(newPool);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

export const getPools=  async (request, response)=>{
  
     try{
        const pools= await Pool.find({});
         response.status(200).json(pools);
     } catch (error){
         response.status(404).json({ message: error.message});     
     }
 }
 export const getPool= async (request, response) => {
    try{
        const pool = await Pool.findById( request.params.id);
        response.status(200).json(pool);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

export const editPool= async (request, response) => {
    let pool = request.body;

    const editPool = new Pool(pool);
    try{
        await Pool.updateOne({_id: request.params.id}, editPool );
        response.status(201).json(editPool);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

export const deletePool = async (request, response) => {
    try{
        await Pool.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
