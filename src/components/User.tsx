import { useState } from 'react';

interface userInter {
	uid: string;
	name: string;
}

const tempUser: userInter = {
	uid: 'example',
	name: 'example',
};

// interfaces: marca los parámetros que user tiene

const User = () => {
	const [user, setUser] = useState<userInter>();

	const login = () => {
		setUser({
			uid: 'ABC123',
			name: 'Álvaro',
		});
	};

	return (
		<>
			<div className="mt-5">
				<h4 className="mb-3">Usuario</h4>
				<button className="btn btn-outline-primary mb-3 me-2" onClick={login}>
					Login
				</button>
				<button
					className="btn btn-outline-primary mb-3"
					onClick={() => setUser(tempUser)}
				>
					Log-out
				</button>

				{!user ? (
					<pre>{JSON.stringify(tempUser)}</pre>
				) : (
					<pre>{JSON.stringify(user)}</pre>
				)}
			</div>
		</>
	);
};

export default User;
