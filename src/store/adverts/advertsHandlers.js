export const handleGetAdverts = (state, { payload }) => {
  state.adverts = payload;
  console.log('handleGetAdverts :>> ', payload);
};
export const handleAddContact = (state, { payload }) => {
  console.log('handleAddContact :>> ', payload);
  state.contacts.push(payload);
};

export const handleDelContact = (state, { payload }) => {
  const item = state.contacts.findIndex((index) => index.id === payload.id);
  state.contacts.splice(item, 1);
};
