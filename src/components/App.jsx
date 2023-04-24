import user from '../constants/user.json';
import { Profile } from './Profile/Profile';


export const App = () => {
  console.log(user)
  return (
    <div>
      <Profile />
    </div>
  );
};
