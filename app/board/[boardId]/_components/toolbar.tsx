
import { MousePointer2, Pencil, Square,Circle,StickyNote,Type, Undo2, Redo2} from "lucide-react";
import { ToolButton } from "./tool-button";
export const Toolbar = () => {
    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
            <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
                <ToolButton
                   label="Select"
                   onClick={() => {}}
                   icon={MousePointer2}
                   isActive={false}
                />
                <ToolButton
                   label="type"
                   onClick={() => {}}
                   icon={Type}
                   isActive={false}
                />
                <ToolButton
                   label="StickyNote"
                   onClick={() => {}}
                   icon={StickyNote}
                   isActive={false}
                />
                <ToolButton
                   label="square"
                   onClick={() => {}}
                   icon={Square}
                   isActive={false}
                />
                <ToolButton
                   label="circle"
                   onClick={() => {}}
                   icon={Circle}
                   isActive={false}
                />
                <ToolButton
                   label="Pen"
                   onClick={() => {}}
                   icon={Pencil}
                   isActive={false}
                />
            </div>
            <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
                <ToolButton
                  label="Undo"
                  icon={Undo2}
                  onClick={() => {}}
                  isDisabled = {true}
                />
                <ToolButton
                  label="Redo"
                  icon={Redo2}
                  onClick={() => {}}
                  isDisabled = {true}
                />
            </div>
        </div>
    );
};


export const ToolbarSkeleton = () => {
    return(
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col
         gap-y-4 bg-white h-[350px] w-[52px] shadow-md rounded-md"/>
    );
};

