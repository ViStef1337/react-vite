export const PhoneNumbersList = ({ phoneNumbersList, phoneDelete }) => {
  return (
    <ul>
      {phoneNumbersList.map(item => {
        return (
          <li key={item.number}>
            <p>
              {item.name} --- {item.number}
            </p>

            <button onClick={() => phoneDelete(item.id)}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};
