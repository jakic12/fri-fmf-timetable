import ical from 'ical-generator';

export default (data) => {
  const cal = ical({domain:'github.com', name:'ISRM urnik'});
  return addEvents(cal, data).toString();
};

function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff)).setHours(0,0,0,0);
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

const relativeTime = (date, dan, ura) => addHours(addDays(date, dan), ura);

const addEvents = (cal, data) => {
  const startDate = getMonday(new Date());

  data.forEach(element => {
    const event = cal.createEvent(Object.assign({
      start:relativeTime(startDate, element.dan, element.ura),
      end:relativeTime(startDate, element.dan, element.ura + element.trajanje),
      summary:`${element.predmet.abbr} - ${element.tip}`,
      description:`${element.predmet.name} @ ${element.ucilnica}\\n${element.profesor}`,
      location:element.ucilnica,
      timezone:Intl.DateTimeFormat().resolvedOptions().timeZone
    }, element.profesor? {
      organizer: {
        name: element.profesor + "",
        email:`${(element.profesor + "").split(" ")[0]}.${(element.profesor + "").split(" ")[1]}@fmf.uni-lj.si`
      },
    } : null))

    event.repeating({
      freq:'WEEKLY',
      until: addDays(relativeTime(startDate, element.dan, element.ura), 365),
    })
  });


  return cal;
}

