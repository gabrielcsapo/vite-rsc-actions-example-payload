"use server";

export async function fetchData() {
  const testArray = [...Array(Math.floor(Math.random() * 1000) + 1)].map(
    (_, i) => "Hello world"
  );

  return testArray;
}
