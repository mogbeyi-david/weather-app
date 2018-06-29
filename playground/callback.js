const getUser = (id , callback) => {
  "use strict";
  const user = {
    name: "David"
  };
  callback(user);
};

getUser(123 , (userObject) => {
  "use strict";
  console.log(userObject);
});