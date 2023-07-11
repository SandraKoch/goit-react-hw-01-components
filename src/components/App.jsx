import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './Friendlist/friends.json';
import transactions from './Transactions/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList, FriendListItem } from './Friendlist/FriendList';
import { TransactionHistory } from './Transactions/TransactionHistory';

export const App = () => (
  <>
    <h1>Task 1</h1>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <h1>Task 2</h1>
    <Statistics title={data.title} stats={data} />
    <h1>Task 3</h1>
    <FriendList friends={friends} />
    <h1>Task 4</h1>
    <TransactionHistory items={transactions} />
  </>
);
