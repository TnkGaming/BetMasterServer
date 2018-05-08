var teams = [];
function fixTeams(team, league, isHome, score){
		var currTeam = teams.find( t => t.Name == team );
		if(currTeam == null){
			var teamPlacement = teams.push(new Team(team));
			currTeam = teams[teamPlacement-1];
		}
		currTeam.fix(league,isHome,score);
}
function getAverageFT1(home,away,league){
	var sum = 0;
	var count = 0;
	homeTeam = teams.find( t => t.Name == home);
	awayTeam = teams.find( t => t.Name == away);
	if(homeTeam != null && homeTeam.Rank.T > 0){
		sum += homeTeam.Rank.W / homeTeam.Rank.T;
		count++;
		if(homeTeam.HRank.T > 0){
			sum += homeTeam.HRank.W / homeTeam.HRank.T;
			count++;
		}
		homeLeague = homeTeam.Leagues.find( l => l.Name == league );
		if(homeLeague != null && homeLeague.Rank.T > 0){
			sum += homeLeague.Rank.W / homeLeague.Rank.T;
			count++;
			if(homeLeague.HRank.T > 0){
				sum += homeLeague.HRank.W / homeLeague.HRank.T;
				count++;
			}
		}
	}
	if(awayTeam != null && awayTeam.Rank.T > 0){
		sum += awayTeam.Rank.L / awayTeam.Rank.T;
		count++;
		if(awayTeam.ARank.T > 0){
			sum += awayTeam.ARank.L / awayTeam.ARank.T;
			count++;
		}
		awayLeague = awayTeam.Leagues.find( l => l.Name == league );
		if(awayLeague != null && awayLeague.Rank.T > 0){
			sum += awayLeague.Rank.L / awayLeague.Rank.T;
			count++;
			if(awayLeague.ARank.T > 0){
				sum += awayLeague.ARank.L / awayLeague.ARank.T;
				count++;
			}
		}
	}
	return sum / count;
}
function getAverageFTX(home,away,league){
	var sum = 0;
	var count = 0;
	homeTeam = teams.find( t => t.Name == home);
	awayTeam = teams.find( t => t.Name == away);
	if(homeTeam != null && homeTeam.Rank.T > 0){
		sum += homeTeam.Rank.D / homeTeam.Rank.T;
		count++;
		if(homeTeam.HRank.T > 0){
			sum += homeTeam.HRank.D / homeTeam.HRank.T;
			count++;
		}
		homeLeague = homeTeam.Leagues.find( l => l.Name == league );
		if(homeLeague != null && homeLeague.Rank.T > 0){
			sum += homeLeague.Rank.D / homeLeague.Rank.T;
			count++;
			if(homeLeague.HRank.T > 0){
				sum += homeLeague.HRank.D / homeLeague.HRank.T;
				count++;
			}
		}
	}
	if(awayTeam != null && awayTeam.Rank.T > 0){
		sum += awayTeam.Rank.D / awayTeam.Rank.T;
		count++;
		if(awayTeam.ARank.T > 0){
			sum += awayTeam.ARank.D / awayTeam.ARank.T;
			count++;
		}
		awayLeague = awayTeam.Leagues.find( l => l.Name == league );
		if(awayLeague != null && awayLeague.Rank.T > 0){
			sum += awayLeague.Rank.D / awayLeague.Rank.T;
			count++;
			if(awayLeague.ARank.T > 0){
				sum += awayLeague.ARank.D / awayLeague.ARank.T;
				count++;
			}
		}
	}
	return sum / count;
}
function getAverageFT2(home,away,league){
	var sum = 0;
	var count = 0;
	homeTeam = teams.find( t => t.Name == home);
	awayTeam = teams.find( t => t.Name == away);
	if(homeTeam != null && homeTeam.Rank.T > 0){
		sum += homeTeam.Rank.L / homeTeam.Rank.T;
		count++;
		if(homeTeam.HRank.T > 0){
			sum += homeTeam.HRank.L / homeTeam.HRank.T;
			count++;
		}
		homeLeague = homeTeam.Leagues.find( l => l.Name == league );
		if(homeLeague != null && homeLeague.Rank.T > 0){
			sum += homeLeague.Rank.L / homeLeague.Rank.T;
			count++;
			if(homeLeague.HRank.T > 0){
				sum += homeLeague.HRank.L / homeLeague.HRank.T;
				count++;
			}
		}
	}
	if(awayTeam != null && awayTeam.Rank.T > 0){
		sum += awayTeam.Rank.W / awayTeam.Rank.T;
		count++;
		if(awayTeam.ARank.T > 0){
			sum += awayTeam.ARank.W / awayTeam.ARank.T;
			count++;
		}
		awayLeague = awayTeam.Leagues.find( l => l.Name == league );
		if(awayLeague != null && awayLeague.Rank.T > 0){
			sum += awayLeague.Rank.W / awayLeague.Rank.T;
			count++;
			if(awayLeague.ARank.T > 0){
				sum += awayLeague.ARank.W / awayLeague.ARank.T;
				count++;
			}
		}
	}
	return sum / count;
}
function getAverageGG(home,away,league){
	var sum = 0;
	var count = 0;
	homeTeam = teams.find( t => t.Name == home);
	awayTeam = teams.find( t => t.Name == away);
	if(homeTeam != null && homeTeam.G.TG.T > 0){
		sum += homeTeam.G.TG.G / homeTeam.G.TG.T;
		count++;
		if(homeTeam.G.HG.T > 0){
			sum += homeTeam.G.HG.G / homeTeam.G.HG.T;
			count++;
		}
		homeLeague = homeTeam.Leagues.find( l => l.Name == league );
		if(homeLeague != null && homeLeague.G.HG.T > 0){
			sum += homeLeague.G.TG.G / homeLeague.G.HG.T;
			count++;
			if(homeLeague.G.HG.T > 0){
				sum += homeLeague.G.HG.G / homeLeague.G.HG.T;
				count++;
			}
		}
	}
	if(awayTeam != null && awayTeam.G.TG.T > 0){
		sum += awayTeam.G.TG.G / awayTeam.G.TG.T;
		count++;
		if(awayTeam.G.AG.T > 0){
			sum += awayTeam.G.AG.G / awayTeam.G.AG.T;
			count++;
		}
		awayLeague = awayTeam.Leagues.find( l => l.Name == league );
		if(awayLeague != null && awayLeague.G.TG.T > 0){
			sum += awayLeague.G.TG.G / awayLeague.G.TG.T;
			count++;
			if(awayLeague.G.AG.T > 0){
				sum += awayLeague.G.AG.G / awayLeague.G.AG.T;
				count++;
			}
		}
	}
	return sum / count;
}
function getAverageOU15(home,away,league){
	var sum = 0;
	var count = 0;
	homeTeam = teams.find( t => t.Name == home);
	awayTeam = teams.find( t => t.Name == away);
	if(homeTeam != null && homeTeam.OU15.TOU.T > 0){
		sum += homeTeam.OU15.TOU.O / homeTeam.OU15.TOU.T;
		count++;
		if(homeTeam.OU15.HOU.T > 0){
			sum += homeTeam.OU15.HOU.O / homeTeam.OU15.HOU.T;
			count++;
		}
		homeLeague = homeTeam.Leagues.find( l => l.Name == league );
		if(homeLeague != null && homeLeague.OU15.TOU.T > 0){
			sum += homeLeague.OU15.TOU.O / homeLeague.OU15.TOU.T;
			count++;
			if(homeLeague.OU15.HOU.T > 0){
				sum += homeLeague.OU15.HOU.O / homeLeague.OU15.HOU.T;
				count++;
			}
		}
	}
	if(awayTeam != null && awayTeam.OU15.TOU.T > 0){
		sum += awayTeam.OU15.TOU.O / awayTeam.OU15.TOU.T;
		count++;
		if(awayTeam.OU15.AOU.T > 0){
			sum += awayTeam.OU15.AOU.O / awayTeam.OU15.AOU.T;
			count++;
		}
		awayLeague = awayTeam.Leagues.find( l => l.Name == league );
		if(awayLeague != null && awayLeague.OU15.TOU.T > 0){
			sum += awayLeague.OU15.TOU.O / awayLeague.OU15.TOU.T;
			count++;
			if(awayLeague.OU15.AOU.T > 0){
				sum += awayLeague.OU15.AOU.O / awayLeague.OU15.AOU.T;
				count++;
			}
		}
	}
	return sum / count;
}
function getAverageOU25(home,away,league){
	var sum = 0;
	var count = 0;
	homeTeam = teams.find( t => t.Name == home);
	awayTeam = teams.find( t => t.Name == away);
	if(homeTeam != null && homeTeam.OU25.TOU.T > 0){
		sum += homeTeam.OU25.TOU.O / homeTeam.OU25.TOU.T;
		count++;
		if(homeTeam.OU25.HOU.T > 0){
			sum += homeTeam.OU25.HOU.O / homeTeam.OU25.HOU.T;
			count++;
		}
		homeLeague = homeTeam.Leagues.find( l => l.Name == league );
		if(homeLeague != null && homeLeague.OU25.TOU.T > 0){
			sum += homeLeague.OU25.TOU.O / homeLeague.OU25.TOU.T;
			count++;
			if(homeLeague.OU25.HOU.T > 0){
				sum += homeLeague.OU25.HOU.O / homeLeague.OU25.HOU.T;
				count++;
			}
		}
	}
	if(awayTeam != null && awayTeam.OU25.TOU.T > 0){
		sum += awayTeam.OU25.TOU.O / awayTeam.OU25.TOU.T;
		count++;
		if(awayTeam.OU25.AOU.T > 0){
			sum += awayTeam.OU25.AOU.O / awayTeam.OU25.AOU.T;
			count++;
		}
		awayLeague = awayTeam.Leagues.find( l => l.Name == league );
		if(awayLeague != null && awayLeague.OU25.TOU.T > 0){
			sum += awayLeague.OU25.TOU.O / awayLeague.OU25.TOU.T;
			count++;
			if(awayLeague.OU25.AOU.T > 0){
				sum += awayLeague.OU25.AOU.O / awayLeague.OU25.AOU.T;
				count++;
			}
		}
	}
	return sum / count;
}
function getAverageOU35(home,away,league){
	var sum = 0;
	var count = 0;
	homeTeam = teams.find( t => t.Name == home);
	awayTeam = teams.find( t => t.Name == away);
	if(homeTeam != null && homeTeam.OU35.TOU.T > 0){
		sum += homeTeam.OU35.TOU.O / homeTeam.OU35.TOU.T;
		count++;
		if(homeTeam.OU35.HOU.T > 0){
			sum += homeTeam.OU35.HOU.O / homeTeam.OU35.HOU.T;
			count++;
		}
		homeLeague = homeTeam.Leagues.find( l => l.Name == league );
		if(homeLeague != null && homeLeague.OU35.TOU.T > 0){
			sum += homeLeague.OU35.TOU.O / homeLeague.OU35.TOU.T;
			count++;
			if(homeLeague.OU35.HOU.T > 0){
				sum += homeLeague.OU35.HOU.O / homeLeague.OU35.HOU.T;
				count++;
			}
		}
	}
	if(awayTeam != null && awayTeam.OU35.TOU.T > 0){
		sum += awayTeam.OU35.TOU.O / awayTeam.OU35.TOU.T;
		count++;
		if(awayTeam.OU35.AOU.T > 0){
			sum += awayTeam.OU35.AOU.O / awayTeam.OU35.AOU.T;
			count++;
		}
		awayLeague = awayTeam.Leagues.find( l => l.Name == league );
		if(awayLeague != null && awayLeague.OU35.TOU.T > 0){
			sum += awayLeague.OU35.TOU.O / awayLeague.OU35.TOU.T;
			count++;
			if(awayLeague.OU35.AOU.T > 0){
				sum += awayLeague.OU35.AOU.O / awayLeague.OU35.AOU.T;
				count++;
			}
		}
	}
	return sum / count;
}

