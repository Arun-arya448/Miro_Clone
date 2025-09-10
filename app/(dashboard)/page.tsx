"use client";
import { EmptyOrg } from "./_components/empty-org";
import { useOrganization } from "@clerk/nextjs";
import { BoardList } from "./_components/board-list";

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
    //flatten props before passing to client component
    // const query = {
    // search: searchParams.search ?? "",
    // favorites: searchParams.favorites ?? "",
    // };
    return(
        <div className="flex-1 h-[calc(100vh-80px)] p-6">
            {!organization ? (
                <EmptyOrg/>
            ):(
                <BoardList orgId={organization.id} query={searchParams}/>
            )}
        </div>
    );
};
export default DashboardPage;