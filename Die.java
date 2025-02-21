//Die.java class program for the code
import java.util.Random;
public class Die
{
   public int value;
   private Random rand;
   
   public Die()
   {
       rand=new Random();
   }
   // This is the roll methood
   public void roll()
   {
       value=rand.nextInt(6)+1;
   }
   //if both dies have the same value is true
   public boolean equals(Die die2)
   {
       return value==die2.value;
   }
   //returns the string after
   public String toString()
   {
       String text="";
       switch(value)
       {
       case 1: text="one";break;
       case 2: text="two";break;
       case 3: text="three";break;
       case 4: text="four";break;
       case 5: text="five";break;
       case 6: text="six";break;
       }
       return text;
   }
}//end of Die class!!!