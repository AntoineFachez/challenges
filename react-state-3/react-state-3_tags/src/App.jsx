import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

export default function App() {
  const [tags, setTags] = useState(['JavaScript', 'React', 'CSS', 'HTML']);

  const handleAddTag = (newTag) => {
    console.log(newTag);
    const newTagArray = [...tags, newTag];
    setTags(newTagArray);
  };
  const handleDeleteTag = (tagToDelete) => {
    console.log();
    const newArray = tags.filter((tag) => tag !== tagToDelete);

    setTags(newArray);
  };

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
