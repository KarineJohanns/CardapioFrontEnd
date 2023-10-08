import { categoriaData } from '../interface/CategoriaData';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';

const API_URL = 'http://localhost:8080';

const postCategoriaData = async (novaCategoria) => {
	const response = await axios.post(API_URL + '/categorias', {
		nomeCategoria: novaCategoria,
	});
	return response.data;
};

export function useCategoriaMutate() {
	const queryClient = useQueryClient();

	const mutate = useMutation(postCategoriaData, {
		retry: 2,
		onSuccess: () => {
			queryClient.invalidateQueries(['categoria-data']);
		},
	});

	return mutate;
}
