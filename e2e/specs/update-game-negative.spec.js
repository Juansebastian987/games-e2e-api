const axios = require('axios');
const { expect } = require('chai');

const {random} = require('faker');

    /**
     * Arrange for test1
     */
let response;
let response2;
let response3;
const updateEmptyNameGame = {
    "developer":random.word(20),
    "year": 2019,
    "type": random.word(20),
    "console": random.word(20),
    "img": null  
};
     /**
     * Arrange for test2
     */
let response4;
let response5;
let response6;
const updateEmptyDeveloperGame = {
    "name":random.word(15),
    "year": 2019,
    "type": random.word(20),
    "console": random.word(20),
    "img": null  
    };

    /**
     * Arrange for test3
     */
let response7;
let response8;
let response9;
const updateEmptyYearGame = {
    "name":random.word(15),
    "developer":random.word(20),
    "type": random.word(20),
    "console": random.word(20),
    "img": null  
};
     /**
     * Arrange for test4
     */
let response10;
let response11;
let response12;
const updateEmptyTypeGame = {
    "name":random.word(15),
    "developer":random.word(20),
    "year": 2019,
    "console": random.word(20),
    "img": null  
    };
        /**
     * Arrange for test5
     */
let response13;
let response14;
let response15;
const updateEmptyConsoleGame = {
    "name":random.word(15),
    "developer":random.word(20),
    "year": 2019,
    "type": random.word(20),
    "img": null  
};
     /**
     * Arrange for test6
     */
let response16;
let response17;
let response18;
const updateEmptyImgGame = {
    "name":random.word(15),
    "developer":random.word(20),
    "year": 2019,
    "type": random.word(20),
    "console": random.word(20),
    };

    /**
     * Arrange both test
     */
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
describe ("Given a created game for Update Name", () => {
	before(async() => {
        response =await axios.post(BASE_URL, game)
    });
    describe ("Update the game created with empty name", () => {
        before(async() => {
            response2 = await axios.put(`${BASE_URL}/${response.data.id}`, updateEmptyNameGame)
        });

        /**
         * Assert
         */
        it("Then should return a created status code",()=>{
            expect(response2.status).eql(200);
        });
        it("Then should return the created game with empty name",()=>{
            const createGame = response2.data;
            expect(createGame.name).to.be.null;
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

    /**
     * Act
     */
describe ("Given a created game for Update Developer", () => {
	before(async() => {
        response4 =await axios.post(BASE_URL, game)
    });
    describe ("Update the game created with empty developer", () => {
        before(async() => {
            response5 = await axios.put(`${BASE_URL}/${response4.data.id}`, updateEmptyDeveloperGame)
        });

        /**
         * Assert
         */
        it("Then should return a created status code",()=>{
            expect(response5.status).eql(200);
        });
        it("Then should return the created game with empty developer",()=>{
            const createGame = response5.data;
            expect(createGame.developer).to.be.null;
        });

        /**
         * Clean Back-End
         */
        describe ("Clean the back of the created information", () => {
            before(async() => {
                response6 = await axios.delete(`${BASE_URL}/${response4.data.id}`)
            });
            it("Then should return a delete status code",()=>{
                expect(response6.status).eql(200);
            });
        });
    });
});
    /**
     * Act
     */
describe ("Given a created game for Update Year", () => {
        before(async() => {
            response7 =await axios.post(BASE_URL, game)
        });
        describe ("Update the game created with empty year", () => {
            before(async() => {
                response8 = await axios.put(`${BASE_URL}/${response7.data.id}`, updateEmptyYearGame)
            });
    
            /**
             * Assert
             */
            it("Then should return a created status code",()=>{
                expect(response8.status).eql(200);
            });
            it("Then should return the created game with empty year",()=>{
                const createGame = response8.data;
                expect(createGame.year).to.equal(0);
            });
    
            /**
             * Clean Back-End
             */
            describe ("Clean the back of the created information", () => {
                before(async() => {
                    response9 = await axios.delete(`${BASE_URL}/${response7.data.id}`)
                });
                it("Then should return a delete status code",()=>{
                    expect(response9.status).eql(200);
                });
            });
        });
    });
    
    /**
    * Act
    */
describe ("Given a created game for Update Type", () => {
        before(async() => {
            response10 =await axios.post(BASE_URL, game)
        });
        describe ("Update the game created with empty type", () => {
            before(async() => {
                response11 = await axios.put(`${BASE_URL}/${response10.data.id}`, updateEmptyTypeGame)
            });
    
            /**
             * Assert
             */
            it("Then should return a created status code",()=>{
                expect(response11.status).eql(200);
            });
            it("Then should return the created game with empty type",()=>{
                const createGame = response11.data;
                expect(createGame.type).to.be.null;
            });
    
            /**
             * Clean Back-End
             */
            describe ("Clean the back of the created information", () => {
                before(async() => {
                    response12 = await axios.delete(`${BASE_URL}/${response10.data.id}`)
                });
                it("Then should return a delete status code",()=>{
                    expect(response12.status).eql(200);
                });
            });
        });
});

    /**
     * Act
     */
describe ("Given a created game for Update Console", () => {
	before(async() => {
        response =await axios.post(BASE_URL, game)
    });
    describe ("Update the game created with empty console", () => {
        before(async() => {
            response2 = await axios.put(`${BASE_URL}/${response.data.id}`, updateEmptyConsoleGame)
        });

        /**
         * Assert
         */
        it("Then should return a created status code",()=>{
            expect(response2.status).eql(200);
        });
        it("Then should return the created game with empty console",()=>{
            const createGame = response2.data;
            expect(createGame.console).to.be.null;
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

    /**
     * Act
     */
describe ("Given a created game for Update Img", () => {
	before(async() => {
        response4 =await axios.post(BASE_URL, game)
    });
    describe ("Update the game created with empty name", () => {
        before(async() => {
            response5 = await axios.put(`${BASE_URL}/${response4.data.id}`, updateEmptyImgGame)
        });

        /**
         * Assert
         */
        it("Then should return a created status code",()=>{
            expect(response5.status).eql(200);
        });
        it("Then should return the created game with empty img",()=>{
            const createGame = response5.data;
            expect(createGame.img).to.be.null;
        });

        /**
         * Clean Back-End
         */
        describe ("Clean the back of the created information", () => {
            before(async() => {
                response6 = await axios.delete(`${BASE_URL}/${response4.data.id}`)
            });
            it("Then should return a delete status code",()=>{
                expect(response6.status).eql(200);
            });
        });
    });
});