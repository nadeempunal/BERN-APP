import Web3 from "web3";
//import ABI from './ABI.json';
const Wallet =()=>
{
    const connectWallet = async()=>{

          //console.log(Web3);
          console.log("hello");
       try{
            if(window.ethereum)
            {
                const web3 = new Web3(window.ethereum);
                const accounts = await window.ethereum.request(
                    {
                        method: "eth_requestAccounts"
                    }
                )
               
                // const contractAddress = "0x6bcfadb8624ec1e687430e8919f08f78c370c83f";
                // const contract = new web3.eth.Contract(ABI, contractAddress);

                console.log(web3, accounts)
            }
            else
            {
                throw new Error 
            }



        }catch(error)
        {
            console.error(error);
        }
    }
    return <><button onClick={connectWallet}>Connect Wallet</button></>
}
export default Wallet; 

/*

 // const connectWallet = async()=>{
     //   console.log(Web3);
      //  try{
            // if(window.ethereum)
            // {
            //     const web3 = new Web3(window.ethereum);
            //     const accounts = await window.ethereum.request(
            //         {
            //             method: "eth_requestAccounts"
            //         }
            //     )
               
            //     // const contractAddress = "0x6bcfadb8624ec1e687430e8919f08f78c370c83f";
            //     // const contract = new web3.eth.Contract(ABI, contractAddress);

            //     console.log(web3, accounts)
            // }
            // else
            // {
            //     throw new Error 
            // }



        // }catch(error)
        // {
        //     console.error(error);
        // }
    //}
    return <><h1>Hello</h1></>
    // return <><button onClick={connectWallet}> Connect Button</button></>


*/