module.exports = {
manipulate: function(dataToManipulate){
	console.log("start");
	dataToManipulate.forEach(function(match){
		match = match.split(',');
		if(match.length==5){
			fixTeams(match[1],match[0],true,[parseInt(match[3]),parseInt(match[4])]);
			fixTeams(match[2],match[0],false,[parseInt(match[3]),parseInt(match[4])]);
		}
	});
	console.log("finish");
	return teams;
},

getOdds: function(match,toSend){
	match = match.split(',');
	var ft = [getAverageFT1(match[1],match[2],match[0]),getAverageFTX(match[1],match[2],match[0]), getAverageFT2(match[1],match[2],match[0])];
	var gg = getAverageGG(match[1],match[2],match[0]);
	var ou15 = getAverageOU15(match[1],match[2],match[0]);
	var ou25 = getAverageOU25(match[1],match[2],match[0]);
	var ou35 = getAverageOU35(match[1],match[2],match[0]);
	var currentMatch = new singleMatch();
	currentMatch.Home = match[1];
	currentMatch.Away = match[2];
	currentMatch.League = match[0];
	if(match.length == 5){
		currentMatch.Score = [];
		currentMatch.Score[0] = parseInt(match[3]);
		currentMatch.Score[1] = parseInt(match[4]);
	}
	currentMatch.H = ft[0];
	currentMatch.X = ft[1];
	currentMatch.A = ft[2];
	currentMatch.GG = gg;
	currentMatch.O15 = ou15;
	currentMatch.O25 = ou25;
	currentMatch.O35 = ou35;
	toSend.push(currentMatch);
}
}


