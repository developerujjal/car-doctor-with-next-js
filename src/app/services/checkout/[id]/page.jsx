import CheckOutForm from '@/components/CheckOutForm/CheckOutForm';
import { getSingelData } from '@/services/carServices';

const CheckoutPage = async ({ params }) => {

    const { id } = await params;
    const service = await getSingelData(id);



    return (
        <section>
            <div className="container mx-auto px-4 md:px-12 lg:px-24 py-4">
                <div>
                    <div className="min-h-screen font-inter flex items-center justify-center my-10 md:my-14">
                        <div className="w-full bg-[#F3F3F3] p-4 md:p-12 lg:p-24 rounded-lg shadow-md">
                            <CheckOutForm service={service} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CheckoutPage;