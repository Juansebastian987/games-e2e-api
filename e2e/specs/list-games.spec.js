const axios = require('axios');
const { expect } = require('chai');

   /**
     * Arrange
    */
let response;

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
    it("Then it should return game with autor, id and name.", () => {
        expect(response.data.length).to.be.greaterThan(0);
        const game = response.data[0];
        expect(game).to.have.property("id");
        expect(game).to.have.property("name");
        expect(game).to.have.property("developer");
        expect(game).to.have.property("year");
        expect(game).to.have.property("type");
        expect(game).to.have.property("console");
        expect(game).to.have.property("img");
    });
});