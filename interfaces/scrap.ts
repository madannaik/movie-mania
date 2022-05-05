export const d = "sede";

if ("serviceWorker" in Navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./serviceworker.ts")
      .then((reg) => console.log("succeess", reg.scope))
      .catch((err) => console.log("error", err));
  });
}
