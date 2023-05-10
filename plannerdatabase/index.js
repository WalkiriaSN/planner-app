const express = require('express');
const app = express();
const config = require('./config');
const Task = require('./models/task');
const Goal = require('./models/goal')
const cors = require('cors');

app.use(cors());

config.authenticate()
    .then(function () {
        console.log('Database is connected');
    })
    .catch(function (err) {
        console.log(err);
    });


app.get('/tasks', function (req, res) {
    Task.findAll()
        .then(function (results) {
            res.status(200).send(results)
        })

        .catch(function (err) {
            res.status(500).send(err);
        });
});


//Create a new task
app.post('/tasks', function(req, res){
    let task_data = req.body;

    Task.create(task_data)
    .then(function(result){
        res.status(200).send(result); //result is the item that was created
    })
    .catch(function(err){
        res.status(500).send(err);
    });
});

app.patch('/tasks/update-progress-level/:task_id', function(req, res){
    const task_id = parseInt(req.params.task_id);

        //Find the task
        Task.findByPk(task_id)
        .then(function(result){
            //Check if task exist in database table
            if(!result){
                res.status(404).send('Task was not found');
                return;
            }
    
            result.progress_level = req.body.progress_level;
    
            //Save the update into database
            result.save()
            .then(function(){
                res.status(200).send(result);
            })
            .catch(function(err){
                res.status(500).send(err);
            });
        })
        .catch(function(err){
            res.status(500).send(err);
        });
    });

    
/////////////GOALS/////////////////////

//GET DATA//

app.get('/goals', function (req, res) {
    Goal.findAll().then(function (results) {
        res.status(200).send(results);
    }).catch(function (err) {
        res.status(500).send(err);
    });
});

//complete update of a goal record
app.put('/goals/:goal_id', function (req, res) {
    const goal_id = parseInt(req.params.goal_id);
    let goal_data = req.body;
    
    //find the goal
    Goal.findByPk(goal_id)
        .then(function (result) {

            if (!result) {
                res.status(404).send('Goal not found');                   // if data was not found give err message 
            }
            else {
                //update  data 
                result.name = goal_data.name;
                result.age = goal_data.age;
                result.country = goal_data.country;
                result.department = goal_data.department;

                //save changes to database 
                result.save()
                    .then(function (result) {
                        res.status(200).send(result);                // if the data was found give result 
                    })
                    .catch(function (err) {
                        res.status(500).send(err);
                    })


            }
        }).catch(function (err) {
            res.status(500).send(err);
        })
});

app.listen(3700, function () {
    console.log('Server running on port 3700...');
});