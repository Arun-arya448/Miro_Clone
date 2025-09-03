"use client";
import { EmptyOrg } from "./_components/empty-org";
import { useOrganization } from "@clerk/nextjs";

interface DashboardPageProps{
    searchParams:{
        search?: string;
        favorites?:string;
    };
};

const DashboardPage = ({
    searchParams,
}:DashboardPageProps) =>{
    const {organization} = useOrganization();
    return(
        <div className="flex-1 h-[calc(100vh-80px)] p-6">
            {JSON.stringify(searchParams)}
            {!organization ? (
                <EmptyOrg/>
            ):(
                <p>Board List!</p>
            )}
        </div>
    );
};
export default DashboardPage;