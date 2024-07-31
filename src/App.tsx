import { useEffect, useState } from "react";

import Loader from "./components/molecules/Loader";
import RouterConfig from "./configs/router";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
	}, []);

	return loading ? (
		<Loader />
	) : (
        <AuthProvider>
		    <RouterConfig />
		</AuthProvider>
	);
}

export default App;
