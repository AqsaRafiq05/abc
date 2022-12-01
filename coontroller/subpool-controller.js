
import SubPool from '../models/subpool-schema.js';
export const addSubPool=  async (request, response)=>{
   const subpool = request.body;
    
    const newSubPool = new SubPool(subpool);
    try{
        await newPool.save();
        response.status(201).json(newSubPool);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

export const getSubPools=  async (request, response)=>{
  
     try{
        const subpools= await SubPool.find({});
         response.status(200).json(subpools);
     } catch (error){
         response.status(404).json({ message: error.message});     
     }
 }
 export const getSubPool= async (request, response) => {
    try{
        const subpool = await SubPool.findById( request.params.id);
        response.status(200).json(subpool);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

export const editSubPool= async (request, response) => {
    let subpool = request.body;

    const editSubPool = new SubPool(subpool);
    try{
        await SubPool.updateOne({_id: request.params.id}, editSubPool );
        response.status(201).json(editSubPool);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

export const deleteSubPool = async (request, response) => {
    try{
        await SubPool.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
