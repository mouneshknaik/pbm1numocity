const db=require('../server/config').pool;
const queryList=require('../server/query');
module.exports = {
    read:async (res)=>{
        let result=await callMysql(queryList.read);
        console.log(result);
        res.json(result);
    },
    update:async (obj,res)=>{
        let result=await callMysql(queryList.update,[obj,obj.id]);
        console.log(result);
        res.json(result);
    },
    delete:async (obj,res)=>{
        let result=await callMysql(queryList.delete,[obj.id]);
        console.log(result);
        res.json(result);
    },
    insert:async (obj,res)=>{
        console.log(obj);
        let result=await callMysql(queryList.insert,[obj]);
        console.log(result);
        res.json(result);
    }
}
function callMysql(query,parameters){
    return new Promise((resolve,rejects)=>{
        db.getConnection(function(err, conn){
            conn.query(query,parameters, function(err, rows) {
                if(err){
                    rejects(err);
                }
                resolve(rows);
            })
        })
    });

}