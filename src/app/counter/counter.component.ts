import {Component, EventEmitter, Input, Output} from '@angular/core';
@Component({
  selector: 'counter-component',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  @Input() message: string = '';
  @Output() tick: EventEmitter<string> = new EventEmitter<string>();
  intervalValue: number = 1000;
  intervalId: any;

  setInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(() => {
      this.tick.emit(this.message);
    }, this.intervalValue);
  }
}


// On vous demande de créer un composant Angular simple nommé CounterCcmonent
// ayant pour Sélecteur counter - cmponent.
//   L'objectif de ce composant est de :
// • Prendre un message en 'input'
// • Lire une valeur d'intervalle saisie par rutilisateur (entier, en millisecondes)
// • Envoyer le message en tant qu'événements de manière périodique vers son
// •output•
// Au niveau HTML. le composant est composé dun champ < input> avec id"intervalInput"
// et d'un bouton Cutilisateur id="intervalSetButton"
// peut modifier l'intervalle en saisissant une valeur dans le champ puis en cliquant sur
// le bouton.
//   Le composant doit avoir un @Input nommé message et @output nommé tick il
// doit générer des événements de type 'string' vers tick à intervalle régulier
// correspondant à la valeur saisie par l'utilisateur. La chaîne de caractère utilisée pour
// générer les événements provient de l'input message   Le composant doit avoir un @input nommé message et un @output nommé tick. Il
// doit générer des événements de type 'string' vers à intervalle régulier
// correspondant à la valeur saisie par l'utilisateur. La chaîne de caractère utilisée pour
// générer les événements provient de
// Le composant doit être capable de gérer les changements du message et les
// changements de la valeur de fintervalle.
// • VOUS devez modifier le template ainsi que la classe du composant.
// • Un bloc de •preview• est disponible pour vous permettre de débugguervotre
// code. Il affiche votre composant ci-dessous. vous pouvez l'ouvrir et le modifier
// à votre guise.
// • Pour vous aider, ce bloc contient un composant parent qui manipule le
// composant que vous devez créer (affichage dun compteur à côté du message)
// • Ce bloc de •preview• n'est pas pris en compte dans le calcul du score de votre
// code.
