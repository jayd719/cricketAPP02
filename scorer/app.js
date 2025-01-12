// app.js

// Initialize match instance
const match = new Match("India", "Australia", 20);
match.updateBatsmen(new Batter("Rohit Sharma"), new Batter("Virat Kohli"));
match.updateBowler(new Bowler("Mitchell Starc"));

/**
 * Match Controller
 * Handles the core match operations.
 */
const MatchController = {
    recordRun(runs, isExtra = false) {
        const striker = match.currentBatsmen[0];

        striker.updateRuns(runs);
        match.currentBattingTeam.updateScore(runs, isExtra);

        if (runs % 2 === 1) {
            this.swapBatsmen();
        }

        MatchView.updateScoreboard();
    },

    recordWicket() {
        const striker = match.currentBatsmen[0];
        striker.markOut();
        match.currentBattingTeam.addWicket();
        MatchView.updateScoreboard();
    },

    changeBowler(bowlerName) {
        match.updateBowler(new Bowler(bowlerName));
        MatchView.updateScoreboard();
    },

    nextOver() {
        match.currentBattingTeam.overs += 1;

        if (match.currentBattingTeam.overs >= match.oversLimit) {
            match.switchInnings();
        }

        MatchView.updateScoreboard();
    },

    swapBatsmen() {
        match.currentBatsmen.reverse();
    }
};

/**
 * Match View
 * Handles UI updates.
 */
const MatchView = {
    updateScoreboard() {
        const { name, score, wickets, overs } = match.currentBattingTeam;
        document.getElementById("score").textContent =
            `${name}: ${score}/${wickets} (Overs: ${overs}/${match.oversLimit})`;
    },

    addEventListeners() {
        document.getElementById("btn-one").addEventListener("click", () => MatchController.recordRun(1));
        document.getElementById("btn-two").addEventListener("click", () => MatchController.recordRun(2));
        document.getElementById("btn-three").addEventListener("click", () => MatchController.recordRun(3));
        document.getElementById("btn-four").addEventListener("click", () => MatchController.recordRun(4));
        document.getElementById("btn-six").addEventListener("click", () => MatchController.recordRun(6));
        document.getElementById("btn-wicket").addEventListener("click", () => MatchController.recordWicket());
        document.getElementById("btn-wide").addEventListener("click", () => MatchController.nextOver());
    }
};

// Initialize UI and event listeners
MatchView.updateScoreboard();
MatchView.addEventListeners();
