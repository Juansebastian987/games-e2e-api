const axios = require('axios');
const { expect } = require('chai');
const {random} = require('faker');

    /**
     * Arrange
     */
let response;
let response2;
let response3;
const game = {
    "name":random.word(15),
    "developer":random.word(20),
    "year": 2019,
    "type": random.word(20),
    "console": random.word(20),
    "img": null  
    };

const updateGame = {
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
describe ("Given a created", () => {
	before(async() => {
        response =await axios.post(BASE_URL, game)
    });
    describe ("Update the game created", () => {
        before(async() => {
            response2 = await axios.put(`${BASE_URL}/${response.data.id}`, updateGame)
        });

        /**
         * Assert
         */
        it("Then should return a created status code",()=>{
            expect(response.status).eql(200);
        });

        /**
         * Clean Back-End
         */
        describe ("Clean the back of the created information", () => {
            before(async() => {
                response3 = await axios.delete(`${BASE_URL}/${response.data.id}`)
            });
            it("Then should return a delete status code",()=>{
                expect(response3.status).eql(200);
            });
        });
    });
});