const url = "https://randomuser.me/api/";
export const fetchRandomUser = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const user = data.results[0];
    const {
      dob: { age },
      email,
      name: { first, last },
      location: {
        street: { number, name: streetName },
      },
      phone,
      login: { password },
      picture: { large:img },
    } = user;
    return {
      name: `${first} ${last}`,
      email,
      age,
      street: `${number} ${streetName}`,
      phone,
      password,
      img,
    };
  } catch (error) {
    console.log(error);
  }
};
