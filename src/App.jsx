import React from "react";
import Navigation from "./components/Navigation/Navigation";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import Payment from "./components/payment/payment";
import SingleShare from "./components/SingleShare/SingleShare";
function App() {
	return (

		<div className="App">
			<Navigation/>
			<SingleShare/>
		</div>
	);
}

export default App;
