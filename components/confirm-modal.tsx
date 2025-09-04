"use clients";
import { Dialog } from "@radix-ui/react-dialog";
import { AlertDialogAction,
        AlertDialog,
        AlertDialogCancel,
        AlertDialogDescription,
        AlertDialogContent,
        AlertDialogFooter,
        AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger

 } from "./ui/alert-dialog";

 interface ConfirmModalProps{
    children: React.ReactNode;
    onConfirm: ()=>void;
    disabled?: boolean;
    description?: string;
    header: string;
 };

 export const ConfirmModal = ({
    children,
    onConfirm,
    disabled,
    description,
    header,
 } : ConfirmModalProps) =>{
    const handleConfirm = () =>{
        onConfirm();
    }
    return(
        <AlertDialog>
            <AlertDialogTrigger>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {header}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction disabled={disabled} onClick={handleConfirm} >
                        Confirm
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
 };