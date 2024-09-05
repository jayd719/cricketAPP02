class ScoreBoard {
  /**
   * Creates an instance of the ScoreBoard class.
   * @param {string[]} battingUnit - The batting unit details.
   * @param {string[]} bowlingUnit - The bowling unit details.
   * @param {string[]} overs - The overs details.
   */
  constructor(battingUnit, bowlingUnit, overs, totalOvers) {
    // Initialize instance properties with the provided parameters
    this.battingUnit = battingUnit;
    this.bowlingUnit = bowlingUnit;
    this.oversList = overs;
    this.overs = [1,2];
    this.totalOvers = totalOvers;
    this.fallOfWickets = [];
    this.totalRuns = 0;
    this.wickets = 2;
    this.RUNS = createSpanElement(["text-6xl", "font-bold"], "100");
    this.WICKETS = createSpanElement(["text-5xl"], "/10");
    this.OVERS = createSpanElement(["md:text-2xl", "text-md"], "3.5");
    this.BATSMAN_ONE = createCurrentPlayerElement("Batsman One", "12(2)");
    this.BATSMAN_TWO = createCurrentPlayerElement("Batsman Two", "33(22)");
    this.BOWLER = createCurrentBowler();

    this.getTotal();
    this.update_labels();
  }

  /**
   * Adds a ball to the scoreboard.
   * @param {Object} ball - The ball details.
   */
  addBall(ball) {
    this.balls.push(ball);
  }

  /**
   * Calculates the total runs scored.
   * @returns {number} The total runs scored.
   */
  getTotal() {
    this.oversList.forEach((over) => {
      over.forEach((ball) => {
        this.totalRuns = this.totalRuns + ball;
      });
    });
  }

  /**
   * Provides a summary of the current scoreboard.
   * @returns {Object} The summary of the scoreboard.
   */
  getSummary() {
    return {
      battingUnit: this.battingUnit,
      bowlingUnit: this.bowlingUnit,
      overs: this.oversList,
      totalRuns: this.totalRuns,
      balls: this.balls,
    };
  }

  update_labels() {
    this.RUNS.textContent = this.totalRuns;
    this.WICKETS.textContent = `/${this.wickets}`;
    this.OVERS.textContent=`${this.overs[0]}.${this.overs[1]}`
  }
}
