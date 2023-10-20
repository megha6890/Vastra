import React from "react";
import "./List.scss"
import Card from "../Card/Card"

const List=()=>{
    
        const data=[
            {
                id:1,
                img:"https://southindianactress.in/wp-content/uploads/2022/07/Samantha-Myntra-1.jpg",
                img2:"https://southindianactress.in/wp-content/uploads/2022/07/Samantha-Myntra-24.jpg",
                title:"Long Sleeve graphic Tshirt",
                isNew:true,
                oldPrice:19,
                price:12,
            },
            {
                id:2,
                img:"https://images.squarespace-cdn.com/content/v1/614366d114bef66af4bfc7d8/9526e327-ec5b-4f4a-997a-d551653d33d2/DSC_1806.JPG?format=750w",
                
                title:"Coat",
                isNew:true,
                oldPrice:19,
                price:12,
            },
            {
                id:3,
                img:"https://media-s3-us-east-1.ceros.com/cn-india/images/2020/12/18/8ccebdff5653074d894956545f1fa776/image.png",
                
                title:"Skirt",
                isNew:false,
                oldPrice:19,
                price:12,
            },
            {
                id:4,
                img:"https://www.bringitonline.in/uploads/2/2/4/5/22456530/fashion-photoshoot-in-delhi-bring-it-online_5.jpg",
               
                title:"Hat",
                isNew:false,
                oldPrice:19,
                price:12,
            },
            
        ];

    return(
        <div className="list">{data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))}
           
        </div>
    )
}
export default List