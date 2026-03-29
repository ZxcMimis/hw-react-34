import { createSelector } from "reselect";

const selectItems = state => state.contacts;
const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectItems, selectFilter],
  (items, filter) => {
    if (!items) return [];
    
    const normalizedFilter = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);