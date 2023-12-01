import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "545c78918d494830a06640e6aafb3bba",
	},
});
