// int+letter || letter+int || sign+letter || letter+sign || int+sign || sign + int
export const mediumPassword = new RegExp("(?=.{8})(([a-zA-Z].*[0-9])|([0-9].*[a-zA-Z])|([^A-Za-z0-9].*[a-zA-Z])|([a-zA-Z].*[^A-Za-z0-9])|([^A-Za-z0-9].*[0-9])|([0-9].*[^A-Za-z0-9]))"); 

// letter + sign<=>int || int + letter<=>sign || sign + int<=>letter
export const  strongPassword = new RegExp("(?=.{8})(([a-zA-Z].*([0-9]+.*[^A-Za-z0-9]|[^A-Za-z0-9]+.*[0-9]))|([0-9].*([a-zA-Z]+.*[^A-Za-z0-9]|[^A-Za-z0-9]+.*[a-zA-Z]))|[^A-Za-z0-9].*([0-9]+.*[a-zA-Z]|[a-zA-Z]+.*[0-9]))");
