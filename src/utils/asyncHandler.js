// try catch or promise.then and catch

const asynhandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asynhandler}

//------------------------------------------------------
// const asynchHandler=(fn)=> async (req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code||500).json({
//             success:false,
//             message:err.message
//         })
//     }


// }