import React from 'react';
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <div>
      <img
        className="logo"
        src=""
        alt="Secret Family Recipes"
      />
      <div className='landingCont'>
        <p className='intro'>Welcome to SecretFamilyRecipesWhateverItEndsUpBeing.com! Here, you have a great place to store your family's cherished and coveted dishes <span>(I swear, if Aunt Cathy tries to steal my cookbook away into the bathroom to sneak a peek one more time...)</span> in a safe and secure manner, whether a recipe has been passed-down for generations, or you whipped up a materpiece in the kitchen this afternoon, you'll never have to forget <span>(or let slip!)</span> a single ingredient ever again!</p>
        <p className='loginPrompt'>Log-in or create an account to begin your collection!</p>
        <div className='bttnCont'>
        <Link to='/login'>
          <button className='fadeBttn'>Log-In</button>
        </Link>
        <Link to='/register'>
          <button className='fadeBttn'>Sign-Up</button>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Landing;