"use client";
import { useHistory,useCanUndo,useCanRedo,useMutation } from "@/liveblocks.config";
import { useState, useCallback } from "react";
import { Camera, CanvasMode, CanvasState } from "@/types/canvas";

import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";
import { CursorsPresence } from "./cursors-presence";
import { pointerEventtoCanvasPoint } from "@/lib/utils";
// import { useSelf } from "@liveblocks/react/suspense"; //not @liveblocks/config;

interface CanvasProps{
    boardId: string;
};
export const Canvas = ({
    boardId,
}: CanvasProps) =>{
    const [canvasState, setCanvasState] = useState<CanvasState>({
        mode: CanvasMode.None,
    });

    const [camera,setCamera] = useState<Camera>({x:0, y:0});

    const history = useHistory();
    const canUndo = useCanUndo();
    const canRedo = useCanRedo();

    const onWheel = useCallback((e: React.WheelEvent) =>{
        setCamera((camera)=> ({
            x: camera.x - e.deltaX,
            y: camera.y - e.deltaY,
        }));
    },[]);

    const onPointerMove = useMutation(({setMyPresence}, e: React.PointerEvent) =>{
        e.preventDefault();

        const current = pointerEventtoCanvasPoint(e,camera);
        setMyPresence({cursor : current}); 
    },[]);

    return(
        <main className="h-full w-full relative bg-neutral-300 touch-none">
            <Info boardId={boardId}/>
            <Participants/>
            <Toolbar
              canvasState={canvasState}
              setCanvasState={setCanvasState}
              canUndo={canUndo}
              canRedo={canRedo}
              undo={history.undo}
              redo={history.redo}
            />

            <svg className="h-[100vh] w-[100vw]"
                 onWheel={onWheel}
                 onPointerMove={onPointerMove}
            >
                <g>
                    <CursorsPresence/>
                </g>
            </svg>
        </main>
    );
};