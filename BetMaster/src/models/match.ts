import { KeyValuePair } from './KeyValuePair';
export class Match{
    public Score: string;
    public League: string;
    public Home: string;
    public Away: string;
    public H: number;
    public X: number;
    public A: number;
    public GG: number;
    public O15: number;
    public O25: number;
    public O35: number;
    constructor(obj : any){
        if(obj){
            this.Score = obj.Score;
            this.League = obj.League;
            this.Home = obj.Home;
            this.Away = obj.Away;
            this.H = obj.H;
            this.X = obj.X;
            this.A = obj.A;
            this.GG = obj.GG;
            this.O15 = obj.O15;
            this.O25 = obj.O25;
            this.O35 = obj.O35;
        }
    }/*
    public parseMatch() : KeyValuePair[] {
        var FT = new KeyValuePair("",0);
        if(this.H >= this.X && this.H >=this.A){
            FT.Key+="1";
            FT.Value+=this.H;
            if(this.X >= this.A && this.X >= 0.34){
                FT.Key+="X";
                FT.Value+=this.X;
            }else if(this.A >= 0.34){
                FT.Key+="2";
                FT.Value+=this.A;
            }
        }else if(this.A >= this.H && this.A >=this.X){
            FT.Key+="2";
            FT.Value+=this.A;
            if(this.X >= this.H && this.X >= 0.34){
                FT.Key+="X";
                FT.Value+=this.X;
            }else if(this.H >= 0.34){
                FT.Key="1" + FT.Key;
                FT.Value+=this.H;
            }
        }else if(this.X >= this.H && this.X >=this.A){
            FT.Key+="X";
            FT.Value+=this.X;
            if(this.H >= this.A && this.H >= 0.34){
                FT.Key="1"+FT.Key;
                FT.Value+=this.H;
            }else if(this.A >= 0.34){
                FT.Key="2"+FT.Key;
                FT.Value+=this.A;
            }
        }

        var GG = new KeyValuePair("",0);
        if(this.GG >= 0.5 ){
            GG.Key = "GG";
            GG.Value = this.GG;
        }else {
            GG.Key = "NG";
            GG.Value = 1 - this.GG;
        }

        var O15 = new KeyValuePair("",0);
        if(this.O15 >= 0.5 ){
            O15.Key = "O15";
            O15.Value = this.O15;
        }else {
            O15.Key = "U15";
            O15.Value = 1 - this.O15;
        }
        var O25 = new KeyValuePair("",0);
        if(this.O25 >= 0.5 ){
            O25.Key = "O25";
            O25.Value = this.O25;
        }else {
            O25.Key = "U25";
            O25.Value = 1 - this.O25;
        }
        var O35 = new KeyValuePair("",0);
        if(this.O35 >= 0.5 ){
            O35.Key = "O35";
            O35.Value = this.O35;
        }else {
            O35.Key = "U35";
            O35.Value = 1 - this.O35;
        }

        return [FT,GG,O15,O25,O35];
    }*/
}