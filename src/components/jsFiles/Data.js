export const fakeData={
    labels:[
        "6/30/2024 - 7/6/2024",
        "7/7/2024 - 7/13/2024",
        " 7/21/2024 - 7/27/2024 "
    ],
    datasets:[
       {
        label : "orders",
        data:[1600,800,800],
        borderColor: "#FF9100"
       },
       {
        label :'sales',
        data :[1400,800,500],
        borderColor:"#96CEB4"
       }
    ]
}

export const fakePieData={
    labels:["WooCommerce Store", "Shopify Store"],
    datasets:[
        {
            labels:"Total",
            data:[55.8,44.2 ],
            backgroundColor:[
                "#FF8A8A", 
                "#41B3A2"
            ]
        }
    ]
}