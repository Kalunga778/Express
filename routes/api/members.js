const express=require('express')
const router=express.Router();
const uuid=require('uuid')
const members=require('../../Members')

// home page
router.get('/',(req,res)=>{
    res.json(members)
})

// get members based on ID
router.get('/:id',(req, res) =>{
const found=members.some(members=> members.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(members=> members.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: `no member with id of ${req.params.id}`})
    }

})

// create a member
router.post('/',(req, res) =>{
    const newMember={
        id:uuid.v4(),
        name:req.body.name,
        email:req.body.emai,
        status:'active',
    }

    if (!newMember.name || !newMember.email) {
        return res.status(400).json({msg:' please include a name and email'})
    } else {
        members.push(newMember)
    }
    res.json(members)
})

// update members //
router.put('/:id',(req, res) =>{
    const found=members.some(members=> members.id === parseInt(req.params.id));
    
        if (found) {
            const UpMember=req.body;
           members.forEach( member =>{
               if (member.id===parseInt(req.params.id)) {
                   member.Name === UpMember.name ? UpMember.name : members.name;
                   member.Name === UpMember.name ? UpMember.name : members.name;
                   res.json({msg:'Member updated',member})
               }
           }

           )
        } else {
            res.status(400).json({ msg: `no member with id of ${req.params.id}`})
        }
    
    })



// delete member
router.delete('/:id',(req,res) =>{
    const found=members.some(members=> members.id === parseInt(req.params.id));

    if (found) {
        res.json(
        {msg:'deleted member', 
          members: members.filter( member => member.id !==parseInt(req.params.id))
        })
    }
    else{
        res.status(400).json({msg:`No member with the id of ${req.params.id}`})
    }


})
module.exports=router;