const express=require('express');
const db=require('../server/config').pool;
const app=express();
const portNum=2000;
// app.use(express().json);
app.get('/energyInfo/:userId',async (req,res)=>{
    // console.log(req.params);
    let result=await callMysql();
    console.log(result);
    res.json(result);
})
app.listen(portNum,()=>{
    console.log('port Listning...! at '+portNum);
});

function callMysql(){
    return new Promise((resolve,rejects)=>{
        db.getConnection(function(err, conn){
            conn.query("select * from Info", function(err, rows) {
                if(err){
                    rejects(err);
                }
                resolve(rows);
            })
        })
    });

}