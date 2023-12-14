import BrandOne from '@/Assets/brand-01.svg';
import BrandTwo from '@/Assets/brand-02.svg';
import BrandThree from '@/Assets/brand-03.svg';
import BrandFour from '@/Assets/brand-04.svg';
import BrandFive from '@/Assets/brand-05.svg';
import ButtonIcon from './ButtonIcon';
const CategryTable = ({ categories }) => {


    const categoriesLists = categories?.map((e) => {
        return (
            <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
                <div className="flex items-center gap-3 p-3 xl:p-5">
                    <p className="hidden text-black  sm:block">{e.name}</p>
                </div>
                <div className="flex items-center gap-3 p-3 xl:p-5">
                    <p className="hidden text-black  sm:block">{e.products_count}</p>
                </div>
            </div>
        );
    });

    return (
        <div className="rounded-lg  bg-white px-5 pt-6 pb-3 shadow-lg  sm:px-8 xl:pb-1">
            <div className='flex w-full justify-between mb-4'>
                <h4 className="mb-6 text-xl font-semibold text-black ">
                    Categories
                </h4>
                <ButtonIcon link={route('admin.category.index')} title={'Add Category'} />
            </div>

            <div className="flex flex-col">
                <div className="grid grid-cols-4 rounded-sm bg-gray-2  sm:grid-cols-6">

                    <div className="p-3 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Name
                        </h5>
                    </div>
                    <div className="p-3 text-center xl:p-5">
                        <p className="text-sm font-medium uppercase xsm:text-base">
                            Products
                        </p>
                    </div>
                </div>

                {categoriesLists}





                {/* <div className='flex items-center justify-center p-10'>
          <h1 className='text-grayText'>Not Found</h1>
        </div> */}
            </div>
        </div>
    );
};

export default CategryTable;
