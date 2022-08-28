import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //property declaration
  password:string='';
  i:number=0;
  pwLength:any
  includeLetters:boolean=false;
  includeNumbers:boolean=false;
  includeSymbols:boolean=false
  includeUpperCaseLetters:boolean=false;
  onButtonClick(){
    const numbers='1234567890';
    const letters='abcdefghijklmnopqrstuvwxyz';
    const symbols='!@#$%^&*()';
    let validChars='';
    let upperCaseLetters=''
    let generatedPassword=''
    if(this.includeLetters)
    validChars+=letters;
    if(this.includeNumbers)
    validChars+=numbers;
    if(this.includeSymbols)
    validChars+=symbols;
    if(this.includeUpperCaseLetters)
    upperCaseLetters=letters.toUpperCase()

    for(let i=0;i<this.pwLength;i++){
      const index=Math.floor(Math.random()*(validChars.length))
      const index2=Math.floor(Math.random()*upperCaseLetters.length)
      if(generatedPassword.length<this.pwLength){
        if(this.includeLetters||this.includeNumbers||this.includeSymbols)
        generatedPassword+=validChars[index]
        if(generatedPassword.length<this.pwLength){
          if(this.includeUpperCaseLetters &&( !this.includeLetters||!this.includeNumbers||!this.includeSymbols)){
            generatedPassword+=upperCaseLetters[index2];
          }else if(this.includeUpperCaseLetters &&(this.includeLetters||this.includeNumbers||this.includeSymbols)&&i<1){
            generatedPassword+=upperCaseLetters[index2];
          }
        }
      }
    }
    if((this.includeLetters||this.includeNumbers||this.includeSymbols||this.includeUpperCaseLetters)&&(this.pwLength&&this.pwLength>0)){

      this.password=generatedPassword
    }
    else if(!this.pwLength || this.pwLength==0){

      this.password='Please Enter The Length'
    }
    else{
      this.password="Please select the checkBox"
    }

    console.log(this.pwLength);
  }
  letterCheckBox(){
  this.includeLetters=!this.includeLetters    
  }
  numbersCheckBox(){
    this.includeNumbers=!this.includeNumbers
  }
  symbolsCheckBox(){
    this.includeSymbols=!this.includeSymbols
  }
  upperCaseLetterCheckBox(){
    this.includeUpperCaseLetters=!this.includeUpperCaseLetters
  }
  lengthInput(value:string){
    this.pwLength=0
    let parseValue=parseInt(value)
    if(!isNaN(parseValue)){
      this.pwLength=parseValue
    }
  }
  copyToClipBoard(inputElement:any){
    inputElement.select()
    document.execCommand('copy',true);
    inputElement.setSelectionRange(0, 0);
    console.log(inputElement);
  }
  outputHoverLeave(){
    console.log('hovver ');
    return true
  }
  outputHoverEnter(){
    return true
  }
}
