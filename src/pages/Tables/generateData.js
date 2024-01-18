import faker from 'faker';
import generateClientData from "../Client/generateClientData";

export default (limit = generateClientData, arrayData = true) => {
  const data = [];
  for (let i = 1; i <= limit; i++) {
    let row = null;
    if (arrayData) {
      row = [
        i,
        generateClientData.first_name,
        generateClientData.last_name,

      ];
    } else {
      row = {
        id: i,
        name: faker.name.findName(),
        salary: faker.finance.amount(),
        country: faker.address.country(),
        avatar: faker.image.avatar(),
        city: faker.address.city(),
        job: faker.name.jobTitle(),
        description: faker.lorem.sentence(),
        active: faker.random.boolean(),
        birthday: faker.date.past()
      };
    }
    data.push(row);
  }
  return data;
}