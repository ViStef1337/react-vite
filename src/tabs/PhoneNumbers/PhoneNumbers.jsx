import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { PhoneNumbersForm } from '../../components/PhoneNumbersComps/PhoneNumbersForm/PhoneNumbersForm.jsx';
import { PhoneNumbersList } from '../../components/PhoneNumbersComps/PhoneNumbersList/PhoneNumbersList.jsx';
import { PhoneNumbersFilter } from '../../components/PhoneNumbersComps/PhoneNumbersFilter/PhoneNumbersFilter.jsx';

export const PhoneNumbers = () => {
  const [filter, setFilter] = useState('');
  const [phoneNumbers, setPhoneNumber] = useState(
    JSON.parse(localStorage.getItem('phoneNumbers')) || [],
  );
  const addPhoneNumber = (name, number) => {
    setPhoneNumber([...phoneNumbers, { name, number, id: nanoid() }]);
  };
  useEffect(() => {
    localStorage.setItem('phoneNumbers', JSON.stringify(phoneNumbers));
  }, [phoneNumbers]);
  const phoneNumberDelete = id => {
    setPhoneNumber(
      phoneNumbers.filter(item => {
        return item.id !== id;
      }),
    );
  };

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const filteredPhoneNumbers = phoneNumbers.filter(item => {
    return item.name.toLowerCase().includes(filter.toLowerCase());
  });
  console.log(filteredPhoneNumbers);
  return (
    <>
      <PhoneNumbersForm addPhoneNumber={addPhoneNumber} />
      <PhoneNumbersFilter handleChange={handleChange} />
      <PhoneNumbersList
        phoneNumbersList={filteredPhoneNumbers}
        phoneDelete={phoneNumberDelete}
      />
    </>
  );
};
