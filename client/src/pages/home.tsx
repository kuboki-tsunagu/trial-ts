import AppLayout from '@/components/Layouts/AppLayout';
import { Button } from '@material-tailwind/react';
import Head from 'next/head';

const Dashboard = () => {
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
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
