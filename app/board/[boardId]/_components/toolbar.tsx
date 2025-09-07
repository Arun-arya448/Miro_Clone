
import { MousePointer2, Pencil, Square,Circle,StickyNote,Type, Undo2, Redo2} from "lucide-react";
import { ToolButton } from "./tool-button";
import { CanvasMode, CanvasState, LayerTypes } from "@/types/canvas";

interface ToolbarProps{
    canvasState: CanvasState;
    setCanvasState: (newState : CanvasState) => void;
    undo: () => void;
    redo: () => void;
    canUndo: boolean;
    canRedo: boolean;
};

export const Toolbar = ({
    canvasState,
    setCanvasState,
    undo,
    redo,
    canUndo,
    canRedo,
} : ToolbarProps) => {
    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
            <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
                <ToolButton
                   label="Select"
                   onClick={() => setCanvasState({mode: CanvasMode.None})}
                   icon={MousePointer2}
                   isActive={
                    canvasState.mode === CanvasMode.None ||
                    canvasState.mode === CanvasMode.Translating ||
                    canvasState.mode === CanvasMode.SelectionNet ||
                    canvasState.mode === CanvasMode.Pressing ||
                    canvasState.mode === CanvasMode.Resizing 
                   }
                />
                <ToolButton
                   label="text"
                   onClick={() => setCanvasState({
                    mode: CanvasMode.Inserting,
                    layerType: LayerTypes.Text,
                   })}
                   icon={Type}
                   isActive={
                    canvasState.mode === CanvasMode.Inserting &&
                    canvasState.layerType === LayerTypes.Text
                   }
                />
                <ToolButton
                   label="Sticky Note"
                   onClick={() => setCanvasState({
                        mode: CanvasMode.Inserting,
                        layerType: LayerTypes.Note,
                   })}
                   icon={StickyNote}
                   isActive={
                    canvasState.mode === CanvasMode.Inserting &&
                    canvasState.layerType === LayerTypes.Note
                   }
                />
                <ToolButton
                   label="rectangle"
                   onClick={() => setCanvasState({
                        mode: CanvasMode.Inserting,
                        layerType: LayerTypes.Rectangle,
                   })}
                   icon={Square}
                   isActive={
                    canvasState.mode === CanvasMode.Inserting &&
                    canvasState.layerType === LayerTypes.Rectangle
                   }
                />
                <ToolButton
                   label="ellipse"
                   onClick={() => setCanvasState({
                        mode: CanvasMode.Inserting,
                        layerType: LayerTypes.Ellipse,
                   })}
                   icon={Circle}
                   isActive={
                    canvasState.mode === CanvasMode.Inserting &&
                    canvasState.layerType === LayerTypes.Ellipse
                   }
                />
                <ToolButton
                   label="Pen"
                   onClick={() => setCanvasState({
                        mode: CanvasMode.Pencil,
                   })}
                   icon={Pencil}
                   isActive={
                    canvasState.mode === CanvasMode.Pencil
                   }
                />
            </div>
            <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
                <ToolButton
                  label="Undo"
                  icon={Undo2}
                  onClick={undo}
                  isDisabled = {!canUndo}
                />
                <ToolButton
                  label="Redo"
                  icon={Redo2}
                  onClick={redo}
                  isDisabled = {!canRedo}
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

