//we want to make api so that we can fetch facilities from hotel-model

import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

export default async function handler(req,res){
    await connectDB;
    if(req.method === "GET"){
        
        //to call only facilities
        const facilities = await Hotel.find({}).distinct('facilities.name');
        res.status(200).json({msg:"facilities", facilities});

    }

}