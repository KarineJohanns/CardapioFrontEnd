import { produtoData } from '../interface/ProdutoData';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<produtoData[]> => {
	const response = axios.get(API_URL + '/produtos');

	return response;
};

export function useProdutoData() {
	const query = useQuery({
		queryFn: fetchData,
		queryKey: ['produto-data'],
		retry: 2,
	});

	return {
		...query,
		data: query.data?.data,
	};
}
