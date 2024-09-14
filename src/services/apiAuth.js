import supabase from "./supabase";
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getUser() {
  const { data: session, error } = await supabase.auth.getSession();

  if (!session.session) return null;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }
  return user;
}
