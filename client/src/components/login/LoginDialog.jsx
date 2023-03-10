import React from "react";
import {
	Dialog,
	DialogContent,
	Box,
	Typography,
	TextField,
	Button,
	styled,
} from "@mui/material";
import { useState } from "react";
import { authenticateSignup, authenticateLogin } from "../../service/api";
import { DataContext } from "../../context/Context";
import { useContext } from "react";

const Component = styled(DialogContent)`
	width: 90vh;
	height: 75vh;
	padding: 0;
	padding-top: 0;
`;
const Image = styled(Box)`
	background: #2874f0
		url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
		center 85% no-repeat;
	width: 28%;
	height: 81.8%;
	padding: 45px 35px;
	& > h5,
	& > p {
		color: #ffffff;
		font-weight: 600;
	}
`;
const Wrapper = styled(Box)`
	padding: 20px 45px;
	display: flex;
	flex: 1;
	flex-direction: column;
	& > div,
	& > button,
	& > p {
		margin-top: 15px;
	}
`;

const Error = styled(Typography)`
	font-size: 10px;
	color: #ff6161;
	line-height: 0;
	margin-top: 10px;
	font-weight: 600;
`;

const Text = styled(Typography)`
	color: #878787;
	font-size: 12px;
`;
const LoginButton = styled(Button)`
	text-transform: none;
	background: #fb641b;
	color: #fff;
	height: 45px;
	border-radius: 2px;
	:hover {
		background: #fb641b;
	}
`;
const RequestOTP = styled(Button)`
	text-transform: none;
	background: #fff;
	color: #2874f0;
	height: 48px;
	border-radius: 2px;
	box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;
const CreateAccount = styled(Typography)`
	margin: auto 0 5px 0;
	text-align: center;
	color: #2874f0;
	font-weight: 600;
	font-size: 14px;
	cursor: pointer;
`;

const loginInitialValues = {
	username: "",
	password: "",
};

const signupInitialValues = {
	firstname: "",
	lastname: "",
	username: "",
	email: "",
	password: "",
	phone: "",
};

const accountInitial = {
	login: {
		view: "login",
		heading: "Login",
		subHeading: "Get access to your Orders, Wishlist and Recommendations",
	},
	signup: {
		view: "signup",
		heading: "Looks like you're new here",
		subHeading: "Signup to get started",
	},
};

const LoginDialog = ({ open, setOpen }) => {
	const [account, toggleAccount] = useState(accountInitial.login);
	const [login, setLogin] = useState(loginInitialValues);
	const [signup, setSignup] = useState(signupInitialValues);
	const [error, showError] = useState(false);
	const { setProfile } = useContext(DataContext);

	const toggleSignUp = () => {
		toggleAccount(accountInitial.signup);
	};

	const handleClose = () => {
		setOpen(false);
		toggleAccount(accountInitial.login);
		showError(false);
	};

	const onLogin = (e) => {
		setLogin({ ...login, [e.target.name]: e.target.value });
	};
	const onSignUp = (e) => {
		setSignup({ ...signup, [e.target.name]: e.target.value });
	};

	React.useEffect(() => {
		const storedUserName = localStorage.getItem("user");
		if (storedUserName) {
			setProfile(storedUserName);
		}
	}, [setProfile]);

	const onSignupUser = async () => {
		let response = await authenticateSignup(signup);
		if (!response) return;
		handleClose();
		const data = signup.firstname;
		setProfile(data);
		localStorage.setItem("user", data);
	};

	const onLoginUser = async () => {
		let response = await authenticateLogin(login);
		if (response.status === 200) {
			handleClose();
			const data = response.data.data.firstname;
			setProfile(data);
			localStorage.setItem("user", data);
		} else {
			showError(true);
		}
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			PaperProps={{ sx: { maxWidth: "unset" } }}
		>
			<Component>
				<Box style={{ display: "flex", height: "100%" }}>
					<Image>
						<Typography variant="h5">{account.heading}</Typography>
						<Typography style={{ marginTop: 20 }}>
							{account.subHeading}
						</Typography>
					</Image>
					{account.view === "login" ? (
						<Wrapper>
							<TextField
								variant="standard"
								onChange={(e) => onLogin(e)}
								name="username"
								label="Enter Email"
							/>
							{error && <Error>Please enter valid Email ID / Password</Error>}
							<TextField
								variant="standard"
								onChange={(e) => onLogin(e)}
								name="password"
								label="Enter Password"
							/>
							<Text>
								By continuing, you agree to Flipkart's Terms of Use and Privacy
								Policy.
							</Text>
							<LoginButton onClick={() => onLoginUser()}>Login</LoginButton>
							<Text style={{ textAlign: "center" }}>OR</Text>
							<RequestOTP>Request OTP</RequestOTP>
							<CreateAccount onClick={() => toggleSignUp()}>
								New to Flipkart? Create an account
							</CreateAccount>
						</Wrapper>
					) : (
						<Wrapper>
							<TextField
								variant="standard"
								onChange={(e) => onSignUp(e)}
								name="firstname"
								label=" Firstname"
							/>
							<TextField
								variant="standard"
								onChange={(e) => onSignUp(e)}
								name="lastname"
								label=" Lastname"
							/>
							<TextField
								variant="standard"
								onChange={(e) => onSignUp(e)}
								name="username"
								label=" Username"
							/>
							<TextField
								variant="standard"
								onChange={(e) => onSignUp(e)}
								name="email"
								label=" Email"
							/>
							<TextField
								variant="standard"
								onChange={(e) => onSignUp(e)}
								name="password"
								label=" Password"
							/>
							<TextField
								variant="standard"
								onChange={(e) => onSignUp(e)}
								name="phone"
								label=" Phone"
							/>
							<LoginButton onClick={() => onSignupUser()} type="submit">
								Continue
							</LoginButton>
						</Wrapper>
					)}
				</Box>
			</Component>
		</Dialog>
	);
};

export default LoginDialog;
