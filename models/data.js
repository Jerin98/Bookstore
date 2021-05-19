var mongoose = require('mongoose'); 


var bookSchema = new mongoose.Schema({    
    author:{    
        type:String    
    },    
    books:{    
        type:String    
    },
    counts:{
        type:String
    },
    sales:{
        type:String
    },
    ratings:{
        type:String
    }
    
});    
    
module.exports =  mongoose.model('books',bookSchema); 