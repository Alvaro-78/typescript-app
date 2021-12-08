import { useState } from 'react';
import Timer from './Timer';

const TimeFather = () => {
	const [miliseconds, setMiliseconds] = useState(1000);

	return (
		<>
			<div>
				<span>Milisegundos {miliseconds}</span>
				<br />
				<div className="mt-3 mb-3">
					<button
						className="btn btn-outline-success me-2"
						onClick={() => setMiliseconds(1000)}
					>
						1000
					</button>
					<button
						className="btn btn-outline-success"
						onClick={() => setMiliseconds(2000)}
					>
						2000
					</button>
				</div>

				<Timer miliseconds={miliseconds} />
			</div>
		</>
	);
};

export default TimeFather;
