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

describe ("When the user wants to create a game", () => {
	before(async() => {
        response = await axios.post(BASE_URL, game)
    });

    /**
     * Assert
     */

    it("Then should return a created status code",()=>{
        expect(response.status).eql(200);
    });
    it("Then should return the created game",()=>{
        const createGame = response.data;
        expect(createGame.name).eql(game.name);
        expect(createGame.developer).eql(game.developer);
        expect(createGame.year).eql(game.year);
        expect(createGame.type).eql(game.type);
        expect(createGame.console).eql(game.console);
        expect(createGame.img).eql(game.img);
    });
    it("Then should return a Json as content type",()=>{
        expect(response.headers['content-type']).to.contain('application/json');
    });

    /**
     * Clean Back-End
     */
    describe ("Clean the Back of the created information", () => {
        before(async() => {
            response2 = await axios.delete(`${BASE_URL}/${response.data.id}`)
        });
        it("Then should return a delete status code",()=>{
            expect(response2.status).eql(200);
        });
    });
});