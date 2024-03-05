import prismadb from "@/lib/prismadb";
import React from "react";

const BillBoardsPage = async ({ params }: { params: { storeId: string } }) => {
    
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

//   const formattedBillboards: BillboardColumn[] = billboards.map(() => ({
//     id: item.id,
//     label: 
//   }))

  return <div>Bill</div>;
};

export default BillBoardsPage;
