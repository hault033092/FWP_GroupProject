import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../../features/home";
import BecomeFreelancerPage from "../../features/becomeFreelancer";
import FindFreelancerPage from "../../features/findFreelancer";
import FAQPage from "../../features/faq";

const RouterView = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route
					path="/find-freelancer"
					element={<FindFreelancerPage />}
				></Route>
				<Route
					path="/become-freelancer"
					element={<BecomeFreelancerPage />}
				></Route>
				<Route path="/faq" element={<FAQPage />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RouterView;
