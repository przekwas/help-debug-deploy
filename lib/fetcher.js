import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export const baseURL = process.env.BASE_URL || 'http://localhost:3000';

export default function Fetcher(endpoint) {
	const { data, error } = useSWR(`/${baseURL}${endpoint}`, fetcher);

	return {
		data,
		isLoading: !error && !data,
		isError: error
	};
}