//OBJECTS

function singleMatch(){
	this.Home;
	this.Away;
	this.League;
	this.Score = null;
	this.H;
	this.X;
	this.A;
	this.GG;
	this.O15;
	this.O25;
	this.O35;
}

function Team(name){
	this.Name = name;
	this.Leagues = [];
	this.Rank = new Rank();
	this.HRank = new Rank();
	this.ARank = new Rank();
	this.G = new G();
	this.OU15 = new OU(1.5);
	this.OU25 = new OU(2.5);
	this.OU35 = new OU(3.5);
	this.fix = function (league,isHome,score){
		if(league!=""){
			var leagueFix = this.Leagues.find(l => l.Name==league);
			if(leagueFix == null){
				var newIndex = this.Leagues.push(new Team(league));
				this.Leagues[newIndex-1].fix("",isHome,score);
            }else{
				leagueFix.fix("",isHome,score);
            }	        
		}
		setRankings(this.Rank,isHome,score);
		setRankings(isHome?this.HRank:this.ARank,isHome,score);
		this.G.fix(isHome,score);
		this.OU15.fix(isHome,score);
		this.OU25.fix(isHome,score);
		this.OU35.fix(isHome,score);
	}
	function setRankings(rank,isHome,score){
		var isWin = (isHome && score[0]>score[1]) || (!isHome && score[0]<score[1]);
		var isDraw = score[0] == score[1];
		var isLoss = (isHome && score[0]<score[1]) || (!isHome && score[0]>score[1]);
		rank.T++;
		if(isWin) rank.W++;
		else if(isDraw) rank.D++;
		else if(isLoss) rank.L++;
    }
}

