export const fetchTableData = () =>
  fetch(
    window.location.href.indexOf("?url=") == -1
      ? "https://fmf-fri-timetable-scraper.herokuapp.com/getUrnik"
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
