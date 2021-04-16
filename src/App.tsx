import React from "react"
import Login from "./components/Login"
import styled from "styled-components"

const LoginContainer = styled.div`
	display: flex;
	margin: 100px 100px 100px 100px;
	border: 2px solid green;
`
const LoginInnerContainer = styled.div`
	padding: 100px 100px 100px 100px;
`
function App(): JSX.Element {
	return (
		<LoginContainer>
			<LoginInnerContainer>
				<Login />
			</LoginInnerContainer>
		</LoginContainer>
	)
}

export default App
