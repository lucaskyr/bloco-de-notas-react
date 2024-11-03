const annotations = require('../models/AnnotationData');

module.exports ={
    async read(request,response){
     const priority = request.query;

     const priorities = await annotations.find(priority);
    }
}
