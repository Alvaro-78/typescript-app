import Counter from './components/Counter';
import Form from './components/Form';
import TimeFather from './components/TimeFather';
import User from './components/User';

function App() {
	return (
		<>
			<h1>React TypeScript App</h1>
			<hr />
			<h2>useState</h2>
			<Counter />
			<User />
			<hr />

			<h2>useEffect - useRef</h2>
			<TimeFather />
			<hr />

			<h2>customHooks</h2>
			<Form />

			<br />
		</>
	);
}

export default App;
