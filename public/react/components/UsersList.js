import React from 'react';
import { User } from './User';

export const UsersList = ({users}) => {
	return <>
		{
			users.map((user, idx) => {
				return <User user={user} key={idx} />
			})
		}
	</>
} 
