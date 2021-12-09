import useForm from '../hooks/useForm';

// Creamos un interface para tipar los datos del formulario

interface FormData {
	email: string;
	name: string;
	age: number;
}

const Form = () => {
	const { form, handleChange } = useForm<FormData>({
		email: 'example@example.com',
		name: 'example',
		age: 99,
	});

	return (
		<form autoComplete="off">
			<div className="mb-3">
				<label className="form-label">Email:</label>
				<input
					type="email"
					className="form-control"
					name="email"
					onChange={handleChange}
					value={form.email}
					placeholder={form.email}
				></input>
			</div>

			<div className="mb-3">
				<label className="form-label">Nombre:</label>
				<input
					type="email"
					className="form-control"
					name="name"
					onChange={handleChange}
					value={form.name}
				></input>
			</div>

			<div className="mb-3">
				<label className="form-label">Edad:</label>
				<input
					type="number"
					className="form-control"
					name="age"
					onChange={handleChange}
					value={form.age}
				></input>
			</div>

			<pre>{JSON.stringify(form)}</pre>
		</form>
	);
};

export default Form;
