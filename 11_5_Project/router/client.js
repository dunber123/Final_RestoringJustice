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


// Retrieve a client based on the case number
router.get('/:id', getClient, async (req, res) => {
    res.send(res.client)
  })
  
// This code works but the route is /client/manager/manager name
// How can I fix that to be only /manager?

router.get('/manager/:caseManager', getManager, async (req, res) => {
    res.send(res.manager)
  })


  // Create a new client //
router.post('/', async (req, res) => {
    const client = new Client(req.body)

    try {
        const updatedClient = await client.save()
        res.json(updatedClient)
    } catch (err) {
        res.status(400).json({message: err.message}) }
})


// Updating a client based on the given casenumber

router.patch('/:id', getClient, async (req, res) => {
    try {
        Object.assign(res.client, req.body)
        const updatedClient = await res.client.save()
        res.json(updatedClient)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})


// Deleting a client based on their casenumber
router.delete('/:id', getClient, async (req, res) => {
    try {
     await res.client.remove()
     res.json({message: 'Deleted Client'})
 
    } catch (err) {
        res.status(500).json({message: err.message})
 
    }
 
 
 })

// This retrieves the client by their case number 
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

/// This works !! ///

// Need to fix it to where it will only return first name, last name and case number per client
async function getManager(req, res, next) {
    let manager
    try {
        manager = await Client.find({caseManager: req.params.caseManager})
        if (manager == null) {
            return res.status(404).json({message: 'Cannot Find Any Clients Listed'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
    res.manager = manager
    next()
}


// Added this 11/3/2021

// Currently working on getting this functional
  //Make a graph out of work hours spent on clients
  //Search database by manager, return timeSpent fields if match
  router.get('graph-maker/:manager', (req, res, next) => {
    clientModel.find([
      { $match: {caseManager: req.params.manager}},//Search database and match by manager. All records that have searched managers will be returned
      { $project: {timeSpent: 1}}//Out of the returned records, display the timeSpent on the case.
    ],
      (error, data) => {
        if (error) {
          return next(error)
        }
        else {
          res.json(data);
        }
    })
  })
module.exports = router


// What do we still need? //

// 1. Page for case managers to track referrals to other social service agencies and weather client followed through with referral
// Might need a seperate model? //

// 2. Page for case manager to record short notes, date/time(sysdate) for time worked on said case //

// 3. Graph Data for a statistical data point, maybe race or age? //

//Fetches client data by Case Manager
//Note, this is in table format
// This needs to be fixed


/* router.get('client/:caseManager', getClient, async (req, res, next) => {
    try {
         clientModel.aggregate([
        { $match: {caseManager: req.params.caseManager}},
        { $project: {_id: 1, clientNumber: 1, caseManager: 1, startDate: 1}}])
    

    } catch (err) {
        return res.status(404).json({message: 'Cannot Find Client'})
    }
}) */

/* router.get('/casm/:caseManager', (req, res, next) =>{ 
    clientModel.find({}, {firstName : true, lastName : true}, (error, data) =>{
    if(error) {
        return next(error)
    } else {
        res.json(data);
    }});
});
*/

