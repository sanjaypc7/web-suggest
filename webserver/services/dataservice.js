//import db

const db=require('./db')

//get all details from db

const getweb=()=>{
   return db.Links.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    links:result
                }
                
            }
            else{
                return{
                    status:false,
                    statusCode:401,
                    message:'product not found'
                }
            }
        }
    )
}

const create=(name,url,category,type) =>{
    return db.Links.findOne({url}).then(
        web=>{
            if(web){
                return{
                    status:false,
                    statusCode:401,
                    message:'url already exist'
                }
            }
            else{
                const newSite= new db.Links({
                    name:name,
                    url:url,
                    category:category,
                    type:type
                })
                newSite.save()
                return{
                    status:true,
                    statusCode:200,
                    message:'Site added successfuly'
                }
            }
        }
    )
}
module.exports={
    getweb,
    create
}