-- Players Table
CREATE TABLE
    Players (
        player_id INT PRIMARY KEY AUTO_INCREMENT,
        player_name VARCHAR(100) UNIQUE NOT NULL
    );

-- Teams Table
CREATE TABLE
    Teams (
        team_id INT PRIMARY KEY AUTO_INCREMENT,
        team_name VARCHAR(100) UNIQUE NOT NULL
    );

-- TeamPlayers Table (Tracks player participation in a specific match)
CREATE TABLE
    TeamPlayers (
        team_player_id INT PRIMARY KEY AUTO_INCREMENT,
        team_id INT NOT NULL,
        player_id INT NOT NULL,
        match_id INT NOT NULL,
        FOREIGN KEY (team_id) REFERENCES Teams (team_id) ON DELETE CASCADE,
        FOREIGN KEY (player_id) REFERENCES Players (player_id) ON DELETE CASCADE,
        FOREIGN KEY (match_id) REFERENCES Matches (match_id) ON DELETE CASCADE,
        UNIQUE (team_id, player_id, match_id) -- A player cannot be in multiple teams for the same match
    );

-- Matches Table (Fixed missing columns)
CREATE TABLE
    Matches (
        match_id INT PRIMARY KEY AUTO_INCREMENT,
        match_date DATE NOT NULL,
        venue VARCHAR(255),
        team1_id INT NOT NULL,
        team2_id INT NOT NULL,
        FOREIGN KEY (team1_id) REFERENCES Teams (team_id) ON DELETE CASCADE,
        FOREIGN KEY (team2_id) REFERENCES Teams (team_id) ON DELETE CASCADE
    );

-- Deliveries Table (Ball-by-ball details)
CREATE TABLE
    Deliveries (
        delivery_id INT PRIMARY KEY AUTO_INCREMENT,
        match_id INT NOT NULL,
        inning INT NOT NULL,
        over INT NOT NULL,
        ball INT NOT NULL,
        batsman INT NOT NULL,
        non_striker INT NOT NULL,
        bowler INT NOT NULL,
        is_super_over BOOLEAN DEFAULT FALSE,
        wide_runs INT DEFAULT 0,
        bye_runs INT DEFAULT 0,
        legbye_runs INT DEFAULT 0,
        noball_runs INT DEFAULT 0,
        penalty_runs INT DEFAULT 0,
        batsman_runs INT DEFAULT 0,
        extra_runs INT DEFAULT 0,
        total_runs INT NOT NULL,
        FOREIGN KEY (match_id) REFERENCES Matches (match_id) ON DELETE CASCADE,
        FOREIGN KEY (batsman) REFERENCES Players (player_id) ON DELETE CASCADE,
        FOREIGN KEY (non_striker) REFERENCES Players (player_id) ON DELETE CASCADE,
        FOREIGN KEY (bowler) REFERENCES Players (player_id) ON DELETE CASCADE,
        UNIQUE (match_id, inning, over, ball),
        INDEX idx_match_id (match_id),
        INDEX idx_batsman (batsman),
        INDEX idx_bowler (bowler),
        INDEX idx_non_striker (non_striker),
        INDEX idx_inning_over_ball (inning, over, ball)
    );

-- Dismissals Table (Tracks wicket details)
CREATE TABLE
    Dismissals (
        dismissal_id INT PRIMARY KEY AUTO_INCREMENT,
        delivery_id INT NOT NULL,
        dismissed_batsman INT NOT NULL,
        dismissal_type ENUM (
            'bowled',
            'caught',
            'lbw',
            'run out',
            'stumped',
            'hit wicket',
            'handled the ball'
        ),
        FOREIGN KEY (delivery_id) REFERENCES Deliveries (delivery_id) ON DELETE CASCADE,
        FOREIGN KEY (dismissed_batsman) REFERENCES Players (player_id) ON DELETE CASCADE
    );

-- DismissalFielders Table (For multiple fielders in run-outs)
CREATE TABLE
    DismissalFielders (
        dismissal_fielder_id INT PRIMARY KEY AUTO_INCREMENT,
        dismissal_id INT NOT NULL,
        fielder INT NOT NULL,
        FOREIGN KEY (dismissal_id) REFERENCES Dismissals (dismissal_id) ON DELETE CASCADE,
        FOREIGN KEY (fielder) REFERENCES Players (player_id) ON DELETE CASCADE
    );