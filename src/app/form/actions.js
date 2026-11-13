"use server";

import { redirect } from "next/navigation";

export async function formSubmit(formData) {
  const name = formData.get("name");

  return redirect("/hello/" + name);
}
