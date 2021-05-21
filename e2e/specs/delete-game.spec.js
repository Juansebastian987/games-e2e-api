const axios = require('axios');
const { expect } = require('chai');
const {random} = require('faker');
    /**
     * Arrange
     */
let response;
let response2;
const game = {
    "name":random.word(15),
    "developer":random.word(20),
    "year": 2019,
    "type": random.word(20),
    "console": random.word(20),
    "img": null  
    };

const BASE_URL = "https://proyecto-final-qa-back.herokuapp.com/games";

    /**
     * Act
     */
describe ("Given a game created", () => {
	before(async() => {
        response =await axios.post(BASE_URL, game)
    });
    describe ("Delete the game created", () => {
        before(async() => {
            response2 = await axios.delete(`${BASE_URL}/${response.data.id}`)
        });

        /**
         * Assert
         */
        it("Then should return a delete status code",()=>{
            expect(response2.status).eql(200);
        });
    });
});