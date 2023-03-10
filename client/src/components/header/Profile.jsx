import React, { useState } from "react";
import { Box, Typography, MenuItem, Menu, styled } from "@mui/material";
import { PowerSettingsNew } from "@mui/icons-material";

const Component = styled(Menu)`
	margin-top: 5px;
`;
const Logout = styled(Typography)`
	font-size: 13px;
	margin-left: 5px;
`;

const Profile = ({ profile, setProfile }) => {
	const [open, setOpen] = useState(false);

	const handleClick = (e) => {
		setOpen(e.currentTarget);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const logout = () => {
		setProfile("");
	};

	return (
		<Box onClick={handleClick}>
			<Typography style={{ marginTop: 2, cursor: "pointer" }}>
				{profile}
			</Typography>
			<Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
				<MenuItem
					onClick={() => {
						handleClose();
						logout();
						localStorage.removeItem("user");
					}}
				>
					<PowerSettingsNew fontSize="small" color="primary" />
					<Logout>Logout</Logout>
				</MenuItem>
			</Component>
		</Box>
	);
};

export default Profile;
