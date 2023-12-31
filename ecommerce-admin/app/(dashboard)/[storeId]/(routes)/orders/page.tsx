import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
import { OrderColumn } from "./components/columns";
import { indianCurrencyFormatter} from "@/lib/utils"
import { OrderClient } from "./components/client";
const OrdersPage = async ({
    params
}: {
    params: { storeId: string}
}) => {
    const orders = await prismadb.order.findMany({
        where: {
            storeId: params.storeId
        },
        include: { //array
            orderItems: {
                include: {
                    product: true
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    const formattedOrders: OrderColumn[] = orders.map((item) => ({
     id: item.id,
     phone: item.phone,
     address: item.address,
     products: item.orderItems.map((orderItem) => orderItem.product.name).join(', '),
     totalPrice: indianCurrencyFormatter.format(item.orderItems.reduce((total, item) => {
        return total + Number(item.product.price)
     },0)),
     isPaid: item.isPaid,
     // Starting from 0 its add previous value
     createdAt: format(item.createdAt,"MMMM do,yyyy")
    })) 
    
    return(
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
              < OrderClient data = {formattedOrders} />
            </div>
        </div>
    );
}
export default OrdersPage;