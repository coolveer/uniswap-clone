export const transactionSchema ={
    name:'transactions',
    title:'Transections',
    type:'document',
    fields:[
        {
            name:"txHash",
            title:"Transection hash",
            type:"string"
        },
        {
            name:"fromAddress",
            title:"from ( Wallet Address )",
            type:"string"
        },
        {
            name:"toAddress",
            title:"To ( Wallet Address )",
            type:"number"
        },
        {
            name:"timestamp",
            title:"timestamp",
            type:"datetime"
        }
    ]
}