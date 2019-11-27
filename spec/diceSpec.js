describe("A dice with as many sides and also include probabilities", function(){
    it ("should pop out a random side out of six sides with different probabailities", function() {
            let diceTest = dice2.roll();
        if(diceTest > 0 && diceTest <= 6){ diceTest = true};
        expect(diceTest).toBe(true);
    });
})