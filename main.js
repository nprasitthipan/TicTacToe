'use strict';

var prompt = require('prompt')
var Player = require('./player.js')

const firstPlayer =  'O'
const getBoard = () => {
    return {
        1: '1', 2: '2', 3: '3',
        4: '4', 5: '5', 6: '6',
        7: '7', 8: '8', 9: '9'
    }
}

class TicTacToe {
    constructor() {
        this.winningLines = [
            [1, 2, 3], [4, 5, 6], [7, 8, 9],
            [1, 5, 9], [3, 5, 7],
            [1, 4, 7], [2, 5, 8], [3, 6, 9]
        ];
        this.board = getBoard()

        this.currentPlayer = firstPlayer

        this.players = {
            'O': new Player("Fang"),
            'X': new Player("Jeep")
        }

    }

    start() {
        this.printBoard()
        prompt.start()

        prompt.get(['location'], (err, result) => {
            this.setBoard(result.location)
            if(this.checkWin()){
                //win
                this.printBoard()
                console.log(`${this.currentPlayer} : ${this.players[this.currentPlayer].name}`)
                return
            }else{
                this.switchPlayer()
                this.start()
            }
            
        })
        
    }
    switchPlayer() {
        if(this.currentPlayer === "X")
            this.currentPlayer = "O"
        else
            this.currentPlayer = "X"
        

    }
    checkWin() {
        let checker = 0;
        for(let i=0;i<this.winningLines.length;i++){
            checker = 0;
            for(let j=0;j<this.winningLines[i].length;j++){
                if(this.board[this.winningLines[i][j]] === this.currentPlayer){
                    checker++;
                }
            }
            if(checker === 3){
                return true;
            }
            return false;
        }
    }

    setBoard(location) {
       this.board[location] = this.currentPlayer
    }

    printBoard() {
        console.log(`| ${this.board[1]} | ${this.board[2]} | ${this.board[3]} |`)
        console.log(`| ${this.board[4]} | ${this.board[5]} | ${this.board[6]} |`)
        console.log(`| ${this.board[7]} | ${this.board[8]} | ${this.board[9]} |`)
    }
}

let game = new TicTacToe()
    game.start()