function Rank(){
    this.T=0;
    this.W=0;
    this.D=0;
    this.L=0;
}

function G(){
	this.TG = new innerG();
	this.HG = new innerG();
	this.AG = new innerG();
	this.fix = function(isHome,score){
		setGG(this.TG,score);
		if(isHome)
			setGG(this.HG,score);
		else
			setGG(this.AG,score);
    }
	function setGG(G,score){
		G.T++;
		if(score[0]>0&&score[1]>0)G.G++;
		else G.N++;
    }
}

function innerG(){
	this.T=0;
	this.G=0;
	this.N=0;
}

function OU(toBeat){
	this.toBeat=toBeat; 
	this.TOU = new innerOU();
	this.HOU = new innerOU();
	this.AOU = new innerOU();
	this.fix = function(isHome,score){
		setOU(this.TOU,score);
		if(isHome)
			setOU(this.HOU,score);
		else
			setOU(this.AOU,score);
    }
	function setOU(OU,score){
		OU.T++;
		if(score[0]+score[1]>toBeat)OU.O++;
		else OU.U++;
    }
}

function innerOU(){
	this.T=0;
	this.O=0;
	this.U=0;
}
function League(name) {
	this.Name = name;
	this.Usage=0;
	this.FT=[];
	this.GG=[];
	this.OU15=[];
	this.OU25=[];
	this.OU35=[];
}
function Odd() {
	var dangerLevels=[0.11,0.6,0.7,0.8,0.9,2]
	var danger=["black","red","orange","yellow","lime","green"]
	this.T = 0;
	this.O = 0;
	this.X = 0;
	this.Color = danger[0];
	this.Correct = function(){
		this.T++;
		this.O++;
		this.setColor();
	}
	this.Wrong = function(){
		this.T++;
		this.X++;
		this.setColor();
	}
	this.setColor = function(){
		var perc = this.O/this.T;
		for(var i = 0; i< dangerLevels.length ; i++){
			if(perc<dangerLevels[i]){
				this.Color = danger[i];
				return;
			}
		}
	}
}