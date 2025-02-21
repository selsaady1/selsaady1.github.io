// DoubleDice.java file renamed Main for the replit online ide
import java.util.Scanner;

public class Main {

   // This declare the two variables of Die class
   private Die die1;
   private Die die2;

   // This starts method of the class
   public static void main(String[] args) {
       // This creates an instance of class and call play method
       Main game = new Main();
       game.play();

   }

   // This constructs two Die class objects
   public Main() {
       die1 = new Die();
       die2 = new Die();
   }

   // The play method to start the dice game
   public void play() {
       // Initial amount of the player
       double amount = 100;

       // The bet amount that is to bet
       double bet = 0;

       // in order to check if valid
       boolean isValidBet = true;

       Scanner console = new Scanner(System.in);

       // The game starts here
       do {
           // Prints amount in two decimal places and uses two decimal place methood
           System.out.println(String.format("You have $%.2f", amount));

           // Get player's input
           do {
               isValidBet = true;
              
               try {
                   
                   System.out.printf("How much would you like to bet (Enter 0 to quit)? ");

                   // 
                   bet = Double.parseDouble(console.nextLine().trim());

                   // in order to make sure that the bet is valid
                   if ((bet > amount) || (bet < 0)) {

                      
                       isValidBet = false;

                       // Print error
                       System.out.println("Error: Decimal needing to be a positive decimal, less than the amount");
                   }

               } catch (NumberFormatException nfe) {
                   
                   isValidBet = false;

                   // Print error
                   System.out.println("ERROR Invalid bet amount");
               }
           } while (!isValidBet);

           // This is made in order to check if the bet is zero
           if (bet == 0)
               System.out.println("See you around, winner!");
           else {
               // Rolls the die
               die1.roll();
               die2.roll();

               // Print die values
               System.out.println("You rolled a "+die1.toString()+" and "+die2.toString());

               // Compare die values to check if player won or lost
               if (die1.equals(die2)) { // Win
                   amount = bet + amount;
                   System.out.println(String.format("You win $%.2f", bet));

               } else { // player lose
                   amount = amount - bet;
                   System.out.println(String.format("You lose $%.2f", bet));
               }

               // if player amount is zero
               if (amount == 0) {
                   System.out.println();
                   System.out.println("You are out of money!");
                   System.out.println("Better luck next time");
               }
           }
           System.out.println();

       } while (amount > 0 && bet != 0);
   }// This is the end of the method
} // This is the end of the class