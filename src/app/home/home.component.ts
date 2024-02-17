import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  words: string[] = [
    'book',
    'sofa',
    'table',
    'chair',
    'laptop',
    'car',
    'mirror',
  ];
  selectedWord: string[] = [];
  inputValues: string[] = [];
  feedback: string[] = [];
  gameStarted: boolean = false;

  startGame() {
    this.gameStarted = true;
    this.selectWord();
  }
  resetGame() {
    this.gameStarted = false;
    this.selectedWord = [];
    this.inputValues = [];
    this.feedback = [];
  }
  selectWord() {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    console.log('Selected Word : ', this.words[randomIndex]);

    this.selectedWord = this.words[randomIndex].split('');
    this.inputValues = Array(this.selectedWord.length).fill('');
    this.feedback = Array(this.selectedWord.length).fill('');
  }

  checkInput(index: number, value: string) {
    if (this.selectedWord[index] === value) {
      this.feedback[index] = 'green';
    } else if (this.selectedWord.includes(value)) {
      this.feedback[index] = 'yellow';
      setTimeout(() => {
        if (this.feedback[index] === 'yellow') {
          this.feedback[index] = '';
          this.inputValues[index] = '';
        }
      }, 1000);
    } else {
      this.feedback[index] = 'red';
      setTimeout(() => {
        if (this.feedback[index] === 'red') {
          this.feedback[index] = '';
          this.inputValues[index] = '';
        }
      }, 1000);
    }

    if (this.inputValues.join('') === this.selectedWord.join('')) {
      setTimeout(() => {
        alert('Congratulations! You guessed the word!');
        this.resetGame();
      }, 1000);
    }
  }
}
