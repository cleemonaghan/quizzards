import React from "react";
import NavBar from "./components/navbar";
import { withAuthenticator, Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import "./App.css";

export default withAuthenticator(function App() {
	return (
		<Authenticator>
			{({ signOut }) => (
				<main>
					<React.Fragment>
						<NavBar signOut={signOut} />
					</React.Fragment>
				</main>
			)}
		</Authenticator>
	);
});
