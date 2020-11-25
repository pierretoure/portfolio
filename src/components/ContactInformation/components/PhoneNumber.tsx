import React from 'react'
import ContactInformation from '../ContactInformation'
import { AiOutlinePhone } from 'react-icons/ai';

export default function PhoneNumber() {
	return (
		<ContactInformation
		value='06 62 60 27 69'
		copyValue='+330662602769'
		Icon={AiOutlinePhone} />
	)
}
