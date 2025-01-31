import { create } from "zustand";
import type { Element, ElementType } from "types/canvas-types";

// Generate a unique ID
const generateId = () => {
  return Math.random().toString(36).substring(2, 9);
};

const storedDiagram =
  typeof window !== "undefined" ? window.localStorage.getItem("Diagram") : null;

const initialElements = [
  {
    id: "g9g6ljxhj",
    active: false,
    type: "frame",
    style: {
      position: "relative",
      display: "flex",
      left: 0,
      top: 0,
      overflow: "hidden",
      cursor: "default",
      backgroundColor: "#9B9B9B",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "100%",
      zIndex: 0
    }
  },
  // ... other initial elements ...
];

export type CanvasState = {
  elements: Element[];
  setElements: (newElements: Element[]) => void;
  createElement: (element: Element) => void;
  deleteElement: (elementId: string) => void;
  addElement: (type: ElementType) => Element;
  getElement: (elementId: string) => Element | undefined;
  selectedElement: Element;
  setSelectedElement: (element: Element) => void;
};

const useCanvasStore = create<CanvasState>((set, get) => ({
  elements: (storedDiagram ? JSON.parse(storedDiagram) : initialElements) as Element[],
  selectedElement: null as Element | null,
  isRecordable: true,
  isUndoable: false,
  isRedoable: false,
  setElements: (newElements: Element[]) => { set({ elements: newElements }); },

  getElement: (elementId: string) => get().elements.find((elm) => elm?.id === elementId)!,

  createElement: (newElement: Element) => {
    const existingElement = get().getElement(newElement?.id ?? "");

    if (existingElement) {
      console.warn("an element already exists. overriding the element");
      get().elements.map((element: Element, index) => {
        if (element?.id === newElement?.id) {
          get().elements[index] = newElement;
        }
      });
    } else {
      set({ elements: [...get().elements, newElement] });
    }
  },

  deleteElement: (elementId: string) => {
    const newElements = get().elements.filter(el => el?.id !== elementId);
    get().setElements(newElements);
    set({ selectedElement: null });
  },

  setSelectedElement: (element: Element) => { set({ selectedElement: element }); },

  addElement: (type: ElementType) => {
    const newElement: Element = {
      id: `${type}-${generateId()}`,
      type: type,
      text: type === "text" ? "Type your text here" : "",
      visible: true,
      locked: type === "background",  // Lock background elements by default
      isParametrized: false,
      contentEditable: false,
      style: {
        position: type === "background" ? "absolute" : "absolute",
        display: 'flex',
        alignItems: type === "text" ? "center" : "auto",
        justifyContent: type === "text" ? "center" : "auto",
        left: type === "background" ? "0" : "50%",
        top: type === "background" ? "0" : "50%",
        transform: type === "background" ? "" : "translate(-5%, -50%)",
        border: 'none',
        resize: type === "background" ? "none" : "none",
        overflow: 'visible',
        cursor: type === "background" ? "default" : "move",
        backgroundSize: type === "background" ? "cover" : "contain",
        backgroundPosition: type === "background" ? "center" : "center",
        backgroundRepeat: type === "background" ? "no-repeat" : "repeat",
        background: type === "text" ? "transparent" : type === "background" ? "transparent" : "green",
        color: 'rgba(200,200,200,1)',
        width: type === "background" ? "100%" : type === "text" ? "auto" : "10%",
        height: type === "background" ? "100%" : type === "text" ? "auto" : "20%",
        padding: type === "text" ? "0px" : "0px",
        fontSize: String(Math.random()*80+10) + "px",
        fontWeight: (Math.random()*900),
        fontFamily: "Poppins",
        zIndex: type === "background" ? "0" : "1"
      }
    };

    // For background type, replace any existing background elements
    if (type === "background") {
      const newElements = get().elements.filter(el => el?.type !== "background");
      get().setElements([...newElements, newElement]);
    } else {
      get().setElements([...get().elements, newElement]);
    }

    return newElement;
  }
}));

export const CanvasSelector = (state: CanvasState) => ({
  elements: state.elements,
  setElements: state.setElements,
  createElement: state.createElement,
  deleteElement: state.deleteElement,
  addElement: state.addElement,
  getElement: state.getElement,
  selectedElement: state.selectedElement,
  setSelectedElement: state.setSelectedElement,
});

export { useCanvasStore };
