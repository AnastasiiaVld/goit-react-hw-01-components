import user from '../constants/user.json';
import { Profile } from './Profile/Profile';

import data from '../constants/data.json'
import { Statistics } from './Statistics/Statistics';

import friends from '../constants/friends.json'
import { FriendList } from './FriendList/FriendList';

import transactions from '../constants/transactions.json'
import { TransactionHistory } from './TransactionHistory/TransactionHistory';



export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} /> 
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
