const annotations = require('../models/annotationData')

module.exports ={
    async read(request,response){
     const priority = request.query;

     const priorities = await annotations.find(priority);
    },
    async update(request,response){
        const {id} = request.params;

        const annotation = await annotations.findOne({_id : id});

        if(annotation.priority){
            annotation.priority = false;
        }else{
            annotation.priority = true;
        
        }
        await annotation.save();

        return response.json(annotation);
    }
    
}
