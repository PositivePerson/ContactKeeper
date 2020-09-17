import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Contact from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

export const Contacts = () => {
	const contactContext = useContext(ContactContext);

	const { contacts, filtered } = contactContext;

	if (contacts.length === 0) {
		return <h4>Please adda contact</h4>;
	}

	return (
		<Fragment>
			<TransitionGroup>
				{filtered !== null ? (
					filtered.map((contact) => (
						<CSSTransition key={contact.id} timeout={500} classNames='item'>
							<ContactItem contact={contact} />
						</CSSTransition>
					))
				) : (
					contacts.map((contact) => (
						<CSSTransition key={contact.id} timeout={500} classNames='item'>
							<ContactItem contact={contact} />
						</CSSTransition>
					))
				)}

				{contacts.map((contact) => <ContactItem key={contact.id} contact={contact} />)}
			</TransitionGroup>
		</Fragment>
	);
};
