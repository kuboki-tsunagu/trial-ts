import AppLayout from '@/components/Layouts/AppLayout';
import { SidebarWithContentSeparator } from '@/components/baseFromMaterialTailwind/SidebarWithContentSeparator';
import laravelAxios from '@/lib/laravelAxios';
import { Button } from '@material-tailwind/react';
import Head from 'next/head';
import { useQueryCategories } from '@/hooks/useQueryCategories';

const Dashboard = () => {
  const { status, data: categories } = useQueryCategories(); //カスタムフックuseQueryCategoriesを実行し、カテゴリ一覧を取得。

  return (
    <AppLayout
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Home
        </h2>
      }>
      <Head>
        <title>Home</title>
      </Head>

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              You're logged in!
            </div>
            <Button>ボタン</Button>
            <SidebarWithContentSeparator categories={categories} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
