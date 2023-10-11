


const express = require("express");
const ABI = require("./ABI.json");
const {Web3} = require("web3");

const app = express();

const web3 = new Web3("https://alien-snowy-hill.ethereum-sepolia.quiknode.pro/c45dac6456ee1814e109133bdd600647000d5d5d/");

const contractAddress = "0x6bcfadb8624ec1e687430e8919f08f78c370c83f";
const contract = new web3.eth.Contract(ABI, contractAddress);

// console.log(contract);

const viewTask = async()=>{
    const task = await contract.methods.viewTask(1).call();
    console.log(task);
}

app.get("/api/ethereum/view-task/:taskId", async(req, res)=>{
    try{
        const {taskId} = req.params;
        const task = await contract.methods.viewTask(taskId).call();
        const {id, name, date} = task;
        numId = Number(id);
        const taskObj = {
            numId, name, date
        }
        res.status(200).json({status:200,taskObj,message:"Task Exist"});
    }catch(error)
    {
        res.status(500).json({status:500, message:"Task Does not Exist"});   
    }
      
})
/// viewTask();
app.post("/api/ethereum/create-task", async(req, res)=>{
    await contract.methods.createTask("Block1", "12/01/2022").send({from: "0x6FE8b006Cd836BC084aa5dd6013fb4aFCA5FBe0C"});
})
app.get("/api/ethereum/view-all-tasks/", async(req, res)=>{
    try
    {
        const tasks = await contract.methods.allTask().call();
        if(tasks.length < 0){
            res.status(400).json({status:404, message: "Task list Does not exists"})
        }else
        {
            const taskList = tasks.map(({id, name, date})=>{
                const numId = Number(id);
                return {numId, name, date}
            })
            res.status(200).json({status:200, taskList, message:"Tasks exists"})
            console.log("tasks found")
        }
    }catch(error)
    {
       console.error(error);
    }
})

const PORT = 5500;
app.listen(PORT, ()=>{
        console.log(`APP is running on the PORT: ${PORT}`)
})