const contactsInitialState = [];

export const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload];
    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filtersInitialState = '';

export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/setContactFilter':
      return action.payload;
    default:
      return state;
  }
};
