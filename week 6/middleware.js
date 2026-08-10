const express = require('express');
const app = express();
const PORT = 3004;
app.use(express.json());
app.use((req, res, next) => {
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] ${req.method} request to ${req.url}`);
    next();
});
app.use((req, res, next) => {
    const userAgent=req.get('User-Agent');
    if(!userAgent){
        return res.status(400).json({error:'User-Agent header is missing'});
    }
    next();
});
let tasks=[
    {id:1,title:'Learn Express'},
    {id:2,title:'Master REST APIs'}
];
app.get('/tasks',(req,res)=>{
    res.json(tasks);
});
app.post('/tasks',(req,res)=>{
    const newTask={
        id:req.body.id!=null?req.body.id:tasks.length+1,
        title:req.body.title
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});
app.put('/tasks/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const task=tasks.find(t=>t.id===id);
    if(task){
        task.title=req.body.title;
        res.json({message:'Task updated Successfully',task});
    }else{
        res.status(404).json({error:'Task not found'});
    }
});
app.delete('/tasks/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    tasks=tasks.filter(t=>t.id!==id);
    res.json({
        message:`Task ${id} deleted,remainingTasks:tasks`
    });
});
app.listen(PORT,()=>{
    console.log('----------------------------------------------');
    console.log(`REST API with logging running at http://localhost:${PORT}`);
    console.log('Listening for requests and logging them...');
    console.log('-----------------------------------------------');
});