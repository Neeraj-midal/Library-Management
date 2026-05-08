export const authorize =(...roles)=>{
    return(req,res,next)=>{
        if(!roles.includes(req.user.role)){
            returnres.status(403).json({message:"access denied"});

        }
        next();
    };
};