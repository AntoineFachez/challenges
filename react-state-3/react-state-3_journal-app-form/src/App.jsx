import EntriesSection from './components/EntriesSection';
import EntryForm from './components/EntryForm';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import { initialEntries } from './assets/mockData';
import { useState } from 'react';
import { uid } from 'uid';

function App() {
  const [entries, setEntries] = useState(initialEntries);

  const handleAddEntry = (newEntry) => {
    const date = new Date().toLocaleDateString('en-us', {
      dateStyle: 'medium',
    });
    const newArray = [{ ...newEntry, id: uid(), date: date }, ...entries];

    setEntries(newArray);
  };
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm onAddEntry={handleAddEntry} />
        <EntriesSection entries={entries} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
