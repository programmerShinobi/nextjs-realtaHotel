import { Box } from "@mui/material";
import Head from "next/head";

export default function PaymentTransaction() {
  return (
    <Box>
      <Head>
        <title>Payment</title>
      </Head>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Payment / Transaction</p>
    </Box>
  );
}