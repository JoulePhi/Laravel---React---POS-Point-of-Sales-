import ButtonIcon from './ButtonIcon';
const ProductTable = ({ products }) => {

  const productList = products?.map((e) => {
    return (
      <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
        <div className="flex items-center gap-3 p-3 xl:p-5">
          <div className="flex-shrink-0">
            <img src={`storage/images/${e.image}`} alt="Brand" className='w-20 h-20 object-cover rounded-2xl mr-6' />
          </div>
        </div>

        <div className="flex items-center justify-center p-3 xl:p-5">
          <p className="text-black ">{e.name}</p>
        </div>

        <div className="flex items-center justify-center p-3 xl:p-5">
          <p className="text-meta-3">{e.price}</p>
        </div>

        <div className="hidden items-center justify-center p-3 sm:flex xl:p-5">
          <p className="text-black ">{e.quantity}</p>
        </div>
        <div className="hidden items-center justify-center p-3 sm:flex xl:p-5">
          <p className="text-black ">{e.quantity}</p>
        </div>


      </div>
    )
  })

  return (
    <div className="rounded-lg  bg-white px-5 pt-6 pb-3 shadow-lg  sm:px-8 xl:pb-1">
      <div className='flex w-full justify-between mb-4'>
        <h4 className="mb-6 text-xl font-semibold text-black ">
          Products
        </h4>
        <ButtonIcon link={route('admin.product.index')} title={'Add Product'} />
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-4 rounded-sm bg-gray-2  sm:grid-cols-6">
          <div className="p-3 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Image
            </h5>
          </div>
          <div className="p-3 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-3 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Price
            </h5>
          </div>
          <div className="hidden p-3 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Quantity
            </h5>
          </div>
          <div className="hidden p-3 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Sold
            </h5>
          </div>
          <div className="hidden p-3 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Category
            </h5>
          </div>
        </div>

        {productList}


        {/* <div className='flex items-center justify-center p-10'>
          <h1 className='text-grayText'>Not Found</h1>
        </div> */}
      </div>
    </div>
  );
};

export default ProductTable;
