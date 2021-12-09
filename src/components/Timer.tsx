import { useState, useEffect, useRef } from 'react';

// creamos un type, para pasarle los argumentos/propiedades del componente hijo al componente padre

type TimerProps = {
	miliseconds: number;
};

const Timer = ({ miliseconds }: TimerProps) => {
	const [seconds, setSeconds] = useState(0);
	const ref = useRef<NodeJS.Timeout>();

	// useEffect(() => {
	// 	ref.current && clearInterval(ref.current);

	// 	ref.current = setInterval(
	// 		() => setSeconds((seconds) => seconds + 1),
	// 		miliseconds
	// 	);
	// }, [miliseconds]);

	return (
		<div>
			<h4>
				Timer: <small>{seconds}</small>
			</h4>
		</div>
	);
};

export default Timer;
