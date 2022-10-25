const getAllSuperheroes = (state) => {
  return state.superheroesApi.queries["getSuperheroes(undefined)"].data;
};

const getSuperheroById = (state, id) => {
  const superheroes = getAllSuperheroes(state);
  return superheroes.find((superhero) => superhero._id === id);
};

export { getAllSuperheroes, getSuperheroById };
