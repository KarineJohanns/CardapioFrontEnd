import { categoriaData } from '../../interface/CategoriaData';
import { useQuery, useMutation } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<categoriaData[]> => {
	const response = axios.get(API_URL + '/categorias');

	return response;
};

export function useCategoriaData() {
	const query = useQuery({
		queryFn: fetchData,
		queryKey: ['categoria-data'],
		retry: 2,
	});

	const refetchCategoriaData = useMutation(() => fetchData(), {
		onSuccess: () => {
			query.refetch();
		},
		onError: (error) => {
			console.error('Erro na mutação:', error);
		},
	});

	return {
		...query,
		data: query.data?.data,
		refetchCategoriaData: refetchCategoriaData.mutate,
	};
}
