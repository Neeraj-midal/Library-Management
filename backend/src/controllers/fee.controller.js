import { prisma } from "../config/db.js";

export const getFees= async (req,es)=>{
    const fees = await prisma.fees.findMany({
        include:{user:true},
    });
    res.json(fees);
}