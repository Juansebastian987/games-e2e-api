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
    describe ("Delete the game created", () => {
        before(async() => {
            response2 = await axios.delete(`${BASE_URL}/0`)
        });

        /**
        * Assert
         */
        it("Then should return a delete status code",()=>{
            expect(response2.status).eql(200);
        });
        it("Then should return a Json as content type",()=>{
            expect(response2.data).to.have.length(0);
        });
    });