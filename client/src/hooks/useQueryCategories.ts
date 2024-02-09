import { useQuery } from '@tanstack/react-query';
import laravelAxios from '@/lib/laravelAxios';
import { Category } from '../../types/types';

//Category一覧データを取得するための非同期関数を定義する。
const getCategories = async () => {
  const { data } = await laravelAxios.get<Category[]>(`api/categories`);
  console.log(data, 'useQueryCategoriesが実行');
  return data;
};

export const useQueryCategories = () => {
  return useQuery<Category[], Error>({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: 30000, //キャッシュのデータが「新鮮でない」（stale）と見なされるまでの時間をミリ秒単位で指定。
  });
};
