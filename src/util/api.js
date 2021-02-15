export const fetchTableData = () =>
  fetch(
    window.location.href.indexOf("?url=") == -1
      ? "https://yon.si/urnik.php"
      : window.location.href.split("?url=")[1].split("&")[0],
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
