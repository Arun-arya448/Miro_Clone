import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Dialog,DialogContent,DialogTrigger,DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const EmptyOrg = () =>{
    return(
        <div className="h-full flex flex-col items-center justify-center">
            <Image
                src="/elements.svg"
                alt="Empty"
                height={200}
                width={200}
            />
            <h2 className="text-2xl font-semibold mt-6">Welcome to Boardy</h2>
            <p className="text-muted-foreground text-sm mt-2">Create an Organization to get started</p>
            <div className="mt-6">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="lg">
                            Create Organization
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[480px] rounded-xl border bg-white p-6 shadow-lg">
                        <VisuallyHidden>
                            <DialogTitle>Create Organization</DialogTitle>
                        </VisuallyHidden>
                        <CreateOrganization/>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};