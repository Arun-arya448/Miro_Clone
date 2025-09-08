"use client";
import { memo } from "react";
import { LayerTypes, Side,XYWH } from "@/types/canvas";
import { useSelf,useStorage } from "@/liveblocks.config";
import { useSelectionBounds } from "@/hooks/use-selection-bounds";

interface SelectionBoxProps{
    onResizeHandlePointerDown: (corner: Side, initialBounds: XYWH) => void;
};

const HANDLE_WIDTH = 8;

export const SelectionBox = memo(({
    onResizeHandlePointerDown,
} : SelectionBoxProps) => {
    const solelayerId = useSelf((me) =>
        me.presence.selection.length === 1 ? me.presence.selection[0] : null
    );
     
    const isShowingHandles = useStorage((root) =>
        solelayerId && root.layers.get(solelayerId)?.type !== LayerTypes.Path
    );

    const bounds = useSelectionBounds();
    if(!bounds){
        return null;
    }

    return(
        <>
            <rect
                className="fill-transparent stroke-blue-500 stroke-1 pointer-events-none"
                style={{
                    transform: `translate${bounds.x}px, ${bounds.y}px`,
                }}
                x={bounds.x}
                y={bounds.y}
                width={bounds.width}
                height={bounds.height}
            />
            {isShowingHandles && (
                <>
                    {/* top-left; */}
                    <rect
                        className="fill-white stroke-1 stroke-blue-500"
                        x={0}
                        y={0}
                        style={{
                            cursor: "nwse-resize",
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px , ${bounds.y - HANDLE_WIDTH / 2}px)`
                        }}
                        onPointerDown={(e)=>{
                            e.stopPropagation();
                            //todo: add resize handler;
                        }}
                    />
                    {/* top-mid */}
                    <rect
                        className="fill-white stroke-1 stroke-blue-500"
                        x={0}
                        y={0}
                        style={{
                            cursor: "ns-resize",
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(${bounds.x + bounds.width/2 - HANDLE_WIDTH/2}px, ${bounds.y - HANDLE_WIDTH/2}px)`
                        }}
                        onPointerDown={(e)=>{
                            e.stopPropagation();
                            //todo: add resize handler;
                        }}
                    />
                    {/* top-right */}
                    <rect
                        className="fill-white stroke-1 stroke-blue-500"
                        x={0}
                        y={0}
                        style={{
                            cursor: "nesw-resize",
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(${bounds.x - HANDLE_WIDTH / 2 + bounds.width}px, ${bounds.y - HANDLE_WIDTH / 2}px)`
                        }}
                        onPointerDown={(e)=>{
                            e.stopPropagation();
                            //todo: add resize handler;
                        }}
                    />
                    {/* mid-right */}
                    <rect
                        className="fill-white stroke-1 stroke-blue-500"
                        x={0}
                        y={0}
                        style={{
                            cursor: "ew-resize",
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(${bounds.x - HANDLE_WIDTH / 2 + bounds.width}px, ${bounds.y + bounds.height / 2 - HANDLE_WIDTH / 2}px)`
                        }}
                        onPointerDown={(e)=>{
                            e.stopPropagation();
                            //todo: add resize handler;
                        }}
                    />
                    {/* bottom-right */}
                    <rect
                        className="fill-white stroke-1 stroke-blue-500"
                        x={0}
                        y={0}
                        style={{
                            cursor: "nwse-resize",
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(${bounds.x - HANDLE_WIDTH / 2 + bounds.width}px , ${bounds.y - HANDLE_WIDTH / 2 + bounds.height}px)`
                        }}
                        onPointerDown={(e)=>{
                            e.stopPropagation();
                            //todo: add resize handler;
                        }}
                    />
                    {/* bottom-mid */}
                    <rect
                        className="fill-white stroke-1 stroke-blue-500"
                        x={0}
                        y={0}
                        style={{
                            cursor: "ns-resize",
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(${bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2 + bounds.height}px)`
                        }}
                        onPointerDown={(e)=>{
                            e.stopPropagation();
                            //todo: add resize handler;
                        }}
                    />
                    {/* bottom-left */}
                    <rect
                        className="fill-white stroke-1 stroke-blue-500"
                        x={0}
                        y={0}
                        style={{
                            cursor: "nesw-resize",
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px , ${bounds.y - HANDLE_WIDTH / 2 + bounds.height}px)`
                        }}
                        onPointerDown={(e)=>{
                            e.stopPropagation();
                            //todo: add resize handler;
                        }}
                    />
                    {/* left-mid */}
                    <rect
                        className="fill-white stroke-1 stroke-blue-500"
                        x={0}
                        y={0}
                        style={{
                            cursor: "ew-resize",
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px , ${bounds.y - HANDLE_WIDTH / 2 + bounds.height / 2}px)`
                        }}
                        onPointerDown={(e)=>{
                            e.stopPropagation();
                            //todo: add resize handler;
                        }}
                    />
                </>
            )} 
        </>
    );
});

SelectionBox.displayName = "SelectionBox";