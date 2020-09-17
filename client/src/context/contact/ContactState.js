import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER
} from '../types';

const ContactState = (props) => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'Sara Watson',
				email: 'sara@gmail.com',
				phone: '222-222-2222',
				type: 'personal'
			}
		],
		current: null,
		filltered: null
	};

	const [ state, dispatch ] = useReducer(contactReducer, initialState);

	// Add Contact
	const addContact = (contact) => {
		contact.id = uuid.v4();
		dispatch({ type: ADD_CONTACT, payload: contact });
	};

	// Delete Contact
	const deleteContact = (id) => {
		dispatch({ type: DELETE_CONTACT, payload: id });
	};

	// Set Current Contact
	const SetCurrent = (contact) => {
		dispatch({ type: SET_CURRENT, payload: contact });
	};

	//Clear Current Contact
	const clearContact = () => {
		dispatch({ type: SET_CURRENT });
	};

	//Update Contact
	const updateContact = (contact) => {
		dispatch({ type: UPDATE_CURRENT, payload: contact });
	};

	// Filter Contacts
	const filterContacts = (text) => {
		dispatch({ type: FILTER_CONTACTS, payload: text });
	};

	// Clear Filter
	const clearContact = () => {
		dispatch({ type: CLEAR_FILTERS });
	};

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				filtered: state.filtered,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				updateContact,
				filterContacts,
				clearFilter
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
