export const fetchTableData = () =>
  fetch(
    window.location.href.indexOf("?url=") == -1
      ? "https://yon.si/urnik.json"
      : window.location.href.split("?url=")[1].split("&")[0],
    {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      referrerPolicy: "no-referrer",
    }
  );
