const getUser = (id, callback) => {
  "use strict";
  const user = {
    name: "David"
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(123, (userObject) => {
  "use strict";
  console.log(userObject);
});