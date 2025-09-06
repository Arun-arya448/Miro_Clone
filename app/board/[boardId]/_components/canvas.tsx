"use client";
import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";
// import { useSelf } from "@liveblocks/react/suspense"; //not @liveblocks/config;

interface CanvasProps{
    boardId: string;
};
export const Canvas = ({
    boardId,
}: CanvasProps) =>{
   
    return(
        <main className="h-full w-full relative bg-neutral-300 touch-none">
            <Info boardId={boardId}/>
            <Participants/>
            <Toolbar/>
        </main>
    );
};