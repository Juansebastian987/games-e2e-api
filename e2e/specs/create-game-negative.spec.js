const axios = require('axios');
const { expect } = require('chai');

const {random} = require('faker');
   
    /**
     * Arrange for test1
     */
let response;
let response2;
const gameEmptyName = {
    "developer":`${random.word(20)}`,
    "year": 2019,
    "type": random.word(20),
    "console": random.word(20),
    "img": null  
    };

     /**
     * Arrange for test2
     */
let response3;
let response4;
const gameEmptyDeveloper = {
    "name":random.word(15),
    "year": 2019,
    "type": random.word(20),
    "console": random.word(20),
    "img": null
    };

let response5;
let response6;
const gameEmptyYear = {
    "name":random.word(15),
    "developer":random.word(20),
    "type": random.word(20),
    "console": random.word(20),
    "img": null  
    };

let response7;
let response8;   
const gameEmptyType = {
    "name":random.word(15),
    "developer":random.word(20),
    "year": 2019,
    "console": random.word(20),
    "img": null  
};

let response9;
let response10;    
const gameEmptyConsole = {
    "name":random.word(15),
    "developer":random.word(20),
    "year": 2019,
    "type": random.word(20),
    "img": null  
    };
    
let response11;
let response12;        
const gameEmptyImg = {
    "name":random.word(15),
    "developer":random.word(20),
    "year": 2019,
    "type": random.word(20),
    "console": random.word(20),
    };

const BASE_URL = "https://proyecto-final-qa-back.herokuapp.com/games"; 

    /**
     * Act
     */
describe ("When the user wants to create a game and puts an empty name", () => {
	before(async() => {
        response = await axios.post(BASE_URL, gameEmptyName)
    });

     /**
     * Assert
     */
    it("Then should return a created status code",()=>{
        expect(response.status).eql(200);
    });
    it("Then should return the created game with name null",()=>{
        const createGame= response.data;
        expect(createGame.name).to.be.null;
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
    /**
     * Act
     */
describe ("When the user wants to create a game and puts an empty developer", () => {
	before(async() => {
        response3 = await axios.post(BASE_URL, gameEmptyDeveloper)
    });
    
    /**
     * Assert
     */
    
    it("Then should return a created status code",()=>{
        expect(response3.status).eql(200);
    });
    it("Then should return the created game with developer null",()=>{
        const createGame = response3.data;
        expect(createGame.developer).to.be.null;
    });

    /**
     * Clean Back-End
     */
    describe ("Clean the Back of the created information", () => {
        before(async() => {
            response4 = await axios.delete(`${BASE_URL}/${response3.data.id}`)
        });
        it("Then should return a delete status code",()=>{
            expect(response4.status).eql(200);
        });
    });
});

    /**
     * Act
     */
describe ("When the user wants to create a game and puts an empty year", () => {
	before(async() => {
        response5 = await axios.post(BASE_URL, gameEmptyYear)
    });

     /**
     * Assert
     */
    it("Then should return a created status code",()=>{
        expect(response5.status).eql(200);
    });
    it("Then should return the created game with year null",()=>{
        const createGame= response5.data;
        expect(createGame.year).to.equal(0);
    });

    /**
     * Clean Back-End
     */
    describe ("Clean the Back of the created information", () => {
        before(async() => {
            response6 = await axios.delete(`${BASE_URL}/${response.data.id}`)
        });
        it("Then should return a delete status code",()=>{
            expect(response6.status).eql(200);
        });
    });
});
    /**
     * Act
     */
describe ("When the user wants to create a game and puts an empty type", () => {
	before(async() => {
        response7 = await axios.post(BASE_URL, gameEmptyType)
    });
    
    /**
     * Assert
     */
    
    it("Then should return a created status code",()=>{
        expect(response7.status).eql(200);
    });
    it("Then should return the created game with type null",()=>{
        const createGame = response7.data;
        expect(createGame.type).to.be.null;
    });

    /**
     * Clean Back-End
     */
    describe ("Clean the Back of the created information", () => {
        before(async() => {
            response8 = await axios.delete(`${BASE_URL}/${response3.data.id}`)
        });
        it("Then should return a delete status code",()=>{
            expect(response8.status).eql(200);
        });
    });
});

    /**
     * Act
     */
describe ("When the user wants to create a game and puts an empty console", () => {
	before(async() => {
        response9 = await axios.post(BASE_URL, gameEmptyConsole)
    });

     /**
     * Assert
     */
    it("Then should return a created status code",()=>{
        expect(response9.status).eql(200);
    });
    it("Then should return the created game with console null",()=>{
        const createGame= response9.data;
        expect(createGame.console).to.be.null;
    });

    /**
     * Clean Back-End
     */
    describe ("Clean the Back of the created information", () => {
        before(async() => {
            response10 = await axios.delete(`${BASE_URL}/${response.data.id}`)
        });
        it("Then should return a delete status code",()=>{
            expect(response10.status).eql(200);
        });
    });
});
    /**
     * Act
     */
describe ("When the user wants to create a game and puts an empty img", () => {
	before(async() => {
        response11 = await axios.post(BASE_URL, gameEmptyImg)
    });
    
    /**
     * Assert
     */
    
    it("Then should return a created status code",()=>{
        expect(response11.status).eql(200);
    });
    it("Then should return the created game with img null",()=>{
        const createGame = response11.data;
        expect(createGame.img).to.be.null;
    });

    /**
     * Clean Back-End
     */
    describe ("Clean the Back of the created information", () => {
        before(async() => {
            response12 = await axios.delete(`${BASE_URL}/${response3.data.id}`)
        });
        it("Then should return a delete status code",()=>{
            expect(response12.status).eql(200);
        });
    });
});