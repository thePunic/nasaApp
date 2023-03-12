import { Component,OnInit,ViewChild, ElementRef} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/'
import {asteroids}  from './asteroids'
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatRadioButton } from '@angular/material/radio';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})





export class AppComponent implements OnInit {

  selected: string;
      @ViewChild('start', {static: false}) matRadioButton : MatRadioButton;

  constructor(private formBuilder: FormBuilder,private http:HttpClient) {        
    
     // simulation d'un click sur la bouton radio material 'indifférent' pour 
     //l'affichage de donnée de départ

        setTimeout(() =>{
          let event = new MouseEvent('click', {bubbles: true});
          this.matRadioButton._inputElement.nativeElement.dispatchEvent(event);
        }, 1000);
      
    


  }

 
 
  

// interface stockant les données renvoyés en réponse de la requête http
// l'interface 'asteroids' décrite dans le fichier asteroids.ts
// reprend la structure du JSON de la NASA

DonneeNasa : asteroids ;


ngOnInit(){

  // la requête http est réaliser une seule fois à l'initialisation puis est stocké dans une variable object
  
  this.GetNasaInfos().subscribe((data) => this.DonneeNasa = data) 
  
}

// variable qui récupère les deux champs du formulaire

Criteria = this.formBuilder.group({
 diametre: ['0',Validators.required],  
  danger: ['']
});


// fonction qui envoie une  requête http GET  vers l'URL du service de la Nasa
GetNasaInfos():Observable<asteroids>{
  return  this.http.get<asteroids>("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=2VLI0qBbrbVcs9vrNUH8vpnfh1DMaYO18EKcIojl")
  

 
  


}

// Malgré que le type de l'input soit 'number' la valeur du Dom est un 'string'
//d'après mes recherche c'est un bug d'Angular
//c'est pour cela que c'ette fonction à été implémenté

ConvertToInt(valeur?:any):number{

  console.log( parseFloat(valeur))

  if(valeur===undefined || ''){

    valeur=0;

  }

return parseFloat(valeur)

}


replacerHttp(url:string){

return url.replace("http","https")
  
}


}



