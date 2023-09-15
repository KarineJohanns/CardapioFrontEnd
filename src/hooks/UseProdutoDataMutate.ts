import { produtoData } from './../interface/ProdutoData';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';

const API_URL = 'http://localhost:8080';

const postProdutoData = async (data: produtoData): AxiosPromise<any> => {
	const response = axios.post(API_URL + '/produtos', data);
	return response;
};

export const deleteProdutoData = async (id) => {
	try {
		await axios.delete(API_URL + '/produtos/' + id);
	} catch (error) {
		console.log(id);
		throw error;
	}
};

export function useProdutoDataMutate() {
	const QueryClient = useQueryClient();
	const mutate = useMutation({
		mutationFn: postProdutoData,
		retry: 2,
		onSuccess: () => {
			QueryClient.invalidateQueries(['produto-data']);
		},
	});
	return mutate;
}
