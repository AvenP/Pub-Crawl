module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    format_date: (date) => {
      
      // Use JavaScript Date methods, we get and format the month, date, and year
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
        
        new Date(date).getFullYear()
      }`;
    },
  };