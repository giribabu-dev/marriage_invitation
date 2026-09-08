// Modular RSVP submission — swap this implementation for a real API call
// (Node/Express, Firebase, MongoDB, etc.) without touching the form component.
export async function submitRSVP(data) {
  void data;
  // Simulated network latency for now.
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // Example of the real integration this will become:
  // const res = await fetch("/api/rsvp", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // });
  // if (!res.ok) throw new Error("Failed to submit RSVP");
  // return res.json();

  return { success: true };
}
