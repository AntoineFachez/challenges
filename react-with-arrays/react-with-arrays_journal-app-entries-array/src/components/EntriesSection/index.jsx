import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";

export default function EntriesSection({ data }) {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>{data.length}</Badge>
        </Tab>
        <Tab>
          Favorites <Badge>1</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {data.map((entry, i) => (
          <>
            <Entry
              key={i}
              date={entry.date}
              motto={entry.motto}
              notes={entry.notes}
              isFavorite={entry.isFavorite}
            />
            {i < data.length - 1 && <Divider />}
          </>
        ))}
        {/* <Divider />
        <Entry
          date="Feb 26, 2028"
          motto="Thats life in the city"
          notes="Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
        />
        <Divider />
        <Entry
          date="Feb 25, 2028"
          motto="Thats life in the city"
          notes="Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
        /> */}
      </div>
    </section>
  );
}
