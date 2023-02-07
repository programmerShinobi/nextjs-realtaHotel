import { Box } from "@mui/material";
import Head from "next/head";

export default function DashboardAll() {
  return (
    <Box>
      <Head>
        <title>Dashboard</title>
      </Head>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard / All</p>
      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="rounded bg-white h-40 shadow-sm"></div>
        <div className="rounded bg-white h-40 shadow-sm"></div>
        <div className="rounded bg-white h-40 shadow-sm"></div>
      </div>
      <div className="grid col-1 bg-white h-96 shadow-sm"></div>
    </Box>
  );
}