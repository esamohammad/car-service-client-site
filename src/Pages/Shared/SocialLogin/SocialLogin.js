import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
   const {googleSignIn}=useContext(AuthContext);

const handleGoogleSignIn=()=>{
   googleSignIn()
   .then(result =>{
      const user=result.user;
      console.log(user)
   })
   .catch(err=> console.log(err));
}





   return (
      <div>
         <h1 className="text-center"><small>Social Login</small></h1>
         <p className="text-center">
            <button onClick={handleGoogleSignIn} className="btt btn-ghost">Google</button>
         </p>
      </div>
   );
};

export default SocialLogin;