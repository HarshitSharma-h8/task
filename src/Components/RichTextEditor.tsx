// RichTextEditor.tsx
"use client"
import { useState } from "react";
import { EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <div className="p-5 border rounded-lg h-full w-full bg-white">
      <Editor editorState={editorState} onEditorStateChange={setEditorState} />
    </div>
  );
};

export default RichTextEditor;