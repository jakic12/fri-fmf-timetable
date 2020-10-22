export default (data) => wrapEventStringData(getStringEvents(data));

const wrapEventStringData = stringData => 
`BEGIN:VCALENDAR
VERSION:1.0
PRODID:-//Homemade Urnik ISRM
${stringData}
END:VCALENDAR`;

function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

function addDays(date1, days) {
  var date = new Date(date1);
  date.setDate(date.getDate() + days);
  return date;
}

function addHours(date, h) {
  const date1 = new Date(date);
  date1.setTime(date1.getTime() + (h*60*60*1000));
  return date1;
}

function formatDateTime(date) {
  const year = date.getUTCFullYear();
  const month = pad(date.getUTCMonth() + 1);
  const day = pad(date.getUTCDate());
  const hour = pad(date.getUTCHours());
  const minute = pad(date.getUTCMinutes());
  const second = pad(date.getUTCSeconds());
  return `${year}${month}${day}T${hour}${minute}${second}Z`;
}

function pad(i) {
  return i < 10 ? `0${i}` : `${i}`;
}

const formatTime = (date, dan, ura) => formatDateTime(addHours(addDays(date, dan), ura));

const getStringEvents = data => {
  let out = ``;
  const startDate = getMonday(new Date());

  data.forEach(element => {
    out += `BEGIN:VEVENT
SUMMARY:${element.predmet.abbr} - ${element.tip}
DTSTART;TZID=${Intl.DateTimeFormat().resolvedOptions().timeZone};VALUE=DATE-TIME:${formatTime(startDate, element.dan, element.ura)}
DTEND;TZID=${Intl.DateTimeFormat().resolvedOptions().timeZone};VALUE=DATE-TIME:${formatTime(startDate, element.dan, element.ura + element.trajanje)}
DTSTAMP;VALUE=DATE-TIME:${formatDateTime(new Date())}
UID:homemade_urnik_fri_fmf
RRULE:FREQ=WEEKLY;UNTIL=20211013T000000;WKST=MO
DESCRIPTION:${element.predmet.name} @ ${element.ucilnica}\\n${element.profesor}
LOCATION:${element.ucilnica}
END:VEVENT\n`;
  })

  return out;
}

