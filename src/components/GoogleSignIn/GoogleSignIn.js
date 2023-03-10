import { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";
import ExercisePage from '../../pages/ExercisePage/ExercisePage';
// import '../styles.css'

export default function SignIn(){
    const [ user, setUser ] = useState({});


    function handleCallbackResponse(response) {
        console.log("Encoded JWY ID Token: " + response.credential);
        const userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
    }

    function handleSignout(event) {
        setUser({});
        document.getElementById("signInDiv").hidden = false;
    };

useEffect(() => {
    /* global google */ 
    google.accounts.id.initialize({
        client_id: "494841019229-t3i1tufer6tenaetnra90dprofo7a00p.apps.googleusercontent.com",
        callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large", marginLeft: "10em"  }
    );
    google.accounts.id.prompt();
}, []);

return (
    <div className="AppSignIn">
        <div id="signInDiv"></div><br/>
        { Object.keys(user).length !== 0 &&
          <ExercisePage/>
        }
           <br/><br/>
           { user &&
        <div>
            {/* <h3 id="signedinas">Signed in as: {user.name}</h3> */}
        </div>
        }
        { Object.keys(user).length !== 0 &&
           <button id="signout" onClick={(e) => handleSignout(e)}>Sign Out</button>
        }
         { Object.keys(user).length !== 0 &&
          <h3 id="signedinas">Signed in as: {user.name}</h3>
        }
         { Object.keys(user).length === 0 &&
           <h3 id="signin">Sign in with Google</h3>
        }
    </div>

)}