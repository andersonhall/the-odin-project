function Person(firstName, LastName) {
  const secret = 'this is my secret';

  this.firstName = firstName;
  this.LastName = LastName;
  this.hasJob = false;

  this.fullName = function () {
    return this.firstName + ' ' + this.LastName;
  };

  this.setFirstName = function (firstName) {
    this.firstName = firstName;
  };

  this.setLastName = function (lastName) {
    this.lastName = lastName;
  };

  this.getSecret = function () {
    return secret;
  };
}
