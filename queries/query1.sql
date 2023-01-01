CREATE TABLE Animal
(
  animalId INT NOT NULL auto_increment,
  age INT NOT NULL,
  name VARCHAR(64) NOT NULL,
  location VARCHAR(200) NOT NULL,
  picture VARCHAR(256) NULL,
  PRIMARY KEY (animalId)
);

CREATE TABLE Form
(
  date DATE NOT NULL,
  ownerName VARCHAR(100) NOT NULL,
  formId INT NOT NULL auto_increment,
  phoneNumber VARCHAR(11) NOT NULL,
  email VARCHAR(50) NOT NULL,
  hasAdopted INT NOT NULL,
  animalId INT NOT NULL,
  PRIMARY KEY (formId),
  FOREIGN KEY (animalId) REFERENCES Animal(animalId)
);

CREATE TABLE Cat
(
  animalId INT NOT NULL,
  PRIMARY KEY (animalId),
  FOREIGN KEY (animalId) REFERENCES Animal(animalId)
);

CREATE TABLE Dog
(
  animalId INT NOT NULL,
  PRIMARY KEY (animalId),
  FOREIGN KEY (animalId) REFERENCES Animal(animalId)
);

CREATE TABLE Roles
(
  roleId INT NOT NULL,
  roleName VARCHAR(50) NOT NULL,
  PRIMARY KEY (roleId),
  UNIQUE (name)
);

CREATE TABLE Foster
(
  endDate DATE,
  adoptionFormId INT NOT NULL,
  PRIMARY KEY (adoptionFormId),
  FOREIGN KEY (adoptionFormId) REFERENCES Form(adoptionFormId)
);

CREATE TABLE Adoption
(
  adoptionFormId INT NOT NULL,
  PRIMARY KEY (adoptionFormId),
  FOREIGN KEY (adoptionFormId) REFERENCES Form(adoptionFormId)
);

CREATE TABLE RolesLinks
(
  links VARCHAR(100) NULL,
  roleId INT NOT NULL,
  PRIMARY KEY (links, roleId),
  FOREIGN KEY (roleId) REFERENCES Roles(roleId)
);

CREATE TABLE Users
(
  userId INT NOT NULL auto_increment,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  dateOfBirth DATE NULL,
  email VARCHAR(50) NOT NULL,
  city INT NULL,
  roleId INT NOT NULL,
  PRIMARY KEY (userId),
  FOREIGN KEY (roleId) REFERENCES Roles(roleId),
  UNIQUE (username),
  UNIQUE (email)
);

CREATE TABLE Receipt
(
  receiptId INT NOT NULL auto_increment,
  formId INT NOT NULL,
  userId INT NOT NULL,
  PRIMARY KEY (receiptId),
  FOREIGN KEY (formId) REFERENCES Form(formId),
  FOREIGN KEY (userId) REFERENCES Users(userId)
);

CREATE TABLE Address
(
  addressId INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  formId INT NOT NULL,
  parentId INT NOT NULL,
  PRIMARY KEY (addressId),
  FOREIGN KEY (formId) REFERENCES Form(formId),
  FOREIGN KEY (parentId) REFERENCES Address(addressId)
);