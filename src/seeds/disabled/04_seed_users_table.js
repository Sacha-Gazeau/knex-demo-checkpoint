const tableName = "users";

const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).truncate();
  await knex(tableName).insert([
    {
      firstname: "Alice",
      lastname: "Dupont",
      bio: "Développeuse web passionnée par les nouvelles technologies.",
    },
    {
      firstname: "Bob",
      lastname: "Martin",
      bio: "Amateur de photographie et de voyages.",
    },
    {
      firstname: "Charlie",
      lastname: "Lemoine",
      bio: "Musicien et compositeur dans son temps libre.",
    },
    {
      firstname: "David",
      lastname: "Moreau",
      bio: "Sportif et adepte de la course à pied.",
    },
    {
      firstname: "Emma",
      lastname: "Bernard",
      bio: "Graphiste freelance spécialisée en design UX/UI.",
    },
  ]);
};
export { seed };
