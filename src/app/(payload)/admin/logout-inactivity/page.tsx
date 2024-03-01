/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import React from 'react'
import {
  Logout,
  generateMetadata as generateMeta,
} from "@payloadcms/next/pages/Logout/index";
import { Metadata } from "next";
import config from "@payload-config";

type Args = {
  searchParams: { [key: string]: string | string[] };
};

export const generateMetadata = async (): Promise<Metadata> =>
  generateMeta({ config });

const Page = async ({ searchParams }: Args) => (
  <Logout config={config} searchParams={searchParams} inactivity />
);

export default Page;
