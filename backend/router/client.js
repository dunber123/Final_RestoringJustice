const express = require('express')
const router = express.Router()
const Client = require('../models/client')

// Getting All //
router.get('/', async (req, res) => {
    try {
        const clients = await Client.find()
        res.json(clients)
    } catch (err) {
        res.status(500).json({message: err.message })
    }
})


// get one //

router.get('/:id', getClient, async (req, res) => {
    res.send(res.client)
  })
  
// Create One //

router.post('/', async (req, res) => {
    const client = new Client(req.body)

    try {
        const updatedClient = await client.save()
        res.json(updatedClient)
    } catch (err) {
        res.status(400).json({message: err.message}) }
})


// Updating One //

router.patch('/:id', getClient, async (req, res) => {
    try {
        Object.assign(res.client, req.body)
        const updatedClient = await res.client.save()
        res.json(updatedClient)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})



// Deleting One
router.delete('/:id', getClient, async (req, res) => {
    try {
     await res.client.remove()
     res.json({message: 'Deleted Client'})
 
    } catch (err) {
        res.status(500).json({message: err.message})
 
    }
 
 
 })
//Fetches client data by Case Manager
//Note, this is in table format
router.get('client/:caseManager', getClient, async (req, res, next) => {
    try {
         clientModel.aggregate([
        { $match: {caseManager: req.params.caseManager}},
        { $project: {_id: 1, clientNumber: 1, caseManager: 1, startDate: 1}}])
    

    } catch (err) {
        return res.status(404).json({message: 'Cannot Find Client'})
    }
})

router.get('/casm/:caseManager', (req, res, next) =>{ 
    clientModel.find({}, {firstName : true, lastName : true}, (error, data) =>{
    if(error) {
        return next(error)
    } else {
        res.json(data);
    }});
});
  
  
  
/// router.get('/:id', getClient, async (req, res) => {
    // res.send(res.client)
  // })


async function getClient(req, res, next) {
    let client
    try {
        client = await Client.findOne({ caseNumber: req.params.id })
        if (client == null) {
            return res.status(404).json({message: 'Cannot Find Client'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})

    }
    res.client = client
    next()
}


module.exports = router