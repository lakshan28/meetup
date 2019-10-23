export const fetchMeetups = () => {
  fetch("http://192.168.1.100:3000/api/meetups").then(res => res.json());
};
