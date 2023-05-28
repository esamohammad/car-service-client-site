import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
   const { googleSignIn } = useContext(AuthContext);
   const navigate = useNavigate();
   const location = useLocation();

   const from = location.state?.from?.pathname || "/";

   const handleGoogleSignIn = () => {
      googleSignIn()
         .then(result => {
            const user = result.user;
            console.log(user)

            const currentUser = {
               email: user.email
            }

            console.log(currentUser);
            // get jwt token
            fetch('https://car-service-server-site.vercel.app/jwt', {
               method: 'POST',
               headers: {
                  'content-type': 'application/json'
               },
               body: JSON.stringify(currentUser)
            })
               .then(res => res.json())
               .then(data => {
                  console.log(data);
                  // local storage is the easiest but not the best place to store jwt token
                  localStorage.setItem('genius-token', data.token);
                  navigate(from, { replace: true });
               })

            // navigate(from, { replace: true });
         })
         .catch(error => console.log(error));
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