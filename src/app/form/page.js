import { formSubmit } from "./actions";

export default function () {
  return (
    <form className="p-12" action={formSubmit}>
      <input type="text" name="name" className="border" />
      <button type="submit" className="bg-slate-300">
        Submit
      </button>
    </form>
  );
}
