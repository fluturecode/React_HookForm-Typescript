import React from "react"
import { useForm } from "../hooks/useForm"
import styled from "styled-components"

const LoginFormStyled = styled.div`
	display: flex;
`

const LoginFormFields = styled.div`
	flex-direction: column;
`
function Login() {
	const initialState = {
		email: "",
		password: "",
	}

	const { onChange, onSubmit, values } = useForm(
		loginUserCallback,
		initialState
	)

	async function loginUserCallback() {
		// send "values" to database
	}

	return (
		<LoginFormStyled>
			<form onSubmit={onSubmit}>
				<LoginFormFields>
					<input
						name='email'
						id='email'
						type='email'
						placeholder='Email'
						onChange={onChange}
						required
					/>
					<input
						name='password'
						id='password'
						type='password'
						placeholder='Password'
						onChange={onChange}
						required
					/>
					<button type='submit'>Login</button>
				</LoginFormFields>
			</form>
		</LoginFormStyled>
	)
}

export default Login
