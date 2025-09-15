export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 text-center py-6">
      <p>
        &copy; {new Date().getFullYear()} MultiNotes. All rights reserved.
      </p>
    </footer>
  );
}
