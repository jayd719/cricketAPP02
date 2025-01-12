// models.js

class Batter {
    constructor(name) {
        this.name = name;
        this.runs = 0;
        this.ballsFaced = 0;
        this.fours = 0;
        this.sixes = 0;
        this.isOut = false;
    }

    updateRuns(runs) {
        this.runs += runs;
        this.ballsFaced += 1;
        if (runs === 4) this.fours += 1;
        if (runs === 6) this.sixes += 1;
    }

    markOut() {
        this.isOut = true;
    }
}

class Bowler {
    constructor(name) {
        this.name = name;
        this.oversBowled = 0;
        this.runsConceded = 0;
        this.wicketsTaken = 0;
        this.noBalls = 0;
        this.wides = 0;
    }

    updateStats(runs, isExtra = false, isWicket = false) {
        this.runsConceded += runs;
        if (isWicket) this.wicketsTaken += 1;
        if (isExtra) this.noBalls += 1;
    }
}

class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
        this.score = 0;
        this.wickets = 0;
        this.overs = 0.0;
        this.extras = 0;
    }

    addPlayer(player) {
        this.players.push(player);
    }

    updateScore(runs, isExtra = false) {
        this.score += runs;
        if (isExtra) this.extras += runs;
    }

    addWicket() {
        this.wickets += 1;
    }
}

class Match {
    constructor(team1, team2, oversLimit) {
        this.team1 = new Team(team1);
        this.team2 = new Team(team2);
        this.currentBattingTeam = this.team1;
        this.currentBowlingTeam = this.team2;
        this.currentBatsmen = [];
        this.currentBowler = null;
        this.oversLimit = oversLimit;
        this.completed = false;
    }

    switchInnings() {
        if (this.currentBattingTeam === this.team1) {
            this.currentBattingTeam = this.team2;
            this.currentBowlingTeam = this.team1;
        } else {
            this.completed = true;
        }
    }

    updateBatsmen(batsman1, batsman2) {
        this.currentBatsmen = [batsman1, batsman2];
    }

    updateBowler(bowler) {
        this.currentBowler = bowler;
    }
}
