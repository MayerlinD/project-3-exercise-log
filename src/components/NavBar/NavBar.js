import { Link } from 'react-router-dom';
import AuthPage from '../../pages/AuthPage/AuthPage';
import ExercisePage from '../../pages/ExercisePage/ExercisePage';

export default function NavBar() {
  return (
    <nav>
      <h1>Fit Life</h1>  
      <Link to="/auth" component={AuthPage}>Login/Sign-Up</Link>
      &nbsp; | &nbsp;
      <Link to="/exercises" component={ExercisePage}>Exercises</Link>
    </nav>
  );
}