'use client';

import { useRouter,usePathname,useSearchParams } from "next/navigation";


export default function ExampleClient(){

    const  router= useRouter();

    const pathname = usePathname();

    const searchParams = useSearchParams();

}