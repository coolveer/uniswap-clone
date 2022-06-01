export const userSchema ={
    name:'users',
    title:'Users',
    type:'document',
    fields:[
        {
            name:"address",
            title:"Wallet address",
            type:"string"
        },
        {
            name:"userName",
            title:"User Name",
            type:"string"
        },
        {
            name:"transactions",
            title:"Transections",
            type:"array",
            of:[
                {
                    type:'reference',
                    to:[{
                        type:"transactions"
                    }]
                }
            ]

        }
    ]
}