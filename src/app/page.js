import Login from '@/components/Login';
import './App.scss';
import { authenticateUser } from '@/actions/userActions';

export default function Home() {
  
  return (
    <main className="Page HomePage">
      <Login onSubmit={authenticateUser}/>
    </main>
  );
}
