import { Test } from '../models/testTable.js'

export const createTestEndpoint = async (req, res) => {
    //Display the request body in terminal so we can test and debig it's the correct value
    console.log("Request body/content: " + req.body);

    // We try to save a user to the database
    try {
        // Create a new variable of type User 
        const test = new Test({
            text: req.body.text
        });
        // save the user to the db
        await test.save();

        // send a response for the request
        // if you don't send a response, the request will not know if it was finished and it keep loading
        res.json({ message: "The test data was created"});


    } catch(err) {
        // if we have errors, we catch them and we send them as a response
        res.json(err);
    }
}