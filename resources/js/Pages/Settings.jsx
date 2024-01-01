import CardOne from "@/Components/CardOne";
import CardTwo from "@/Components/CardTwo";
import CardThree from "@/Components/CardThree";
import CardFour from "@/Components/CardFour";
import ChartOne from "@/Components/ChartOne";
import ChartTwo from "@/Components/ChartTwo";
import Main from '@/Layouts/MainLayout';
import { Head } from "@inertiajs/react";
import ProductTable from "@/Components/ProductTable";
import CategryTable from "@/Components/CategoryTable";
export default function Settings({ categories, products }) {

    return (
        <>
            <Head title="Settings" />
            <Main>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-8">
                    <CardOne />
                    <CardTwo />
                    <CardThree />
                    <CardFour />
                </div>

                <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-8 2xl:gap-8 mb-6">
                    <ChartOne />
                    <ChartTwo />
                </div>
                <div className="mt-4 flex gap-4 md:mt-6 md:gap-6 2xl:mt-8 2xl:gap-8 mb-6">
                    <ProductTable products={products} />
                    <CategryTable categories={categories} />
                </div>
            </Main>
        </>
    );
}