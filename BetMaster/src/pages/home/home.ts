import { KeyValuePair } from './../../models/KeyValuePair';
import { DataProvider } from './../../providers/data/data';
import { Match } from './../../models/match';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DecimalPipe } from '@angular/common';
import moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentDate : moment.Moment;
  values : number[];
  colors : string[];
  matches : Match[];
  filter : string;
  constructor(public navCtrl: NavController, public dataProvider: DataProvider) {
    this.currentDate = moment();
    this.values = [0.5,0.6,0.7,0.8,0.9,1,5];
    this.colors = ["veryLow","low","medium","high","veryHigh","veryHigh","veryHigh"];
    this.changeDate(0);
    this.filter = "";
  }
  changeDate(op : number){
    this.currentDate= moment( this.currentDate.add(op,'days'));
    var parsedDate = this.parseDate(this.currentDate);
    this.dataProvider.getMatchesByDate(parsedDate).subscribe(data => this.matches=data.sort((a, b) => {
        if (a.Home < b.Home) return -1;
        else if (a.Home > b.Home) return 1;
        else return 0;
      }));
    
  }

  parseDate(date: moment.Moment){
      return date.year()+"-"+(date.month()+1)+"-"+date.date()
  }

  isMaxed(isNext: boolean){
    var today = moment();
    if(isNext){
      return today.diff(this.currentDate,'days')<=-1;
    }else {
      return today.diff(this.currentDate,'days')>=2;
    }
  }


  getTopThree(match: Match){
    var parsedMatch = this.parseMatch(match);
    var property = ["","",""];
    var odd = [0,0,0];
    parsedMatch.forEach(m => {
      if(!isNaN(m.Value)){
        if(odd[0] <= m.Value){
          odd[2]=odd[1];
          odd[1]=odd[0];
          odd[0]=m.Value;
          property[2]=property[1];
          property[1]=property[0];
          property[0]=m.Key;
        }else if(odd[1] <= m.Value){
          odd[2]=odd[1];
          odd[1]=m.Value;
          property[2]=property[1];
          property[1]=m.Key;
        }else if(odd[2] <= m.Value){
          odd[2]=m.Value;
          property[2]=m.Key;
        }      
      }
    });
    return [new KeyValuePair(property[0],odd[0]),new KeyValuePair(property[1],odd[1]),new KeyValuePair(property[2],odd[2]),];
  }


  parseMatch(match: Match){
    var FT = new KeyValuePair("",0);
    if(match.H >= match.X && match.H >=match.A){
        FT.Key+="1";
        FT.Value+=match.H;
        if(match.X >= match.A && match.X >= 0.34){
            FT.Key+="~X";
            FT.Value+=match.X;
        }else if(match.A >= 0.34){
            FT.Key+="~2";
            FT.Value+=match.A;
        }
    }else if(match.A >= match.H && match.A >=match.X){
        FT.Key+="2";
        FT.Value+=match.A;
        if(match.X >= match.H && match.X >= 0.34){
            FT.Key+="~X";
            FT.Value+=match.X;
        }else if(match.H >= 0.34){
            FT.Key+="~1";
            FT.Value+=match.H;
        }
    }else if(match.X >= match.H && match.X >=match.A){
        FT.Key+="X";
        FT.Value+=match.X;
        if(match.H >= match.A && match.H >= 0.34){
            FT.Key+="~1";
            FT.Value+=match.H;
        }else if(match.A >= 0.34){
            FT.Key+="~2";
            FT.Value+=match.A;
        }
    }

    var GG = new KeyValuePair("",0);
    if(match.GG >= 0.5 ){
        GG.Key = "GG";
        GG.Value = match.GG;
    }else {
        GG.Key = "NG";
        GG.Value = 1 - match.GG;
    }

    var O15 = new KeyValuePair("",0);
    if(match.O15 >= 0.5 ){
        O15.Key = "O15";
        O15.Value = match.O15;
    }else {
        O15.Key = "U15";
        O15.Value = 1 - match.O15;
    }
    var O25 = new KeyValuePair("",0);
    if(match.O25 >= 0.5 ){
        O25.Key = "O25";
        O25.Value = match.O25;
    }else {
        O25.Key = "U25";
        O25.Value = 1 - match.O25;
    }
    var O35 = new KeyValuePair("",0);
    if(match.O35 >= 0.5 ){
        O35.Key = "O35";
        O35.Value = match.O35;
    }else {
        O35.Key = "U35";
        O35.Value = 1 - match.O35;
    }

    return [FT,GG,O15,O25,O35];
  }

  getColor(value: number){
      for(var i = 0 ; i < this.values.length ; i++){
          if(this.values[i]>=value) return this.colors[i];
      }
      return "black";
  }

  hasFinished(score: number[]){
      return (score && score.length > 0 );
  }
  getResultColor(score: number[],prediction:string){
      switch(prediction){
        case "1": return score[0] > score[1]? "veryHigh" : "wrong";
        case "1~X":
        case "X~1":
            return score[0] >= score[1]? "veryHigh" : "wrong";
        case "X": return score[0] == score[1]? "veryHigh" : "wrong";
        case "2~X": 
        case "X~2": 
            return score[0] <= score[1]? "veryHigh" : "wrong";
        case "2": return score[0] < score[1]? "veryHigh" : "wrong";
        case "1~2":
        case "2~1": 
            return score[0] > score[1] || score[0] < score[1]? "veryHigh" : "wrong";
        case "O15": return score[0] + score[1] > 1.5? "veryHigh" : "wrong";
        case "U15": return score[0] + score[1] < 1.5? "veryHigh" : "wrong";
        case "O25": return score[0] + score[1] > 2.5? "veryHigh" : "wrong";
        case "U25": return score[0] + score[1] < 2.5? "veryHigh" : "wrong";
        case "O35": return score[0] + score[1] > 3.5? "veryHigh" : "wrong";
        case "U35": return score[0] + score[1] < 3.5? "veryHigh" : "wrong";
        case "GG": return score[0] > 0 && score[1] > 0? "veryHigh" : "wrong";
        case "NG": return score[0] == 0 || score[1] == 0? "veryHigh" : "wrong";
        default : return "";
      }
  }
  fixedValue(value: number){
      value = Math.floor(value*100);
      return value <100 ? value : 90;
  }
  filterMatches(){
      var filteredResults = [];
      var filter = this.filter.toLowerCase();
      this.matches.forEach(match => {
        if(match.Home.toLowerCase().includes(filter)||match.Away.toLowerCase().includes(filter) ) filteredResults.push(match);
      });
      return filteredResults;
  }
}
