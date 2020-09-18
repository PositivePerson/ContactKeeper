import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFormFilter';
import AuthContext from '../../context/auth/authContext';

export const Home = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		// esling-disable-next-line
	}, []);

	return (
		<div className='grid-2'>
			<div>{/* ContactForm */}</div>
			<div>
				<ContactFilter />
				<Contacts />
			</div>
			<div>
				<ContactForm />
			</div>
		</div>
	);
};
