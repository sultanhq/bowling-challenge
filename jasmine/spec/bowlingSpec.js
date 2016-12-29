describe('Bowling', function() {
    var bowling;

    beforeEach(function() {
        game = new Bowling();
        game.newGame()
    });

    it("expects a score sheet to exist", function() {
        expect(game.scoreSheet).toBeDefined()
    });

    it("expects a frame to exist", function() {
        expect(game.currentFrame).toBeDefined()
    });

    it("expects a frame to have a max number of bowls", function() {
        expect(game.currentFrame.maxBowls).toEqual(2)
    });

    it("expects a frame to have two throws", function() {
        game.bowlScore(7);
        game.bowlScore(1);
        expect(game.scoreSheet[0].maxBowls).toEqual(2)
    });

    it("expects a frame throw count to reset to 1 after two throws in normal frame", function() {
        game.bowlScore(2);
        game.bowlScore(4);
        expect(game.currentFrame.bowlNumber).toEqual(1)
    });

    it("expects a score to be recorded in a frame", function() {
        game.bowlScore(3)
        game.bowlScore(6);
        expect(game.scoreSheet[0].score()).toEqual(9)
    });

    it("expects a frame to be saved once frame count = 0", function() {
        game.bowlScore(3)
        game.bowlScore(6);
        expect(game.scoreSheet.length).toEqual(1)
    });

    it("expects a frame to have a frame number", function() {
        game.bowlScore(1);
        expect(game.currentFrame.number).toEqual(1)
    });

    it("expects a frame to accept strike on first bowl", function() {
      game.bowlScore(10)
      expect(game.scoreSheet[0].strike).toBe(true)
    });

    it("expects a frame to accept strike on second bowl", function() {
      game.bowlScore(0)
      game.bowlScore(10)
      expect(game.scoreSheet[0].strike).toBe(true)
    });

    it("expects a strike to close and save the frame to the scoresheet", function() {
        game.bowlScore(10)
        expect(game.scoresheet[0].number).toEqual(1)
    });
});
