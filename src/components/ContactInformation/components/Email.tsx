import React from 'react'
import ContactInformation from '../ContactInformation'
import { HiOutlineMail } from 'react-icons/hi';

export default function Email() {
	return (
		<ContactInformation
		value='pierre.toure.pro@gmail.com'
		Icon={HiOutlineMail} />
	)
}
