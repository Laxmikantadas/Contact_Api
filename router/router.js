const {Router}=require('express')
const cnt_schema=require('../schema/schema.js')
const router=Router()

router.get('/addContact',async(req,res)=>{
    res.render('contact_App/addContact',{title:'Add_Contact'})
})
router.post('/addContact',async(req,res)=>{
    // console.log(req.body);
    
await cnt_schema.create(req.body)
 res.redirect('/home',302,{})
})
router.get('/allContact',async (req,res)=>{
    let payload=await cnt_schema.find({}).lean() // using lean it convert document to nor
    res.render('contact_App/cnt_list',{title:'All_Conatct',payload})
})
router.get("/:id",async(req,res)=>{
    let payload=await cnt_schema.findOne({_id:req.params.id}).lean()
    res.render("contact_App/single_cnt",{title:'Single_contact',payload})
})

router.get("/edit/:id",async(req,res)=>{
    let editData=await cnt_schema.findOne({_id:req.params.id}).lean()
    res.render('contact_App/edit',{title:"edit_contact",editData})
})

router.post("/edit/:id",async(req,res)=>{
   let editData=await cnt_schema.findOne({_id:req.params.id})
   editData.fname=req.body.fname,
   editData.lname=req.body.lname,
   editData.nmbr=req.body.nmbr,
   editData.loc=req.body.loc
   await editData.save()
   res.redirect('/api/allContact',302,{})

})
router.get('/delete/:id',async (req,res)=>{
 await cnt_schema.deleteOne({_id:req.params.id})  
   res.redirect('/api/allContact',302,{})
})
module.exports=router