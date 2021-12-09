import { useState, ChangeEvent } from 'react';

// T es el tipo genérico extendemos de object, por que nuestro useForm es un objeto, sino podría ser tipo array u otro

const useForm = <T extends Object>(initState: T) => {
	const [form, setForm] = useState(initState);

	// desestructuramos en evento, sacamos el target y le decimos que es  de ChangeEvent<HTMLInputElement>, para evitar hacer un 'any'
	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = target;
		setForm({
			...form,
			[name]: value,
		});
	};
	return {
		form,
		handleChange,
		...form,
	};
};

export default useForm;
