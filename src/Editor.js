import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor() {
  const [value, setValue] = useState('');
  return <div class="quill"><ReactQuill theme="snow" value={value} onChange={setValue} placeholder="Your Note Here"  /></div>
}

export default Editor;

