import React from "react";
import Navigation from "./components/Navigation/Navigation";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import Payment from "./components/payment/payment";
import SingleShare from "./components/SingleShare/SingleShare";
import UPI from "./components/UPI/UPI";
function App() {
	return (

		<div className="App">
			<Navigation/>
			<UPI/>
		</div>
	);
}

export default App;
