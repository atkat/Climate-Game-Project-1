class End {
   draw() {
       if (game.player.score< 0) {
        background('black')
        textSize(50);
        fill('pink'); 
        textAlign(CENTER, CENTER);
        text("Game Over",0, 0, 1000, 500);
        textSize(12);
        textAlign(CENTER,CENTER);
        text("Press 'R' to play again.",0, 0, 1000, 600);
       }

       if (game.player.score >= 20) {
        background('pink')
        textSize(50);
        textAlign(CENTER, CENTER);
        text("You've saved us", 0, 0, 1000, 500);
        textSize(12);
        fill('#283747'); 
        textAlign(CENTER,CENTER);
        text("Press 'R' to play again.", 0, 0, 1000, 600);
        fill('#283747'); 
       }

    
   }
}