const annotations = require('..models/annotationData');

module.exports = {
    async read(request,response){
        const annotationsList = await annotations.find();

        return response.json({annotationsList})

    },
    

    async creat(request,response){
        const {title,notes,priority} = request.body;

        if (!title || !notes){
            return response.status(400).json({Error: "Necessario um titulo ou uma anotação!"})
        }

        const annotationsCreated = await annotations.created({
            title,
            notes,
            priority
        })

        return response.json({annotationsCreated});
    },

    async delete(request,response){
        const {id} = request.params;

        const annotationDeleted = await annotations.findOneAndDelete({ _id : id});

        if (annotationDeleted){
            return response.json({annotationDeleted});
        }

        return response.status(401).json({Error:"Não foi encontrado o registro a ser deletado!"})
    },

}