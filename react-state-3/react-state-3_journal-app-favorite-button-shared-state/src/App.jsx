import { useState } from 'react';
import EntriesSection from './components/EntriesSection';
import EntryForm from './components/EntryForm';
import Footer from './components/Footer';
import Header from './components/Header';
import { uid } from 'uid';
import './App.css';
import { initialEntries } from './assets/mockData';

function App() {
  const [entries, setEntries] = useState(initialEntries);

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString('en-us', {
      dateStyle: 'medium',
    });
    setEntries([
      { id: uid(), isFavorite: false, date, ...newEntry },
      ...entries,
    ]);
  }
  const handleToggleFavorite = (id) => {
    const upDatedEntries = entries.map((entry) => {
      if (entry.id === id) {
        return { ...entry, isFavorite: !entry.isFavorite };
      }
      return entry;
    });
    setEntries(upDatedEntries);
  };
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm onAddEntry={handleAddEntry} />
        <EntriesSection
          entries={entries}
          onToggleFavorite={handleToggleFavorite}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
