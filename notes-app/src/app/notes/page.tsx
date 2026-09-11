// import NoteList from "./NoteList";
import { getNotes } from "@/app/services/notes";
import Link from "next/link";

const Notes = async ({
  searchParams,
}: {
  searchParams: Promise<{ important?: string }>;
}) => {
  const { important } = await searchParams;
  const showImportant = important === "true";

  const allNotes = getNotes();

  const notes = showImportant
    ? allNotes.filter((note) => note.important)
    : allNotes;

  return (
    <div>
      <h2>Notes</h2>
      <div>
        <Link href={showImportant ? "/notes" : "/notes?important=true"}>
          {showImportant ? "show all" : "show important only"}
        </Link>
      </div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link href={`/notes/${note.id}`}>{note.content}</Link>
            {note.important && <strong> (important)</strong>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;

// **********************************
// CLIENT SIDE SOLUTION

// const Notes = () => {
//   const notes = getNotes();

//   return (
//     <div>
//       <h2>Notes</h2>
//       <NoteList notes={notes} />
//     </div>
//   );
// };

// export default Notes;
