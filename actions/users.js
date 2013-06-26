exports.userAdd = {
  name: "userAdd",
  description: "I add a user",
  inputs: {
    required: ["userName", "password"],
    optional: [],
  },
  authenticated: false,
  outputExample: {},
  version: 1.0,
  run: function(api, connection, next){
    api.users.add(connection.params.userName, connection.params.password, function(error){
      connection.error = error;
      next(connection, true);
    });
  }
};

exports.userDelete = {
  name: "userDelete",
  description: "I delete a user",
  inputs: {
    required: ["userName", "password"],
    optional: [],
  },
  authenticated: true,
  outputExample: {},
  version: 1.0,
  run: function(api, connection, next){
    api.users.delete(connection.params.userName, connection.params.password, function(error){
      connection.error = error;
      next(connection, true);
    });
  }
};

exports.authenticate = {
  name: "authenticate",
  description: "I authenticate a user",
  inputs: {
    required: ["userName", "password"],
    optional: [],
  },
  authenticated: false,
  outputExample: {},
  version: 1.0,
  run: function(api, connection, next){
    api.users.authenticate(connection.params.userName, connection.params.password, function(error, match){
      connection.error = error;
      connection.response.authenticated = match;
      next(connection, true);
    });
  }
};