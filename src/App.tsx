import { useEffect, useState } from "react";

import Loader from "./common/Loader";
import RouterConfig from "./configs/router";
// import MainLayout from "./components/templates/DashboardLayout";

function App() {
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
	}, []);

	return loading ? (
		<Loader />
	) : (
		// <MainLayout>
			<RouterConfig />
		// </MainLayout>
	);
}

export default App;
