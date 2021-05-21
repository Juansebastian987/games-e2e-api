const axios = require('axios');
const { expect } = require('chai');

const {random} = require('faker');

   /**
     * Arrange
    */
let response;

const game = {
    "name": "Fake name",
    "developer": "Fake developer",
    "year": 2100,
    "type": "Fake type",
    "console": "Fake console",
    "img": "/"  
    };

const BASE_URL = "https://proyecto-final-qa-back.herokuapp.com/games";

    /**
     * Act
     */
describe ("When the user wants to list games", () => {
	before(async ()=>{
	    response = await axios.get(BASE_URL);
    });

    /**
    * Assert
    */
    it("Then it should return an OK status code", () => {
        expect(response.status).eql(200);
    });
    it("Then it should return game with developer, id and name.", () => {
        expect(response.data.length).to.be.greaterThan(0);
        for(var i=0;i<response.data.length;i++){
            const gameResponse = response.data[i];
            expect(gameResponse.name).to.not.equal(game.name);
            expect(gameResponse.developer).to.not.equal(game.developer);
            expect(gameResponse.year).to.not.equal(game.year);
            expect(gameResponse.type).to.not.equal(game.type);
            expect(gameResponse.console).to.not.equal(game.console);
            expect(gameResponse.img).to.not.equal(game.img);
        } 
    });
});